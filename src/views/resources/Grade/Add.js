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
import { useLocation } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Add = () => {
  const location = useLocation();
  const {GradeName, DiscountPercentage, DefaultToFactoryStock} = location.state || {}; // Default to an empty object if state is undefined
  const [data,setData] = useState(DefaultToFactoryStock === '1')
  const checkboxclick = ()=>{
       console.log('hi',data);
       setData(!data);
       console.log('by',data);
  }
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
             <Form>
               <Row>
                 <Col md="8">
                   <FormGroup>
                     <Label>Grade Name</Label>
                     <Input type="text" placeholder ={GradeName} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="8">
                   <FormGroup>
                     <Label>Discount Percentage</Label>
                     <Input type="text" placeholder ={ DiscountPercentage} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="8">
                   <FormGroup>
                     {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                     <Input type="checkbox" checked={ data} onChange={checkboxclick}  />
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

export default Add;