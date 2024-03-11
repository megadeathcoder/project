import React,{useEffect, useState} from 'react';

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
  const {Method,TestName} = location.state || {}; // Default to an empty object if state is undefined
  const [items, setItems] = useState([]);
//  console.log("items",items);

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

  useEffect(()=>{
    // function testDirectionAdd(){
    // const testArray = items.slice();
    // testArray.push(TestDirection);
    // setItems(testArray);
    // }
    // testDirectionAdd();
  },[]);

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
                 <Col md="8" >
                   <FormGroup>
                     <Label>Test Name</Label>
                     <Input type="text" placeholder ={TestName} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="8" className='mb-5'>
                   <FormGroup>
                     <Label>Method</Label>
                     <Input type="text" placeholder ={Method} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 <Row>
                  <Col md="8">
                      <Button disabled className='btn btn-warning'>Test Directions</Button>
                  </Col>
                  <Col md="2">
                    <Button type="button" className='btn-success' onClick={addItem}>+</Button>
                  </Col>
                </Row>

                 <table className="table">        
                  <thead>
                        <tr>
                          <Row>
                            <Col md="3"><th>Name</th></Col>
                          </Row>
                        </tr>
                      </thead>
          
              <tbody>
              {items.map((item, index) => (
                  <tr key={item.index}>
                    <Row>
                      <Col md="8"><Input name="product" value={item} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
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