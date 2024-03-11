import React,{useEffect, useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';

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
import ComponentCard from '../../../components/ComponentCard2';

// import ComponentCard from '../../components/ComponentCard';

const Edit= () => {
  const location = useLocation();
  const {companyName,Factory,AddLabels,CompanyDescription,LimitforDaysAllowed,LimitforCreditAllowed,CompanyRepresentatives,CompanyDocuments,companyAddress} = location.state || {}; // Default to an empty object if state is undefined
  const navigate= useNavigate();
  const [items, setItems] = useState(CompanyRepresentatives);
  const [compdoc, setCompdoc] = useState(CompanyDocuments);
  const [FactoryArray, setFactoryArray] = useState([]);



 const IndicatorsContainer = (props) => {
  return (
    <div style={{ background: '#00B8D9' }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

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

  const addCompdoc= () => {
    const newItems = compdoc.slice();
    newItems.push('')
    setCompdoc(newItems);
  };

  const removeCompdoc = index => {
    const newItems = compdoc.slice();
    newItems.splice(index, 1);
    setCompdoc(newItems);
  };

  const handleCompdoc = (index, event) => {
    const newItems = compdoc.slice();
    console.log("data",index,newItems);
    newItems[index] =  event.target.value;
    setCompdoc(newItems);
  };

  const handleEditAddress = ()=>{
    
   console.log('address',location.state.companyName);
    navigate('/order/customers/address',{ state: companyAddress });
  }

  useEffect(()=>{
    const companyOptions = ()=>{
      const obj = Factory.map((factoryitem)=>{
        return {
          value:factoryitem,
          label:factoryitem,
          color: '#00B8D9'
        }
      })
      setFactoryArray(obj)
      
  }
  companyOptions();
  console.log('factoryarray',FactoryArray);
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
              <Row>
                <Col md="8">
                  <div className='' style={{ marginRight:'10px',marginTop:'10px'}}>
                     Edit Customer
                  </div>
                </Col>
                <Col md="4">
                  <Button className='my-btn-color' style={{ marginRight:'10px' }} onClick={() => handleEditAddress()}>
                    Manage Address
                  </Button>
                </Col>
              </Row>
             
             </CardTitle>
           </CardBody>
           <CardBody>
             <Form>
               <Row>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Company Name</Label>
                     <Input type="text" placeholder ={companyName} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                 <ComponentCard title="Factory">
                    <Select
                      closeMenuOnSelect={false}
                      components={{ IndicatorsContainer }}
                      // defaultValue={[Factory[0], Factory[1]]}
                      isMulti
                      options={FactoryArray}
                    />
                  </ComponentCard>
                   
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Add Labels</Label>
                     <Input type="text" placeholder ={AddLabels} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Company Description</Label>
                     <Input type="textarea" placeholder ={CompanyDescription} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Limit for Days Allowed</Label>
                     <Input type="text" placeholder ={LimitforDaysAllowed} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Limit for Credit Allowed</Label>
                     <Input type="text" placeholder ={LimitforCreditAllowed} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 
                 <Row className='mt-4 mb-3'>
                          <Col md="11">
                              <span className='table-title'>Company Representatives</span>
                          </Col>
                  </Row>
                 <table className="table">        
                  <thead>
                        <tr>
                        <Row className='mt-4'>
                          <Col md="2">
                              <td >Name</td>
                          </Col>
                          <Col md="2">
                              <td>Designation</td>
                          </Col>
                          <Col md="2">
                              <td >	Email</td>
                          </Col>
                          <Col md="2">
                              <td >Country code</td>
                          </Col>
                          <Col md="2">
                              <td >Mobile</td>
                          </Col>
                          <Col md="2">
                            <Button type="button" className='btn-success' onClick={addItem}>+</Button>
                          </Col>
                        </Row>
                        </tr>
                      </thead>
          
              <tbody>
              {items.map((item, index) => (
                  <tr key={item.index}>
                    <Row>
                      <Col md="2"><Input name="product" value={item.Address} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="product" value={item.Designation} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="product" value={item.Email} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="product" value={item.Countrycode} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="product" value={item.Mobile} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><button type="button"  style={{ backgroundColor:"red",marginTop:"5px"}} onClick={() => removeItem(index)}>X</button></Col>
                    </Row>
                    
                  </tr>
                ))}
                
              </tbody>
            </table>

            <Row className='mt-4 mb-3'>
                          <Col md="11">
                              <span className='table-title'>Company Documents</span>
                          </Col>
           </Row>  
                  
            <table className="table">        
                  <thead>
                   
                        <tr>
                        <Row className='mt-4'>
                          <Col md="11">
                              <td>Upload Document</td>
                          </Col>
                          <Col md="1">
                            <Button type="button" className='btn-success' onClick={addCompdoc}>+</Button>
                          </Col>
                        </Row>
                        </tr>
                      </thead>
          
              <tbody>
              {compdoc.map((item, index) => (
                  <tr key={item.index}>
                    <Row>
                      <Col md="4"><Input name="product" value={item.title} type="text" onChange={e => handleCompdoc(index, e)} placeholder="" /></Col>
                      <Col md="7"><Input name="product"  type="file" onChange={e => handleCompdoc(index, e)} placeholder="" /></Col>
                      <Col md="1"><button type="button"  style={{ backgroundColor:"red",marginTop:"5px"}} onClick={() => removeCompdoc(index)}>X</button></Col>
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

export default Edit