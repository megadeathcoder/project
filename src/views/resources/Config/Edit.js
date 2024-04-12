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
import { useLocation,useNavigate } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {id,display_name:DisplayName, name:ConfigName, type:SearchType,value:Value} = location.state || {}; // Default to an empty object if state is undefined
 
  const [selectedType, setSelectedType] = useState(SearchType || '0');

  const handleTypeChange = (e) => {
    console.log('selectedType',e.target.value);
    setSelectedType(e.target.value);
  };
 
  const [formDatas, setFormDataS] = useState({
    DisplayName,
    ConfigName,
    Value
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  async function apiCall() {
    try {
        // const formData = new FormData();
        // formData.append('name', formDatas.name);
        // formData.append('iso_code', formDatas.isoCode);
        // formData.append('isd_code', formDatas.isdCode);
        console.log("json",JSON.stringify({
          display_name:formDatas.DisplayName,
          name:formDatas.ConfigName,
          type:selectedType,
          value:formDatas.Value
        }));
        console.log('formdata',selectedType);

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/configs/${id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify({
              display_name:formDatas.DisplayName,
              name:formDatas.ConfigName,
              type:selectedType,
              value:formDatas.Value
            }),
        });
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/resources/config-default');
            
        } 
            // Handle any errors, such as showing an error message to the user
            console.error("Authentication failed:", data.message);
            return null;
      
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
}

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log('event',event);
  apiCall();
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
             <Form onSubmit={handleSubmit}>
               <Row>
                 <Col md="3">
                   <FormGroup>
                     <Label>Display Name</Label>
                     <Input        
                     type="text" 
                      name="DisplayName" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.DisplayName}
                      onChange={handleChange} 
                     />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="3">
                   <FormGroup>
                     <Label>Config Name</Label>
                     <Input        
                     type="text" 
                      name="ConfigName" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.ConfigName}
                      onChange={handleChange}
                      disabled
                     />

                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="3">
                   <FormGroup>
                     <Label>Type</Label>
                     <Input type="select" name="Select Gender" value={selectedType} onChange={handleTypeChange}>
                        <option value="0">Day</option>
                        <option value="1">Week</option>
                        <option value="2">Month</option>
                        <option value="3">Year</option>
                      </Input>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                  
                 </Col>
                 <Col md="3">
                   <FormGroup>
                     <Label>Value</Label>
                     <Input        
                     type="text" 
                      name="Value" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.Value}
                      onChange={handleChange} 
                     />
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