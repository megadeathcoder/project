import React, { useState } from 'react';

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
  const {name:Name,discount_percent : DiscountPercentage,is_factory_stock: DefaultToFactoryStock} = location.state || {}; // Default to an empty object if state is undefined
  const [check,setCheck] = useState(DefaultToFactoryStock === '1')
  
  const [formDatas, setFormDataS] = useState({
    name:Name,
    DiscountPercentage,
    DefaultToFactoryStock
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const checkboxclick = ()=>{
    let value;
    console.log('hi',check);
    setCheck(!check);
    if(check){
      value=0
    }else{
      value=1
    }
    setFormDataS(prevState => ({
     ...prevState,
     DefaultToFactoryStock:value
   }));
}

  async function apiCall() {
    try {
        const formData = new FormData();
        formData.append('name', formDatas.name);
        formData.append('discount_percent',formDatas.DiscountPercentage);
        formData.append('is_factory_stock',formDatas.DefaultToFactoryStock);
        // console.log("json",JSON.stringify({
        //   name:formDatas.name,
        //   discount_percent:formDatas.DiscountPercentage,
        //   is_factory_stock:formDatas.DefaultToFactoryStock
        // }));
        // console.log('formdata',formData);

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/grades`, {
            method: "POST",
            headers: {
              'Authorization': `Bearer ${token}`
            },
           
            body: formData,
        });
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/resources/grades');
            
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
                 <Col md="8">
                   <FormGroup>
                     <Label>Grade Name</Label>
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
                 <Col md="8">
                   <FormGroup>
                     <Label>Discount Percentage</Label>
                     <Input 
                      type="text" 
                      name="DiscountPercentage" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.DiscountPercentage}
                      onChange={handleChange} 
                      />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="8">
                   <FormGroup>
                     {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                     <Input 
                     type="checkbox" checked={ check } onChange={checkboxclick}  
                     />
                     <Label className='mx-1'>Default to factory stock</Label>
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