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
  const validationData = location.state || [];
  const [errors,setErrors] = useState({});
  const [formDatas, setFormDataS] = useState({
    name:'',
    code:'',
    serialNumber:''
  });
  
  console.log(validationData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));

    switch (name){
      case 'name':
            if (validationData.some(item => item.name.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"name": "This name has already been used"}));
          } else {
              setErrors((prev)=>({...prev,"name": ""}));
          }
          break;

      case 'code':
        if (validationData.some(item => item.categoryCode.toLowerCase() === value.toLowerCase().trim())) {
          setErrors((prev)=>({...prev,"code": "This code has already been used"}));
      } else {
          setErrors((prev)=>({...prev,"code": ""}));
      }
          break;
      
      default:
            if (!value) {
              setErrors((prev)=>({...prev,"serialNumber": "Please use numbers only"}));
          } else {
              setErrors((prev)=>({...prev,"serialNumber": ""}));
          }
            break;
    
        }
    
  };

  async function apiCall() {
    try {
        const formData = new FormData();
        formData.append('name', formDatas.name);
        formData.append('code', formDatas.code);
        formData.append('serial_number', formDatas.serialNumber);
        formData.append('is_trashed','0');
        console.log('formdata',formData);

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/bomcodingcategories`, {
            method: "POST",
            headers: {
              'Authorization': `Bearer ${token}`
            },
           
            body: formData,
        });
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/resources/bom-coding-category');
            
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
  if(formDatas.code === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["code"] = "Required";
  }
  if(formDatas.serialNumber === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["serialNumber"] = "Required";
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
                 <Col md="9">
                   <FormGroup>
                     <Label>BOM Coding Category Name</Label>
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
                 <Col md="4">
                   <FormGroup>
                     <Label>Category Code</Label>
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
                     <Label>Serial Number</Label>
                     <Input        
                     type="number" 
                      name="serialNumber" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.serialNumber}
                      onChange={handleChange} 
                      className={errors.serialNumber ? "is-invalid":""}
                      />
                      {errors.serialNumber &&  <FormText className="text-danger">{errors.serialNumber}</FormText>}
                   </FormGroup>
                 </Col>
                 <Col md="4">
                   <FormGroup>
                   <Button type="submit" 
                            className="btn my-btn-color" 
                            style={{marginTop:"28px"}}
                            disabled={errors.name || errors.code || errors.serialNumber}
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