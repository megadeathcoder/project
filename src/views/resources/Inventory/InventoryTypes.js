import React,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Col,
  Row,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';

const InventoryTypes = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    { id: 1, Name: 'Bag'},
    { id: 2, Name: 'Bag'},
    { id: 3, Name: 'Bag'},
    { id: 4, Name: 'Bag'},
    { id: 5, Name: 'Bag'},
    { id: 6, Name: 'Bag'},
    { id: 7, Name: 'Bag'},
    { id: 8, Name: 'Bag'},
    { id: 9, Name: 'Bag'},
    { id: 10, Name: 'Bag'},
  ]);
  // const data = [
  //   { id: 1, Name: 'Bag'},
  //   { id: 2, Name: 'Bag'},
  //   { id: 3, Name: 'Bag'},
  //   { id: 4, Name: 'Bag'},
  //   { id: 5, Name: 'Bag'},
  //   { id: 6, Name: 'Bag'},
  //   { id: 7, Name: 'Bag'},
  //   { id: 8, Name: 'Bag'},
  //   { id: 9, Name: 'Bag'},
  //   { id: 10, Name: 'Bag'},
  // ];
  
  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
  };
  const handleEditClick = (item) => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/resources/inventorytypes/edit', { state: item });
  };
  const handleEditAdd = () => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/resources/inventorytypes/add');
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
          Add InventoryType
        </Button>
      </Col>
    </Row>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
            <th>Name</th>
            <th>Actions</th>
          </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                  <td>{product.Name}</td>
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

export default InventoryTypes;