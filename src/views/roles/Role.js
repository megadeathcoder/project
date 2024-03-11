import React from 'react';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';

import ComponentCard from '../../components/ComponentCard';

const Role = () => {
  const data = [
    { id: 1, Name: 'superadmin' },
    { id: 2, Name: 'Admin' },
    { id: 3, Name: 'Accounts' },
    { id: 4, Name: 'Inventory' },
    { id: 5, Name: 'Testing' },
    { id: 6, Name: 'OrderCreation' },
    { id: 7, Name: 'PostProduction' },
    { id: 8, Name: 'Dispatch' },
    { id: 9, Name: 'QaAndPackaging' },
    { id: 10, Name: 'InventoryManagement' },

  
  ];
  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
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
        <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }}>
          Add Role
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
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" ><i className="bi bi-pencil-fill my-pen-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-trash-fill my-trash-color" /></button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            
    </div>
   
  </ComponentCard>

   
   
  );
};

export default Role;