import React,{useState, useEffect} from 'react';
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
import { useNavigate } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Edit = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // const items = [
  //   { id: 1, grain: '1037 A', fabric: 'NW.needlepunch_220gsm', quality: 'SURPLUS', color: 'black',hsnCode:'56039400',PricePerUnit:'274.4',Thickness:'1.5',TaxRate:'12',deliveryDate:'2021-06-19',CustomerItemRefernce:'', quantity: '450 m' },
  // { id: 2, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black',hsnCode:'56039400',PricePerUnit:'274.4',Thickness:'1.5',TaxRate:'12',deliveryDate:'2021-06-19',CustomerItemRefernce:'', quantity: '150 m' },
  // ]


  const [formDatas, setFormDataS] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log('hi')
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));
  };



//  console.log("items",items);



  // const handleInputChange = (index, event) => {
  //   const newItems = items.slice();
  //   console.log("data",index,newItems);
  //   newItems[index] =  event.target.value;
  //   setItems(newItems);
  //   setData2(newItems);
  // };

  const handleTypeChange = (e) => {
    const { name, value } = e.target;
    // setSelectedType(e.target.value);
    setFormDataS(prevState => ({
      ...prevState,
      [name]: value
    }));
    // console.log('e',e.target.options[e.target.selectedIndex].text);
    console.log('e',e.target.value);
  };

  async function apiCall() {
    try {
      
        // const formData = new FormData();
        // formData.append('name', formDatas.name);
        // formData.append('iso_code', formDatas.isoCode);
        // formData.append('isd_code', formDatas.isdCode);

        // console.log('item',items);

        // // console.log('dataX',formDatas);
        // const filtered = items.filter((temp)=>{
        //   return temp.id !== 'z';
        // });

        console.log('formdataX',formDatas);
        // console.log('filtered',filtered);
  

        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/ordertemplates`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify({
              title: formDatas.title,
              type: '1',
              customer_id: formDatas.customerId,
              is_trashed: '0'
            }),
        });

        const dataZ = await response.json();
        console.log("dataapi",dataZ)
        if (response.ok) {


          navigate('/order/order-templates');
            
        } 
            // Handle any errors, such as showing an error message to the user
            console.error("Authentication failed:", dataZ.message);
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



  useEffect(() => {

    // Fetch the data from the API
    const fetchData = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch(`https://factory.teamasia.in/api/public/customers`, {
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
      console.log("responsejson1",result);
      setData(result.customers);
      setFormDataS(prevState => ({
        ...prevState,
        customerId: result.customers[0].id
      }
      ))
    };

 

  
   
  

    fetchData();

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
                 <Col md="8" className=''>
                   <FormGroup>
                     <Label>Template Title</Label>
                     <Input type="text" 
                     name="title" 
                     id="name"
                     placeholder="Enter name" 
                     value={formDatas.title}
                     onChange={handleChange} 
                      />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 <Col md="8" className='mb-5'>
                    <FormGroup>
                      <Label>Choose Customer</Label>
                      <Input type="select" 
                         name="customerId" 
                         value={formDatas.customerId}
                        onChange={handleTypeChange} >
                           {data.map((item)=>{
   
                             return <option key={item.id} value={item.id}>{item.company_name}</option>
                           })}
                      </Input>
                      {/* <FormText className="muted">Popular Dates</FormText> */}
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