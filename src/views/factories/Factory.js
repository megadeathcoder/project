import React ,{useState} from 'react';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import ComponentCard from '../../components/ComponentCard';

const Factory = () => {
  const [data, setData] = useState([
    { id: 1, FactoryName: 'TAFP', CompanyName: 'Teamasia Technical Textile Pvt. Ltd. formerly known as team colence textile Pvt. Ltd.',CinNo:'U17299DL2020PPC369861',UamNo:'',ProductionLine:["P1","P1N","P2","P2N","P3","P3N"]},
    { id: 1, FactoryName: 'TEAM COLENCE', CompanyName: 'Team Colence Technical Textile Private Limited',CinNo:'U17299DL2020PPC369861',UamNo:'',ProductionLine:["P1","P1N","P2","P2N"]},
  ]);

  // const data = [
  //   { id: 1, FactoryName: 'TAFP', CompanyName: 'Teamasia Technical Textile Pvt. Ltd. formerly known as team colence textile Pvt. Ltd.',CinNo:'U17299DL2020PPC369861',UamNo:'',ProductionLine:["P1","P1N","P2","P2N","P3","P3N"]},
  //   { id: 1, FactoryName: 'TEAM COLENCE', CompanyName: 'Team Colence Technical Textile Private Limited',CinNo:'U17299DL2020PPC369861',UamNo:'',ProductionLine:["P1","P1N","P2","P2N"]},

  // ];

  const navigate = useNavigate();

  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
  };

  const handleEditClick = (item) => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/factories/edit', { state: item });
  };

  const handleEditAdd = () => {
    // Navigate to the edit page with the item's id
    // Navigate(`/resources/address-types/edit/${itemId}`);
    navigate('/factories/add');
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
          Add Factory
        </Button>
      </Col>
    </Row>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
            <th>Factory Name</th>
            <th>Company Name</th>
            <th>Actions</th>
          </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                  <td>{product.FactoryName}</td>
                  <td>{product.CompanyName}</td>
              
                  <td>
                    {/* Action buttons or icons */}
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" onClick={() => handleEditClick(product)}><i className="bi bi-pencil-fill my-pen-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-eye-fill my-eye-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"> <i className="bi bi-geo-alt-fill my-geo-color" /> </button>
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

export default Factory;