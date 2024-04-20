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
  const {name:Name,code,serial_number:serialNumber} = location.state || {};  // Default to an empty object if state is undefined
  const [formDatas, setFormDataS] = useState({
    name:Name,
    code,
    serialNumber
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));
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

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('event',event);
  apiCall();

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
                     />
                     <FormText className="muted"></FormText>
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
                     />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="4">
                   <FormGroup>
                     <Label>Serial Number</Label>
                     <Input        
                     type="text" 
                      name="serialNumber" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.serialNumber}
                      onChange={handleChange} 
                     />
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