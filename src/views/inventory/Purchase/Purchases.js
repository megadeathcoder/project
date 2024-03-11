import React, { useState } from 'react';
import {
  Collapse,
  Button,
  Card,
  Col,
  Input,
  Label,
  FormText,
  FormGroup,
  Form,
  Row,
  CardBody,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';

const Purchases = () => {
  const [collapse, setCollapse] = useState(false);

  const data = [
   
    { id: 1, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 2, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 3, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 4, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 5, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 6, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 7, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 8, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 9, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 10, Vendor: '1037 A', PurchaseDate: 'NW.needlepunch_220gsm', CreatedBy: 'SURPLUS', color: 'black', quantity: '450 m' },
    
  
  ];
  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
  };

  const toggle = () => setCollapse(!collapse);

  return (
    <ComponentCard
    title=""
    subtitle={
      <p>
        {/* Overview of the projects */}
      </p>
    }
  >
     <Row>
      <Col md="8">
        <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }}>
          Add Purchase
        </Button>
        <Button className='my-btn-color' onClick={toggle.bind(null)} style={{ marginBottom: '1rem' }}>
              Search
            </Button>
      </Col>
    </Row>

    <Collapse isOpen={collapse}>
              <Card className="border">
                <CardBody>
                <Form>
               <Row>
                 <Col md="2">
                   <FormGroup>
                     <Label>Vendor</Label>
                     <Input type="text" placeholder="Order No" />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="2">
                   <FormGroup>
                     <Label>Purchase Date</Label>
                     <Input type="date" placeholder="" />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
              
                 <Col md="4">
                   <FormGroup>
                    <Button type="submit" className="btn btn-info" style={{marginTop:"28px"}}>
                        Search
                    </Button>
                    <Button type="reset" className="btn btn-info" style={{marginTop:"28px",marginLeft:"10px"}}>
                        Reset
                    </Button>
                   </FormGroup>
                 </Col>
               </Row>
               
              
             </Form>
                </CardBody>
              </Card>
            </Collapse>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
            <th>Vendor</th>
            <th>Purchase Date</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                  <td>{product.Vendor}</td>
                  <td>{product.PurchaseDate}</td>
                  <td>{product.CreatedBy}</td>
                  <td>
                    {/* Action buttons or icons */}
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" ><i className="bi bi-pencil-fill my-pen-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-eye-fill my-eye-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"> <i className="bi bi-geo-alt-fill my-geo-color" /> </button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-list my-list-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-trash-fill my-trash-color" /></button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            
    </div>
   
  </ComponentCard>

   
   
  );
};

export default Purchases;