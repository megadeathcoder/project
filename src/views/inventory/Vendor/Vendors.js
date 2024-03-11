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

const Vendors = () => {
  const [collapse, setCollapse] = useState(false);

  const vendors = [
    {
      companyName: 'Global Tech Solutions',
    },
    {
      companyName: 'Innovative Devs Corporation',
    },
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
          Add Vendor
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
                 <Col md="6">
                   <FormGroup>
                     <Label>Search By Company Name or Company Label</Label>
                     <Input type="text" placeholder="" />
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
                <th>Company Name</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {vendors.length > 0 ? (
                  vendors.map((vendor) => (
                    <tr key={vendor.companyName}>
                      <td>{vendor.companyName}</td>
                      <td>
                          <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" ><i className="bi bi-pencil-fill my-pen-color" /></button>
                          <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-eye-fill my-eye-color" /></button>
                          <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"> <i className="bi bi-geo-alt-fill my-geo-color" /> </button>
                       </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2">No records to display.</td>
                  </tr>
                )}
              </tbody>
            </table>
            
    </div>
   
  </ComponentCard>

   
   
  );
};

export default Vendors;