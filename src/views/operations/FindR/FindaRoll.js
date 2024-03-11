import React from 'react';

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

const FindaRoll = () => {

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
                  <Label>Small</Label>
                  <Input type="text" placeholder="Enter Roll Code" />
                  <FormText className="muted"></FormText>
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                 <Button type="submit" className="btn my-btn-color-yellow" style={{marginTop:"28px"}}>
                     Find
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

export default FindaRoll;
