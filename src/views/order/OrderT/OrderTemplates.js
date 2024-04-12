import React,{ useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';


const OrderTemplates = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [templateWithNames, setTemplateWithNames] = useState([]);
 
  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
  };

  const handleEditClick = (item) => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/order/order-templates/edit', { state: item });
  };
  
  const handleEditAdd = () => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/order/order-templates/add');
  };
  
  const handleDeleteClick = async (itemId) => {
    try {
      // Call your API endpoint to delete the item
      const token = localStorage.getItem('userToken');
      const response = await fetch(`https://factory.teamasia.in/api/public/ordertemplates/${itemId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
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
    function getCustomerNameById(customerId) {
      const customerName = data1.filter(customer => customer.id === customerId);
      console.log('Customer',customerName);
      return customerName ? customerName[0].company_name : 'Unknown Customer';
    }
  
    function templateWithNamesFunction(){
      const templateWithNames1 = data.map(template => ({
        ...template,
        customerName: getCustomerNameById(template.customer_id)
      }));
      console.log('hi',data);
      setTemplateWithNames(templateWithNames1)
    }

    if(data.length > 0 && data1.length > 0)
    {
      templateWithNamesFunction();
    }

  },[data,data1]);



  useEffect(() => {
    
    const fetchData = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch('https://factory.teamasia.in/api/public/ordertemplates', {
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
      console.log("responsejson",result);
      setData(result.ordertemplates);
    };

    // Fetch the data from the API
    const fetchData1 = async () => {
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
      setData1(result.customers); 
    };
    fetchData();
    fetchData1();
  },[]);

  return (
    <ComponentCard
    title=""
    subtitle={
      <p>
        {/* Overview of the projects */}
      </p>
    }
  >
    <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
      Add Template
            </Button>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
                  <th>Template Title</th>
                <th>Customer</th>
                <th>Type</th>
                <th>Action</th>
          </tr>
              </thead>
              <tbody>
                {templateWithNames.map((product) => (
                  <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.customerName}</td>
                  <td>{product.type}</td>
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

export default OrderTemplates;
