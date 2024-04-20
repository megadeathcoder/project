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
  const [data, setData] = useState([]);
 
  

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
    navigate('/inventory/vendors/edit', { state: item });
  };
  const handleEditAdd = () => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/inventory/vendors/add');
  };

  const handleEditAddress = (vendor)=>{
    
    console.log('address');
     navigate('/inventory/vendors/address/edit', {state:vendor});
   } 
   const handlePendingReport = (vendor)=>{
    console.log('address');
     navigate('/inventory/vendors/pending-report',{state:vendor.id});
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
      const response = await fetch('https://factory.teamasia.in/api/public/vendors', {
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
      setData(result.vendor); 
      console.log('result',result.vendor);
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
           Add Vendor
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
                {data.map((vendor) => (
                  <tr key={vendor.id}>
                    <td>{vendor.company_name}</td>
                    <td></td>
                    <td>
                      {/* Added type="button" to each button */}
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" onClick={() => handleEditClick(vendor)}><i className="bi bi-pencil-fill my-pen-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-eye-fill my-eye-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"  onClick={() => handleEditAddress(vendor)}> <i className="bi bi-geo-alt-fill my-geo-color" /> </button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-list my-list-color" onClick={() => handlePendingReport(vendor)}/></button>
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