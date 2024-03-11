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

const Invoices = () => {
  const [collapse, setCollapse] = useState(false);

  const orders = [
    { invoiceNo: 'TCINV22-23/0781', orderId: '#1591', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0782', orderId: '#1592', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0783', orderId: '#1593', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0784', orderId: '#1594', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0785', orderId: '#1595', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0786', orderId: '#1596', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0787', orderId: '#1597', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0788', orderId: '#1598', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0789', orderId: '#1599', invoiceDate: '28 Jun, 2022' },
    { invoiceNo: 'TCINV22-23/0780', orderId: '#1590', invoiceDate: '28 Jun, 2022' },
    
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

<Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }}>
           Create Invoice
            </Button>
           

      <Button className='my-btn-color' onClick={toggle.bind(null)} style={{ marginBottom: '1rem' }}>
              Search
            </Button>
            <Collapse isOpen={collapse}>
              <Card className="border">
                <CardBody>
                <Form>
               <Row>
               <Col md="3">
                   <FormGroup>
                     <Label>Invoice No</Label>
                     <Input type="text" placeholder="" />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="3">
                   <FormGroup>
                     <Label>Customer</Label>
                     <Input type="text" placeholder="" />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 <Col md="3">
                   <FormGroup>
                     <Label>Date</Label>
                     <Input type="date" placeholder="" />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="3">
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
                <th>Invoice No.</th>
                <th>Order Id</th>
                <th>Invoice Date</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.invoiceNo}</td>
                    <td>{order.orderId}</td>
                    <td>{order.invoiceDate}</td>
                    <td>
                      {/* Replace with actual action components or icons */}
                       <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-printer-fill my-printer-color" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        
            
    </div>
   
  </ComponentCard>

   
   
  );
};

export default Invoices;