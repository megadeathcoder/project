import React,{useState,useEffect} from 'react';

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
  const {id,name:Name,country_id:countryId,is_trashed:isTrashed} = location.state.item || {}; // Default to an empty object if state is undefined
  const validationData = location.state.validationDataArray || []; 
  const [errors,setErrors] = useState({});

  const [selectedType, setSelectedType] = useState(countryId|| '');
 
  console.log('state',validationData);

    const [data2, setData2] = useState([]);

    const [formDatas, setFormDataS] = useState({
      name:Name,
      countryId,
      isTrashed
    });

    console.log("formdata",location.state);
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log('hi')
      setFormDataS(prevState => ({
        ...prevState,
        [name]: value
      }));
      if (validationData.some(item => item.toLowerCase() === value.toLowerCase().trim())) {
        setErrors({"name": "This name has already been used"});
    } else {
        setErrors({"name":''});
    }
    };

    const handleTypeChange = (e) => {
      setSelectedType(e.target.value);
      // console.log('e',e.target.options[e.target.selectedIndex].text);
      console.log('e',e.target.value);
      setFormDataS(prevState => ({
        ...prevState,
        countryId: e.target.value
      }));
    };
    
    async function apiCall() {
      try {
        console.log('formdata',JSON.stringify({
          name:formDatas.name,
          country_id:formDatas.countryId,
        }));
       
          const token = localStorage.getItem('userToken');
          console.log('country_id',formDatas.countryId)
          const response = await fetch(`https://factory.teamasia.in/api/public/states/${id}`, {
              method: "PUT",
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              },
            
              body: JSON.stringify({
                name:formDatas.name,
                country_id:formDatas.countryId,
                is_trashed:formDatas.isTrashed
              }),
          });
          const data = await response.json();
          console.log("dataapi",data)
          if (response.ok) {
            navigate('/resources/states');
          } 
              // Handle any errors, such as showing an error message to the user
              console.error("Authentication failed:", data.message);
              return null;;
        
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

  useEffect(() => {

    const fetchData2 = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch(`https://factory.teamasia.in/api/public/countries/?is_trashed=0`, {
        method: 'GET', 
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      // console.log('result',response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log("responsejson2",result);
      setData2(result.countries); 
    };

  
    fetchData2();

  
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
             </CardTitle>
           </CardBody>
           <CardBody>
             <Form onSubmit={handleSubmit}>
               <Row>
                 <Col md="4">
                   <FormGroup>
                     <Label>Name</Label>
                     <Input type="text" 
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
                     <Label>Country</Label>
                     <Input type="select"
                      name="countryId" 
                      //  value={selectedType} 
                      value={selectedType}
                    //  value={countryName}
                     onChange={handleTypeChange}>
                        {data2.map((item)=>{

                          return <option key={item.id} value={item.id}>{item.name}</option>
                        })}
                        
                      </Input>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                  
                 </Col>
                 <Col md="4">
                   <FormGroup>
                    <Button type="submit" className="btn my-btn-color" style={{marginTop:"28px"}} disabled={errors.name}>
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