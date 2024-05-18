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
import { useLocation, useNavigate } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [imageFile, setImageFile] = useState(null);
  const {id,name:Name,code,description,is_trashed:isTrashed} = location.state.item || {};  // Default to an empty object if state is undefined
  const validationData = location.state || [];
  const [errors,setErrors] = useState({});
  const [formDatas, setFormDataS] = useState({
    name:Name,
    code,
    description,
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
      case 'name':
            if (validationData.some(item => item.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"name": "This name has already been used"}));
          } else {
              setErrors((prev)=>({...prev,"name": ""}));
          }
          break;

      case 'code':
            if (!value) {
              setErrors((prev)=>({...prev,"code": "Please use characters only"}));
          } else {
              setErrors((prev)=>({...prev,"code": ""}));
          }
          break;
      
      default:
          break;
    }

  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  async function uploadImage(file){
    try{
      const formData  = new  FormData();
      formData.append('image',file);
      const response = await fetch('https://factory.teamasia.in/api/public/fileuploads',{
          method : 'POST',
          body:formData,
      });

      const data= await response.json();
      if(data.ok){
        return data.imagePath;
      }
      console.error('Error:',data.message);
      return null;
    }catch(error){
      console.error('Error uploading image:',error);
      return null;
    }
  }

  async function apiCall() {
    try {
      const imagePath = await uploadImage(imageFile);

      if(imagePath){
        console.log('formdata',formDatas);

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/faults/${id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify({
              name:formDatas.name,
              code:formDatas.code,
              description:formDatas.description,
              image_path:imagePath,
              is_trashed:formDatas.isTrashed,
            }),
        });
       
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {
          navigate('/resources/faults');
          return null
        } 
          console.error("Error:", data.message);
          return null;
      }
        console.error('Failed to upload image');
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
                     <Label>Fault Code</Label>
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
                     <Label>Fault Name</Label>
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
                     <Label>Description</Label>
                     <Input        
                     type="text" 
                      name="description" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.description}
                      onChange={handleChange} 
                     />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="8">
                   <FormGroup>
                     <Label>Fault Image</Label>
                     <Input type="file" onChange={handleImageChange}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 <Col md="4">
                   <FormGroup>
                    <Button type="submit" className="btn my-btn-color" style={{marginTop:"28px"}}>
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