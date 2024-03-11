import React,{useState} from 'react';

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
  const {Name} = location.state || {}; // Default to an empty object if state is undefined
  const [items, setItems] = useState([]);
 console.log("items",items);
  const addItem = () => {
    const newItems = items.slice();
    newItems.push('')
    setItems(newItems);
  };

  const removeItem = index => {
    const newItems = items.slice();
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleInputChange = (index, event) => {
    const newItems = items.slice();
    console.log("data",index,newItems);
    newItems[index] =  event.target.value;
    setItems(newItems);
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
             <Form>
               <Row>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Address Type</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Address Alias</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Address Line 1</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Address Line 2</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Landmark</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Pin Code</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Country</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>State</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>City</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>GST No</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
              

                 <Row className='mt-4'>
                  <Col md="8">
                      <Button disabled >Representatives</Button>
                  </Col>
                  
                </Row>

                 <table className="table">        
                  <thead>
                        <tr>
                          <Row>
                            <Col md="2"><th>Name</th></Col>
                            <Col md="2"><th>Designation</th></Col>
                            <Col md="2"><th>Email</th></Col>
                            <Col md="2"><th>Country code</th></Col>
                            <Col md="2"><th>Mobile</th></Col>
                            <Col md="2"><th><Button type="button" className='btn-success' onClick={addItem}>+</Button></th></Col>
                          </Row>
                        </tr>
                      </thead>
          
              <tbody>
              {items.map((item, index) => (
                  <tr key={item.index}>
                    <Row>
                      <Col md="2"><Input name="product" value={item} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="product" value={item} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="product" value={item} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="product" value={item} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="product" value={item} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><button type="button"  style={{ backgroundColor:"red",marginTop:"5px"}} onClick={() => removeItem(index)}>X</button></Col>
                    </Row>
                    
                  </tr>
                ))}
              </tbody>
            </table>

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