import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import Select, { } from 'react-select';

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
// import ComponentCard from '../../../components/ComponentCard2';

// import ComponentCard from '../../components/ComponentCard';

const Edit= () => {
  const navigate= useNavigate();
  const [data, setData] = useState([]);
  const Originaldata = [];
  
  console.log('data',data);
  const InputChange = (e) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  console.log('data',data);

  };

  const formSubmit = ()=>{
    
    //  console.log('address',location.state.companyName);
    setData();
      navigate('/order/customers/address');
    }
    const formReset = ()=>{
    
      //  console.log('address',location.state.companyName);
      setData(Originaldata);
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
              <Row>
                <Col md="8">
                  <div className='' style={{ marginRight:'10px',marginTop:'10px'}}>
                  Edit Address
                  </div>
                </Col>
                <Col md="4">
                  
                </Col>
              </Row>
             
             </CardTitle>
           </CardBody>
           <CardBody>
             <Form>
               <Row>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Address Type</Label>
                     <Input type="text" value ={data.AddressType} name='AddressType' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Address Alias</Label>
                     <Input type="text" value ={data.AddressAlias} name='AddressAlias' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Address Line 1</Label>
                     <Input type="textarea" value ={data.AddressLine1} name='AddressLine1' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Address Line 2</Label>
                     <Input type="textarea" value ={data.AddressLine2} name='AddressLine2' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Landmark</Label>
                     <Input type="text" value ={data.Landmark} name='Landmark' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Pin Code</Label>
                     <Input type="text" value ={data.PinCode} name='PinCode' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Country</Label>
                     <Input type="text" value ={data.Country} name='Country' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>State</Label>
                     <Input type="text" value ={data.State} name='State' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>City</Label>
                     <Input type="text" value ={data.City} name='City' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>GST No</Label>
                     <Input type="text" value ={data.GSTNo} name='GSTNo' onChange={(e)=>{InputChange(e)}}/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

           </Row>
           <Row>
                 
                 <Col md="4">
                   <FormGroup>
                    <Button type="submit" className="btn btn-info" style={{marginTop:"28px"}} onClick={(e)=>{formSubmit(e)}}>
                        Find
                    </Button>
                    <Button type="reset" className="btn btn-info" style={{marginTop:"28px",marginLeft:"10px"}} onClick={(e)=>{formReset(e)}}>
                        Reset
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

export default Edit