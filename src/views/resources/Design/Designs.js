import React,{ useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Input,
  Label,
  Col,
  Row,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';

const Designs = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [istrashed, setIstrashed] = useState('0');
  // const data = [
  //   { id: 1, Code: 'P066', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  //   { id: 2, Code: 'P067', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  //   { id: 3, Code: 'P058', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  //   { id: 4, Code: 'Zet Black', CustomerAlias: 'Zet Black', ManuFacturerAlias: 'Zet Black'},
  //   { id: 5, Code: 'P066', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  //   { id: 6, Code: 'P066', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  //   { id: 7, Code: 'P066', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  //   { id: 8, Code: 'P066', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  //   { id: 9, Code: 'P066', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  //   { id: 10, Code: 'P066', CustomerAlias: 'P066', ManuFacturerAlias: 'P066'},
  // ];
  
  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
  };
  const handleEditClick = (item) => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/resources/designs/edit', { state: item });
  };
  const handleEditAdd = () => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/resources/designs/add');
  };
  const handleTrash = ()=>{
     
    if(istrashed === '0')
    {
      setIstrashed('1')
    }
    else{
      setIstrashed('0')
    }
  }
  const handleDeleteClick = async (itemId) => {
    try {
      // Call your API endpoint to delete the item
      const token = localStorage.getItem('userToken');
      const response = await fetch(`https://factory.teamasia.in/api/public/designs/${itemId}`, {
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
    
    // Fetch the data from the API
    const fetchData = async () => {
      const token = localStorage.getItem('userToken');
      console.log('token',token);
      const response = await fetch(`https://factory.teamasia.in/api/public/designs/?is_trashed=${istrashed}`, {
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
      setData(result.designs); 
    };
  
    fetchData();
  }, [istrashed]);

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
          Add Design
        </Button>
      </Col>
      <Col md="4" className='p-2'>
          <Input  type="checkbox" style={{marginRight:'5px'}} onClick={()=> handleTrash()}/>
          <Label style={{fontWeight:'500'}}>Show Trashed Items</Label>
      </Col>
    </Row>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
            <th>Code</th>
            <th>Customer Alias</th>
            <th>ManuFacturer Alias</th>
            <th>Actions</th>
          </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                  <td>{product.code}</td>
                  <td>{product.customer_alias}</td>
                  <td>{product.manufacturer_alias}</td>
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

export default Designs;