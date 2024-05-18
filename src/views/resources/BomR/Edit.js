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
  const {id,name:Name,sort_order : sortOrder,is_trashed:isTrashed} = location.state.item || {};  // Default to an empty object if state is undefined
  const validationData = location.state.validationDataArray || []; 
  const [errors,setErrors] = useState({});
  const [formDatas, setFormDataS] = useState({
    name:Name,
    sortOrder,
    isTrashed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));

    switch (name){
      case 'name':
            if (validationData.some(item => item.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"name": "This name has already been used"}));
          } else {
              setErrors((prev)=>({...prev,"name": ""}));
          }
          break;

      default:
            if (!value) {
              setErrors((prev)=>({...prev,"sortOrder": "Please use characters only"}));
          } else {
              setErrors((prev)=>({...prev,"sortOrder": ""}));
          }
            break;
    
        }

  };

  console.log(validationData);

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
        const response = await fetch(`https://factory.teamasia.in/api/public/bomrawmaterialcategories/${id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify({
              name:formDatas.name,
              sort_order:formDatas.sortOrder,
              is_trashed:formDatas.isTrashed
            }),
        });
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/resources/bom-raw-material-category');
            
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
  
  if(formDatas.name === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["name"] = "Required";
  }
  if(formDatas.sortOrder === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["sortOrder"] = "Required";
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
                 <Col md="8">
                   <FormGroup>
                     <Label>BOM Raw Material Master Name</Label>
                     <Input        
                     type="text" 
                      name="name" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.name}
                      onChange={handleChange} 
                      className={errors.name ? "is-invalid":""}
                      />
                      {errors.name &&  <FormText className="text-danger">{errors.name}</FormText>}
                   </FormGroup>
                 </Col>
                 <Col md="8">
                   <FormGroup>
                     <Label>Sort Order</Label>
                     <Input        
                     type="number" 
                      name="sortOrder" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.sortOrder}
                      onChange={handleChange} 
                      className={errors.sortOrder ? "is-invalid":""}
                      />
                      {errors.sortOrder &&  <FormText className="text-danger">{errors.sortOrder}</FormText>}
                   </FormGroup>
                 </Col>
                 <Col md="4">
                   <FormGroup>
                    <Button type="submit" 
                            className="btn my-btn-color" 
                            style={{marginTop:"28px"}}
                            disabled={errors.name || errors.sortOrder}
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