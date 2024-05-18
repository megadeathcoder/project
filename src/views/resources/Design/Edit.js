import React ,{ useState } from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,

} from 'reactstrap';
// import { useParams } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {id,code,customer_alias : customerAlias,manufacturer_alias : manufacturerAlias,is_trashed:isTrashed} = location.state.item || {};  // Default to an empty object if state is undefined
  const validationData = location.state.validationDataArray || []; 
  const [errors,setErrors] = useState({});
  const [formDatas, setFormDataS] = useState({
    code,
    customerAlias,
    manufacturerAlias,
    isTrashed
  });

  console.log(validationData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));

    switch (name){
      case 'code':
            if (validationData.some(item => item.code.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"code": "This code has already been used"}));
          } else {
              setErrors((prev)=>({...prev,"code": ""}));
          }
          break;

      case 'customerAlias':
            if (validationData.some(item => item.customerAlias.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"customerAlias": "This name has already been used"}));
          } else {
              setErrors((prev)=>({...prev,"customerAlias": ""}));
          }
          break;
      
      default:
        if (validationData.some(item => item.manufacturerAlias.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"manufacturerAlias": "Please use characters only"}));
          } else {
              setErrors((prev)=>({...prev,"manufacturerAlias": ""}));
          }
            break;
    
        }

  };

  async function apiCall() {
    try {
        // const formData = new FormData();
        // formData.append('name', formDatas.name);
        // formData.append('iso_code', formDatas.isoCode);
        // formData.append('isd_code', formDatas.isdCode);
        // console.log("json",JSON.stringify({
        //   name:formDatas.name,
        //   iso_code:formDatas.isoCode,
        //   isd_code:formDatas.isdCode
        // }));
        // console.log('formdata',formData);

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/designs/${id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify({
              code:formDatas.code,
              customer_alias:formDatas.customerAlias ,
              manufacturer_alias:formDatas.manufacturerAlias,
              is_trashed:formDatas.isTrashed
            }),
        });
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/resources/designs');
            
        } 
            // Handle any errors, such as showing an error message to the user
            console.error("Authentication failed:", data.message);
            return null;
      
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
}

const validateForm=()=>{
  let formIsValid =true;
  const errors1 ={};
  
  if(formDatas.manufacturerAlias === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["manufacturerAlias"] = "Required";
  }
  if(formDatas.code === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["code"] = "Required";
  }
  if(formDatas.customerAlias === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["customerAlias"] = "Required";
  }
  
  setErrors(errors1);
  return formIsValid;
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validateForm()) {
      console.log('Form is valid, proceed with API call');
      apiCall();
    } else {
      console.log('Form is invalid, do not submit');
    }
  };

  return (
<div>
     
     <Row>
       <Col md="12">
         <Card>
           <CardTitle tag="h4" className="border-bottom bg-primary p-3 mb-0 text-white">
           </CardTitle>
           <CardBody className="bg-light">
             <CardTitle tag="h4" className="mb-0">
             </CardTitle>
           </CardBody>
           <CardBody>
             <Form onSubmit={handleSubmit}>
               <Row>
                 <Col md="4">
                   <FormGroup>
                     <Label>Design Code</Label>
                     <Input        
                     type="text" 
                      name="code" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.code}
                      onChange={handleChange} 
                      className={errors.code ? "is-invalid":""}
                      />
                      {errors.code &&  <FormText className="text-danger">{errors.code}</FormText>}
                   </FormGroup>
                 </Col>
                 <Col md="4">
                   <FormGroup>
                     <Label>Customer Alias</Label>
                     <Input        
                     type="text" 
                      name="customerAlias" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.customerAlias}
                      onChange={handleChange} 
                      className={errors.customerAlias ? "is-invalid":""}
                      />
                      {errors.customerAlias &&  <FormText className="text-danger">{errors.customerAlias}</FormText>}
                   </FormGroup>
                 </Col>
                 <Col md="4">
                   <FormGroup>
                     <Label>Manufacturer Alias</Label>
                     <Input        
                     type="text" 
                      name="manufacturerAlias" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.manufacturerAlias}
                      onChange={handleChange} 
                      className={errors.manufacturerAlias ? "is-invalid":""}
                      />
                      {errors.manufacturerAlias &&  <FormText className="text-danger">{errors.manufacturerAlias}</FormText>}
                   </FormGroup>
                 </Col>
                 <Col md="4">
                   <FormGroup>
                   <Button type="submit" 
                            className="btn my-btn-color" 
                            style={{marginTop:"28px"}}
                            disabled={errors.code || errors.customerAlias || errors.manufacturerAlias}
                    >
                        Submit
                    </Button>
                   </FormGroup>
                 </Col>
               </Row>
               
              
             </Form>
             
           </CardBody>
          
          
           
         </Card>
       </Col> 
     </Row>
     
   </div>

   
   
  );
};

export default Edit;