import React,{useEffect, useState} from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import './tagselect.scss';
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
import ComponentCard from '../../../components/ComponentCard2';

// import ComponentCard from '../../components/ComponentCard';

const Edit= () => {
  const location = useLocation();
  const navigate= useNavigate();

    const [items, setItems] = useState([]);
    const [compdoc, setCompdoc] = useState([]);
    const [FactoryArray, setFactoryArray] = useState([]);
    const [regularTags, setRegularTags] = useState([]);
    const [factorydata, setFactoryData] = useState([]);

console.log('AddLabels',location.state);

  
const [formDatas, setFormDataS] = useState({
  companyName:'',
  Factory:'',
  AddLabels:'',
  CompanyDescription:'',
  LimitforDaysAllowed:'',
  LimitforCreditAllowed:'',
  CompanyRepresentatives:[],
  CompanyDocuments:[],
  items:[],
  compdoc:[]
});



const [selectedOptions, setSelectedOptions] = useState([]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormDataS(prevState => ({
    ...prevState,
    [name]: value
  }));
};

const handleChangeLabel = (e) => {
  // const { name, value } = e.target;
  console.log('label',e);
  setSelectedOptions(e);
  // setFormDataS(prevState => ({
  //   ...prevState,
  //   [name]: value
  // }));
};

 const IndicatorsContainer = (props) => {
  return (
    <div style={{ background: '#00B8D9' }}>
      <components.IndicatorsContainer {...props} />
    </div>
  );
};

const addItem = () => {
  const newItems = items.slice();
  newItems.push({
    id:"",
    name: "",
          designation: "",
          email: "",
          country_code: "",
          mobile: "",
          email_proforma_invoice: "0",
          email_invoice_dispatch: "0",
          email_ledger: "0",
          email_pending_payment: "0",
          whatsapp_proforma_invoice: "0",
          whatsapp_invoice_dispatch: "0",
          whatsapp_ledger: "0",
          whatsapp_pending_payment: "0"
  })
  setItems(newItems);
};

const removeItem = (index) => {
  const newItems = items.slice();
  newItems.splice(index, 1);
  console.log('newItems',newItems);
  setItems(newItems);
  setFormDataS(prevState=>({
    ...prevState,
    items:newItems
}))
};

const handleInputChange = (index, event) => {
  const {name ,value,type} = event.target;
  const newItems = items.slice();
  console.log("data",index,newItems[index]);
  if(type === 'checkbox'){
    console.log('check value',value,event.target.checked);
    if(newItems[index][name] === '0')
    {
      newItems[index][name] =  '1';
    }
    else{
      newItems[index][name] =  '0';
    }
  }
  else{
      newItems[index][name] =  value;
      console.log('check not',newItems[index][name]);
  }
  setItems(newItems);
  setFormDataS(prevState=>({
        ...prevState,
        items:newItems
    }))
  
};

  const addCompdoc= () => {
    const newItems = compdoc.slice();
    newItems.push({name:'',file_path:'',image_id:'2'})
    setCompdoc(newItems);
    setFormDataS(prevState => ({
      ...prevState,
      CompanyDocuments: newItems
    }));
  };

  const removeCompdoc = index => {
    const newItems = compdoc.slice();
    newItems.splice(index, 1);
    setCompdoc(newItems);
    setFormDataS(prevState => ({
      ...prevState,
      CompanyDocuments: newItems
    }));
  };

  const handleCompdoc = (index, e) => {
    const { name , value} = e.target;
    const newItems = compdoc.slice();
    console.log("data",index,newItems);
    newItems[index][name] = value;
    setCompdoc(newItems);
    setFormDataS(prevState => ({
      ...prevState,
      CompanyDocuments: newItems
    }));
  };

  // const handleEditAddress = ()=>{
    
  //  console.log('address',location.state.companyName);
  //   navigate('/order/customers/address');
  // }

  async function apiCall() {
    try {
        // const formData = new FormData();
        // formData.append('name', formDatas.name);
        // formData.append('iso_code', formDatas.isoCode);
        // formData.append('isd_code', formDatas.isdCode);
        const csvString = selectedOptions.map(item => item.value).join(', ');
        console.log('csvString',csvString);

        const csvString1 = regularTags.map(item => item).join(', ');
        console.log(csvString1);

        console.log('dataX',formDatas);
        const filtered =formDatas.items.filter((temp)=>{
          return temp.name !== '';
        });

        const filtered1 = formDatas.CompanyDocuments.filter((temp)=>{
          return temp.name !== '';
        });

        console.log('filtered',filtered);
        console.log('filtered',filtered1);

        console.log('formdataX',formDatas);
        const bodyData ={
          company_name: formDatas.companyName,
          factory_ids: csvString,
          labels: csvString1,
          company_description: formDatas.CompanyDescription,
          day_limit: formDatas.LimitforDaysAllowed,
          credit_limit: formDatas.LimitforCreditAllowed,
          customer_company_representative: filtered,
            customer_company_document:filtered1,
          is_trashed:'0'
        }
        const token = localStorage.getItem('userToken');
        const response = await fetch(`https://factory.teamasia.in/api/public/customers`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
           
            body: JSON.stringify(bodyData),
        });

        const data = await response.json();
        console.log("dataapi",data)
        if (response.ok) {


          navigate('/order/customers');
            
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
    // if(AddLabels)
    //   {
    //     setFormDataS(item =>(
    //       {
    //         ...item,
    //         AddLabels:AddLabels.split(',')
    //       }
    //       ));
    //     setRegularTags(AddLabels.split(','));
    //   }

      const fetchData = async () => {
        const token = localStorage.getItem('userToken');
        console.log('token',token);
        const response = await fetch('https://factory.teamasia.in/api/public/factories', {
          method: 'GET', 
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        console.log('result',response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("responsejson",result);
        setFactoryData(result.factories); 
      };
    
      fetchData();
  },[]);

  useEffect(()=>{
    const companyOptions = ()=>{
      
      // const newFactoryArray = Factory.split(',');
      const obj = factorydata.map((factoryitem)=>{
        return {
          value:factoryitem.id,
          label:factoryitem.name,
          color: '#00B8D9'
        }
      })
      setFactoryArray(obj);

      // const newFactoryArray = Factory.split(',');
      // const ids = newFactoryArray.map(Number);
      // console.log('newFactoryArray', newFactoryArray); 
      // console.log('newFactoryArray', ids); 
      // console.log('factorydata', factorydata);

      // const filteredArray = factorydata.filter(item => ids.includes(Number(item.id)));
      // console.log('filteredArray',filteredArray);

      // const obj1 =filteredArray.map((factoryitem)=>{
      //   return {
      //     value:factoryitem.id,
      //     label:factoryitem.name,
      //     color: '#00B8D9'
      //   }
      // })
      

      // console.log('obj1',obj1);
      // setSelectedOptions(obj1);
  }
  companyOptions();
  console.log('factoryarray',FactoryArray);
  },[factorydata]);

  const handleRegularTags = (tags) => {
    console.log('tags',tags);
    setRegularTags(tags);
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
              <Row>
                <Col md="8">
                  <div className='' style={{ marginRight:'10px',marginTop:'10px'}}>
                      Add Customer
                  </div>
                </Col>
                {/* <Col md="4">
                  <Button className='my-btn-color' style={{ marginRight:'10px' }} onClick={() => handleEditAddress()}>
                    Manage Address
                  </Button>
                </Col> */}
              </Row>
             
             </CardTitle>
           </CardBody>
           <CardBody>
             <Form onSubmit={handleSubmit}>
               <Row>
                 <Col md="6" className=''>
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
                 <Col md="6" className=''>
                  <ComponentCard title="Factory">
                      <Select
                        closeMenuOnSelect={false}
                        components={{ IndicatorsContainer }}
                        isMulti
                        options={FactoryArray}
                        onChange={handleChangeLabel}
                        value={selectedOptions}
                      />
                    </ComponentCard>
                   
                 </Col>
                 <Col md="12" className=''>
                   <FormGroup>
                     <Label>Add Labels</Label>
                     <TagsInput
                          value={regularTags}
                          onChange={(tags) => handleRegularTags(tags)}
                          tagProps={{
                            className: 'react-tagsinput-tag bg-info text-white rounded',
                          }}
                        />
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Company Description</Label>
                     <Input  
                      type="textarea" 
                      name="CompanyDescription" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.CompanyDescription}
                      onChange={handleChange}
                      />

                     
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Limit for Days Allowed</Label>
                     <Input  
                      type="text" 
                      name="LimitforDaysAllowed" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.LimitforDaysAllowed}
                      onChange={handleChange}
                      />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6" className=''>
                   <FormGroup>
                     <Label>Limit for Credit Allowed</Label>
                     
                     <Input  
                      type="text" 
                      name="LimitforCreditAllowed" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.LimitforCreditAllowed}
                      onChange={handleChange}
                      />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 
                 <Row className='mt-4 mb-3'>
                          <Col md="11">
                              <span className='table-title'>Company Representatives</span>
                          </Col>
                  </Row>
                 <table className="table">        
                  <thead>
                        <tr>
                        <Row className='mt-4'>
                          <Col md="2">
                              <td >Name</td>
                          </Col>
                          <Col md="2">
                              <td>Designation</td>
                          </Col>
                          <Col md="2">
                              <td >	Email</td>
                          </Col>
                          <Col md="2">
                              <td >Country code</td>
                          </Col>
                          <Col md="2">
                              <td >Mobile</td>
                          </Col>
                          <Col md="2">
                            <Button type="button" className='btn-success' onClick={addItem}>+</Button>
                          </Col>
                        </Row>
                        </tr>
                      </thead>
          
              <tbody>
              {items.map((item, index) => (
                  <tr key={item.id}>
                    <Row>
                      <Col md="2"><Input name="name" value={item.name} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="3"><Input name="designation" value={item.designation} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="3"><Input name="email" value={item.email} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><Input name="country_code" value={item.country_code} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="mobile" value={item.mobile} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><button type="button"  style={{ backgroundColor:"red",marginTop:"5px"}} onClick={() => removeItem(index)}>X</button></Col>
                    </Row>
                    <Row>
                    <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <br></br>
                        <Label className='mx-1'>Email</Label>
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>

                     <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Label className=''>Proforma Invoice</Label>
                        <br></br>
                        <Input 
                        type="checkbox" checked={ item.email_proforma_invoice !== '0' } name="email_proforma_invoice" onChange={e => handleInputChange(index, e)}  
                        />
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                     <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Label className=''>Invoice/dispatch</Label>
                        <br></br>
                        <Input 
                        type="checkbox" checked={ item.email_invoice_dispatch !== '0' } name="email_invoice_dispatch" onChange={e => handleInputChange(index, e)}  
                        />
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                     <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Label className=''>Ledgers</Label>
                        <br></br>
                        <Input 
                        type="checkbox" checked={ item.email_ledger !== '0' } name="email_ledger" onChange={e => handleInputChange(index, e)}  
                        />
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                     <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Label className=''>Pending Payments</Label>
                        <br></br>
                        <Input 
                        type="checkbox" checked={ item.email_pending_payment !== '0' } name="email_pending_payment" onChange={e => handleInputChange(index, e)}  
                        />
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                    </Row>

                    <Row>
                    <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Label className='mx-1'>Whatsapp</Label>
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                     <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Input 
                        type="checkbox" checked={ item.whatsapp_proforma_invoice !== '0' } name="whatsapp_proforma_invoice" onChange={e => handleInputChange(index, e)}  
                        />
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                     <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Input 
                        type="checkbox" checked={item.whatsapp_invoice_dispatch !== '0' } name="whatsapp_invoice_dispatch" onChange={e => handleInputChange(index, e)} 
                        />
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                     <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Input 
                        type="checkbox" checked={ item.whatsapp_ledger !== '0' } name="whatsapp_ledger" onChange={e => handleInputChange(index, e)}  
                        />
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                     <Col md="2">
                      <FormGroup>
                        {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                        <Input 
                        type="checkbox" checked={ item.whatsapp_pending_payment !== '0' } name="whatsapp_pending_payment" onChange={e => handleInputChange(index, e)}  
                        />
                        <FormText className="muted"></FormText>
                      </FormGroup>
                    </Col>
                    </Row>
                    
                  </tr>
                ))}
                
              </tbody>
            </table>

            <Row className='mt-4 mb-3'>
                          <Col md="11">
                              <span className='table-title'>Company Documents</span>
                          </Col>
           </Row>  
                  
            <table className="table">        
                  <thead>
                   
                        <tr>
                        <Row className='mt-4'>
                          <Col md="11">
                              <td>Upload Document</td>
                          </Col>
                          <Col md="1">
                            <Button type="button" className='btn-success' onClick={addCompdoc}>+</Button>
                          </Col>
                        </Row>
                        </tr>
                      </thead>
          
              <tbody>
              {compdoc.map((item, index) => (
                  <tr key={item.id}>
                    <Row>
                      <Col md="4"><Input name="name" value={item.name} type="text" onChange={e => handleCompdoc(index, e)} placeholder="" /></Col>
                      <Col md="7"><Input name="file_path"  type="file" onChange={e => handleCompdoc(index, e)} placeholder="" /></Col>
                      <Col md="1"><button type="button"  style={{ backgroundColor:"red",marginTop:"5px"}} onClick={() => removeCompdoc(index)}>X</button></Col>
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