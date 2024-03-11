import React,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Col,
  Row,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';

const OrderStatus = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    { id: 1, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'1', NotifyCustomersviaEmailandSMS:'1',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:'s'},
    { id: 2, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'0', NotifyCustomersviaEmailandSMS:'0',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
    { id: 3, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'1', NotifyCustomersviaEmailandSMS:'0',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
    { id: 4, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'0', NotifyCustomersviaEmailandSMS:'1',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
    { id: 5, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'1', NotifyCustomersviaEmailandSMS:'1',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
    { id: 6, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'0', NotifyCustomersviaEmailandSMS:'0',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
    { id: 7, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'1', NotifyCustomersviaEmailandSMS:'1',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
    { id: 8, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'0', NotifyCustomersviaEmailandSMS:'0',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
    { id: 9, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'1', NotifyCustomersviaEmailandSMS:'1',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
    { id: 10, DisplayName: 'Parked', Status: 'parked',UseThisasdefaultstatusforOrders:'1', NotifyCustomersviaEmailandSMS:'0',ShortDescription:'Order is produced and dispatched and no further processing is needed.',SmsContent:'',Subject:'',EmailContent:''},
  ]);
  // const data = [
  //   { id: 1, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 2, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 3, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 4, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 5, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 6, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 7, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 8, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 9, DisplayName: 'Parked', Status: 'parked'},
  //   { id: 10, DisplayName: 'Parked', Status: 'parked'},
  // ];
  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
  };
  const handleEditClick = (item) => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/resources/order-status/edit', { state: item });
  };
  const handleEditAdd = () => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/resources/order-status/add');
  };
  const handleDeleteClick = async (itemId) => {
    try {
      // Call your API endpoint to delete the item
      // const response = await fetch(`your-api-endpoint/${itemId}`, {
      //   method: 'DELETE',
      //   headers: {
      //     // Your headers here (if needed)
      //   }
      // });
  
      // Check if the request was successful
      // if (!response.ok) {
      //   throw new Error(`Error: ${response.statusText}`);
      // }
  
      // Filter out the deleted item from your data state
      const updatedData = data.filter((item) => item.id !== itemId);
      setData(updatedData);
  
      console.log('Item deleted successfully');
    } catch (error) {
      //only checks for error that are generated by fetch function , and cors 
      console.error('Failed to delete the item', error);
    }
  };
  

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
    <Row>
      <Col md="8">
        <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
          Add Order Status
        </Button>
      </Col>
    </Row>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
            <th>Display Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                  <td>{product.DisplayName}</td>
                  <td>{product.Status}</td>
                  <td>
                    {/* Action buttons or icons */}
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" onClick={() => handleEditClick(product)}><i className="bi bi-pencil-fill my-pen-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" onClick={() => handleDeleteClick(product.id)}><i className="bi bi-trash-fill my-trash-color" /></button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            
    </div>
   
  </ComponentCard>

   
   
  );
};

export default OrderStatus;