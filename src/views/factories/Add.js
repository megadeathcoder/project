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

const Edit= () => {
  const location = useLocation();
  const navigate= useNavigate();
  const {name:Name,company_name:companyName,cim_no:cimNo,uam_no:uamNo,factoryproductionlines:TestDirection} = location.state || {}; // Default to an empty object if state is undefined
  const [items, setItems] = useState([]);
 console.log("items",items);

 const [formDatas, setFormDataS] = useState({
  name:Name,
  companyName,
  cimNo,
  uamNo,
  TestDirection,
  items:[]
});

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addItem = () => {
    const newItems = items.slice();
    console.log("data",newItems);
    newItems.push({"factory_name":''})
    setItems(newItems);
  };

  const removeItem = index => {
    const newItems = items.slice();
    newItems.splice(index, 1);
    setItems(newItems);
    setFormDataS(prevState => ({
      ...prevState,
      items: newItems
    }));
  };

  const handleInputChange = (index, e) => {
    const newItems = items.slice();
    console.log("data",index,newItems);
    newItems[index].factory_name =  e.target.value;
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
        // formData.append('company_name',formDatas.companyName);
        // formData.append('cim_no',formDatas.cimNo);
        // formData.append('uam_no',formDatas.uamNo);
        // formData.append('factory_production_line',filtered);

        const filtered = formDatas.items.filter((temp)=>{
          return temp.factory_name !== '';
        })

        console.log('filtered',filtered);

        // console.log('formdata',formData);

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/factories`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify({
              name:formDatas.name,
              company_name:formDatas.companyName,
              cim_no:formDatas.cimNo,
              uam_no:formDatas.uamNo,
              factory_production_line:filtered,
              is_trashed:'0'
            }),
        });

        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/factories/factory');
            
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

  useEffect(()=>{
   
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
              <Row>
                <Col md="8">
                  <div className='' style={{ marginRight:'10px',marginTop:'10px'}}>
                     Create Factory Detail
                  </div>
                </Col>
                
              </Row>
             
             </CardTitle>
           </CardBody>
           <CardBody>
             <Form onSubmit={handleSubmit}>
               <Row>
                 <Col md="8" className=''>
                   <FormGroup>
                     <Label>Factory Name</Label>
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
                 <Col md="8" className=''>
                   <FormGroup>
                     <Label>Company Name</Label>
                     <Input  
                      type="text" 
                      name="companyName" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.companyName}
                      onChange={handleChange}
                      />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="8" className=''>
                   <FormGroup>
                     <Label>CIN No</Label>
                     <Input  
                      type="text" 
                      name="cimNo" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.cimNo}
                      onChange={handleChange} 
                      />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="8" className=''>
                   <FormGroup>
                     <Label>UAM No</Label>
                     <Input  
                      type="text" 
                      name="uamNo" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.uamNo}
                      onChange={handleChange} 
                      />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 <Row className='mt-4'>
                  <Col md="8">
                      <Button disabled className='btn btn-warning'>Production Lines</Button>
                  </Col>
                  <Col md="2">
                    <Button type="button" className='btn-success' onClick={addItem}>+</Button>
                  </Col>
                </Row>

                 <table className="table">        
                  <thead className='nobordertop'>
                        <tr className='nobordertop'>
                          <Row>
                            <Col md="3"><th className='noborder'>Production Line Name</th></Col>
                          </Row>
                        </tr>
                      </thead>
          
              <tbody>
              {items.map((item, index) => (
                  <tr key={item}>
                    <Row>
                      <Col md="8"><Input name="product" value={item.factory_name} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><button type="button"  style={{ backgroundColor:"red",marginTop:"5px"}} onClick={() => removeItem(index)}>X</button></Col>
                    </Row>
                  </tr>
                ))}
              </tbody>
            </table>

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

export default Edit