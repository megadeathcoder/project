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

const Edit = () => {
  const location = useLocation();
  const {DisplayName, ConfigName, SearchType, Value} = location.state || {}; // Default to an empty object if state is undefined
 
  const [selectedType, setSelectedType] = useState(SearchType || '');

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
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
                 <Col md="3">
                   <FormGroup>
                     <Label>Display Name</Label>
                     <Input type="text" placeholder ={DisplayName} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="3">
                   <FormGroup>
                     <Label>Config Name</Label>
                     <Input type="text" placeholder ={ConfigName} disabled/>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="3">
                   <FormGroup>
                     <Label>Type</Label>
                     <Input type="select" name="Select Gender" value={selectedType} onChange={handleTypeChange}>
                        <option>Day</option>
                        <option>Week</option>
                        <option>Month</option>
                        <option>Year</option>
                      </Input>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                  
                 </Col>
                 <Col md="3">
                   <FormGroup>
                     <Label>Value</Label>
                     <Input type="text" placeholder ={Value} />
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