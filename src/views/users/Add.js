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
import Select, { components } from 'react-select';
// import { companyOptions} from './Data';
import ComponentCard from '../../components/ComponentCard2';
import './tagselect.scss';

const companyOptions = [
  { value: 'TAFP', label: 'TAFP', color: '#00B8D9'},
  { value: 'TEAMCOLENCE', label: 'TEAM COLENCE', color: '#0052CC'}
];

const IndicatorsContainer = (props) => {
  return (
    <div style={{ background: companyOptions[0].color }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};



const Add = () => {
  const location = useLocation();
  const {Name, Email,Mobile,Password,Role,} = location.state || {};         
  const [selectedType, setSelectedType] = useState(Role|| '');
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
                 <Col md="6">
                   <FormGroup>
                     <Label>First Name</Label>
                     <Input type="text" placeholder ={Name} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     <Label>Last Name</Label>
                     <Input type="text" placeholder ={Email} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     <Label>Email Address</Label>
                     <Input type="text" placeholder ={Email} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     <Label>Mobile</Label>
                     <Input type="text" placeholder ={Mobile} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     <Label>Password</Label>
                     <Input type="text" placeholder ={Password} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     <Label>Role</Label>
                     <Input type="select" name="Select Gender" value={selectedType} onChange={handleTypeChange}>
                        <option>superadmin</option>
                        <option>Admin</option>
                        <option>InventoryManagement</option>
                        <option>PostProduction</option>
                        <option>Testing</option>
                      </Input>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                <Col md="12">
                  <ComponentCard title="Factory">
                    <Select
                      closeMenuOnSelect={false}
                      components={{ IndicatorsContainer }}
                      // defaultValue={[companyOptions[4], companyOptions[5]]}
                      isMulti
                      options={companyOptions}
                    />
                  </ComponentCard>
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