import React ,{ useState } from 'react';

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
import { useLocation,useNavigate } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {id,name:Name,iso_code : isoCode,isd_code : isdCode,is_trashed:isTrashed} = location.state.item || {};  // Default to an empty object if state is undefined
  const validationData = location.state.validationDataArray || []; 
  const [errors,setErrors] = useState({});
  
  const [formDatas, setFormDataS] = useState({
    name:Name,
    isoCode,
    isdCode,
    isTrashed
  });

  console.log(validationData);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));

    switch (name){
      case 'name':
            if (validationData.some(item => item.name.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"name": "This name has already been used"}));
          } else {
              setErrors((prev)=>({...prev,"name": ""}));
          }
          break;

      case 'isdCode':
        if (validationData.some(item => item.isdCode === value.trim())) {
              setErrors((prev)=>({...prev,"isdCode": "This isdcode has already been used"}));
          } else {
              setErrors((prev)=>({...prev,"isdCode": ""}));
          }
            break;
          
      default:
        if (validationData.some(item => item.isoCode.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"isoCode": "This isocode has already been usedy"}));
          } else {
              setErrors((prev)=>({...prev,"isoCode": ""}));
          }
            break;
    
        }

  };

  async function apiCall() {
    try {
        // const formData = new FormData();
        // formData.append('name', formDatas.name);
        // formData.append('iso_code', formDatas.isoCode);
        // formData.append('isd_code', formDatas.isdCode);
        // console.log("json",JSON.stringify({
        //   name:formDatas.name,
        //   iso_code:formDatas.isoCode,
        //   isd_code:formDatas.isdCode
        // }));
        // console.log('formdata',formData);

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/countries/${id}`, {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify({
              name:formDatas.name,
              iso_code:formDatas.isoCode,
              isd_code:formDatas.isdCode,
              is_trashed:formDatas.isTrashed
            }),
        });
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/resources/countries');
            
        } 
            // Handle any errors, such as showing an error message to the user
            console.error("Authentication failed:", data.message);
            return null;
      
    } catch (error) {
        console.error("Network error:", error);
        return null;
    }
}

const validateForm=()=>{
  let formIsValid =true;
  const errors1 ={};
  
  if(formDatas.name === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["name"] = "Required";
  }
  if(formDatas.isdCode === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["isdCode"] = "Required";
  }
  if(formDatas.isoCode === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["isoCode"] = "Required";
  }

  
  setErrors(errors1);
  return formIsValid;
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(validateForm()) {
      console.log('Form is valid, proceed with API call');
      apiCall();
    } else {
      console.log('Form is invalid, do not submit');
    }
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
                      className={errors.name ? "is-invalid":""}
                      />
                      {errors.name &&  <FormText className="text-danger">{errors.name}</FormText>}
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
                      className={errors.isoCode ? "is-invalid":""}
                      />
                      {errors.isoCode &&  <FormText className="text-danger">{errors.isoCode}</FormText>}
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
                      className={errors.isdCode ? "is-invalid":""}
                      />
                      {errors.isdCode &&  <FormText className="text-danger">{errors.isdCode}</FormText>}
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                  <Button type="submit" 
                            className="btn my-btn-color" 
                            style={{marginTop:"28px"}}
                            disabled={errors.name || errors.isdCode||errors.isoCode}
                    >
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