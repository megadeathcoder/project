import React,{useEffect, useState} from 'react';

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
import { useLocation,useNavigate  } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const validationData = location.state || [];
  const [errors,setErrors] = useState({});
  const [items, setItems] = useState([]);
  console.log(validationData);
  console.log("items",items);

            
  const addItem = () => {
    const newItems = items.slice();
    console.log("data",newItems);
    newItems.push({"lab_test_name":''})
    setItems(newItems);
  };

  const removeItem = index => {
    const newItems = items.slice();
    newItems.splice(index, 1);
    setItems(newItems);
  };

 

  const [formDatas, setFormDataS] = useState({
    name:'',
    Method:'',
    items:''
  });

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

      case 'Method':
            if (validationData.some(item => item.Method.toLowerCase() === value.toLowerCase().trim())) {
              setErrors((prev)=>({...prev,"Method": "This name has already been used"}));
          } else {
              setErrors((prev)=>({...prev,"Method": ""}));
          }
          break;
      
      default:
            break;
    
        }
  };

  const handleInputChange = (index, e) => {
    const newItems = items.slice();
    console.log("data",index,newItems);
    newItems[index].lab_test_name =  e.target.value;
    console.log('newX',newItems);
    setFormDataS(prevState => ({
      ...prevState,
      items: newItems
    }));

    setItems(newItems);
  };

  async function apiCall() {
    try {
        // const formData = new FormData();
        // formData.append('name', formDatas.name);
        // formData.append('iso_code', formDatas.isoCode);
        // formData.append('isd_code', formDatas.isdCode);
        
        const filtered = formDatas.items.filter((temp)=>{
          return temp.lab_test_name !== '';
        })

        console.log('filtered',filtered);

        console.log("json",JSON.stringify({
          name:formDatas.name,
          method_name:formDatas.Method,
          labtestdirections:filtered
        }));
        // console.log('formdata',formData);

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/labtests`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify({
              name:formDatas.name,
              method_name:formDatas.Method,
              lab_test_direction:filtered,
              is_trashed:'0',
            }),
        });
        
        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/resources/lab-tests');
            
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
  if(formDatas.Method === '') {
    formIsValid = false;
    // eslint-disable-next-line dot-notation
    errors1["Method"] = "Required";
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


  useEffect(()=>{
    // function testDirectionAdd(){
    // const testArray = TestDirection.map((test)=>{
    //   return {"lab_test_name" : test.name}
    // });

    // console.log('testArray',testArray);
    // setFormDataS(prevState => ({
    //   ...prevState,
    //   items: testArray
    // }));
    // setItems(testArray);
    // }

    // console.log('testArray',TestDirection);
    // testDirectionAdd();
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
                 <Col md="8" >
                   <FormGroup>
                     <Label>Test Name</Label>
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
                 <Col md="8" className='mb-5'>
                   <FormGroup>
                     <Label>Method</Label>
                     <Input        
                     type="text" 
                      name="Method" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.Method}
                      onChange={handleChange} 
                      className={errors.Method ? "is-invalid":""}
                      />
                      {errors.Method &&  <FormText className="text-danger">{errors.Method}</FormText>}
                   </FormGroup>
                 </Col>

                 <Row>
                  <Col md="8">
                      <Button disabled className='btn btn-warning'>Test Directions</Button>
                  </Col>
                  <Col md="2">
                    <Button type="button" className='btn-success' onClick={addItem}>+</Button>
                  </Col>
                </Row>

                 <table className="table">        
                 <thead className='nobordertop'>
                        <tr className='nobordertop'>
                          <Row>
                            <Col md="3"><th className='noborder'>Name</th></Col>
                          </Row>
                        </tr>
                      </thead>
          
              <tbody>
              {items.map((item, index) => (
                  <tr key={item}>
                    <Row>
                      <Col md="8"><Input name="product" value={item.lab_test_name} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><button type="button"  style={{ backgroundColor:"red",marginTop:"5px"}} onClick={() => removeItem(index)}>X</button></Col>
                    </Row>
                  </tr>
                ))}
              </tbody>
            </table>

                 <Col md="4">
                   <FormGroup>
                   <Button type="submit" 
                            className="btn my-btn-color" 
                            style={{marginTop:"28px"}}
                            disabled={errors.name || errors.Method}
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