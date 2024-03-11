import React,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Collapse,
  Button,
  Card,
  Col,
  Input,
  Label,
  FormText,
  FormGroup,
  Form,
  Row,
  CardBody,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';

const Customer = () => { // Removed the empty object pattern
  const navigate = useNavigate();
  const [collapse, setCollapse] = useState(false);
  const [data, setData] = useState([{ id: 1, companyName: 'A N Furnishings', Factory: ['A N Furnishings','A N Furnishings1'] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}]],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'110055',Country:'India',State:'Delhi',City:'Delhi',GSTNo:'07DPLPS6325R2ZU'}]},
  { id: 2, companyName: 'A R V Footwear Pvt. Ltd.', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 3, companyName: 'A-One Footarts Pvt. Ltd.', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 4, companyName: 'A.K.M Industries', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 5, companyName: 'A N Furnishings', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 6, companyName: 'A R V Footwear Pvt. Ltd.', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 7, companyName: 'A-One Footarts Pvt. Ltd.', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 8, companyName: 'A.K.M Industries', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 9, companyName: 'A N Furnishings', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 10, companyName: 'A R V Footwear Pvt. Ltd.', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 11, companyName: 'A-One Footarts Pvt. Ltd.', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 12, companyName: 'A.K.M Industries', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 13, companyName: 'A N Furnishings', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 14, companyName: 'A R V Footwear Pvt. Ltd.', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 15, companyName: 'A-One Footarts Pvt. Ltd.', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },
  { id: 16, companyName: 'A.K.M Industries', Factory: [] ,AddLabels:[],CompanyDescription:'Company Description',LimitforDaysAllowed:'',LimitforCreditAllowed:'',CompanyRepresentatives:[{Name:'',	Designation:'',	Email:'',	Countrycode:'', Mobile:''}],CompanyDocuments:[{'title':'GST Certificate','file':'125674242.png'}],companyAddress:[{AddressType:'',AddressAlias:'',AddressLine1:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',AddressLine2:'10706, 2nd Floor, Jhandewalan Road, Nabi Karim, Near Singhara Chowk, New Delhi, 110055',Landmark:'',PinCode:'',Country:'',State:'',City:'',GSTNo:''}] },]);
 
  

  const tableStyle = {
    // margin: 'auto', // Centers the table horizontally
    // width: '60%', // Sets the width of the table to 80% of its container
    // maxWidth: '1000px', // Ensures the table doesn't exceed 1000px in width
  };
  const toggle = () => setCollapse(!collapse);
  const handleEditClick = (item) => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    console.log('item',item);
    navigate('/order/customers/edit', { state: item });
  };
  const handleEditAdd = () => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/order/customers/add');
  };

  const handleEditAddress = (customer)=>{
    
    console.log('address');
     navigate('/order/customers/address/edit', {state:customer.companyAddress });
   } 
   const handlePendingReport = (customer)=>{
    
    console.log('address');
     navigate('/order/customers/pending-report',{state:customer.id});
   } 
  // const handleDeleteClick = async (itemId) => {
  //   try {
  //     // Call your API endpoint to delete the item
  //     const response = await fetch(`your-api-endpoint/${itemId}`, {
  //       method: 'DELETE',
  //       headers: {
  //         // Your headers here (if needed)
  //       }
  //     });
  
  //     // Check if the request was successful
  //     if (!response.ok) {
  //       throw new Error(`Error: ${response.statusText}`);
  //     }
  
  //     // Filter out the deleted item from your data state
  //     const updatedData = data.filter((item) => item.id !== itemId);
  //     setData(updatedData);
  
  //     console.log('Item deleted successfully');
  //   } catch (error) {
  //     //only checks for error that are generated by fetch function , and cors 
  //     console.error('Failed to delete the item', error);
  //   }
  // };
  

  useEffect(() => {
    
    // Fetch the data from the API
    const fetchData = async () => {
      const token = localStorage.getItem('userToken');
      console.log('token',token);
      const response = await fetch('https://indiapuleather.com/teamasia/api/public/cities', {
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
      setData(result); 
    };
  
    fetchData();
  }, []);

  return (
    <ComponentCard
    title=""
    subtitle={
      <p>
        {/* Overview of the projects */}
      </p>
    }
  >
    <Button className='my-btn-color'  style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
           Add Customer
            </Button>
      <Button className='my-btn-color' onClick={toggle.bind(null)} style={{ marginBottom: '1rem' }}>
              Search
            </Button>
            <Collapse isOpen={collapse}>
              <Card className="border">
                <CardBody>
                <Form>
               <Row>
                 <Col md="8">
                   <FormGroup>
                     <Label>Search By Company Name or Company Label</Label>
                     <Input type="text" placeholder="" />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="4">
                   <FormGroup>
                    <Button type="submit" className="btn btn-info" style={{marginTop:"28px"}}>
                        Find
                    </Button>
                    <Button type="reset" className="btn btn-info" style={{marginTop:"28px",marginLeft:"10px"}}>
                        Reset
                    </Button>
                   </FormGroup>
                 </Col>
               </Row>
               
              
             </Form>
                </CardBody>
              </Card>
            </Collapse>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
  

      <table className="table" style={tableStyle}>
              <thead>
                <tr>
                  <th scope="col">Company Name</th>
                  <th></th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((customer) => (
                  <tr key={customer.id}>
                    <td>{customer.companyName}</td>
                    <td></td>
                    <td>
                      {/* Added type="button" to each button */}
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" onClick={() => handleEditClick(customer)}><i className="bi bi-pencil-fill my-pen-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-eye-fill my-eye-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"  onClick={() => handleEditAddress(customer)}> <i className="bi bi-geo-alt-fill my-geo-color" /> </button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-list my-list-color" onClick={() => handlePendingReport(customer)}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
    </div>
   
  </ComponentCard>

   
   
  );
};

export default Customer;