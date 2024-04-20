import React,{ useState} from 'react';

import {
  Card,
  CardBody,
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
import { useNavigate  } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Add = () => {
  const navigate = useNavigate();
  const [formDatas, setFormDataS] = useState({
    name: '',
    isoCode: '',
    isdCode: ''
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
        const formData = new FormData();
        formData.append('name', formDatas.name);
        formData.append('iso_code', formDatas.isoCode);
        formData.append('isd_code', formDatas.isdCode);
        formData.append('is_trashed','0');

        const token = localStorage.getItem('userToken');
        const response = await fetch("https://factory.teamasia.in/api/public/countries", {
            method: "POST",
           
            // body: JSON.stringify({
            //    email,
            //     password,
            // }),
            
            body: formData,
            headers: {
              'Authorization': `Bearer ${token}`
            }
        });
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {
          navigate('/resources/countries'); // Assuming the API returns a JSON object with a token field
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
          <CardBody className="bg-light">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label for="name">Name</Label>
                    <Input 
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.name}
                      onChange={handleChange} 
                    />
                    <FormText className="muted"></FormText>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label for="isoCode">ISO Code</Label>
                    <Input 
                      type="text" 
                      name="isoCode" 
                      id="isoCode" 
                      placeholder="Enter ISO code" 
                      value={formDatas.isoCode}
                      onChange={handleChange} 
                    />
                    <FormText className="muted"></FormText>
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label for="isdCode">ISD Code</Label>
                    <Input 
                      type="text" 
                      name="isdCode" 
                      id="isdCode" 
                      placeholder="Enter ISD code" 
                      value={formDatas.isdCode}
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

export default Add;