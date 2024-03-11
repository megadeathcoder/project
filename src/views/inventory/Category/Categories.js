import React from 'react';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';

const Categories = () => {
  const categorieslist = [
    { name: 'PigmentP'},
    { name: 'PigmentW'},
    { name: 'PigmentS'},
    // ... more categories
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
          Add Category
        </Button>
       
      </Col>
   
    </Row>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
                <th>Category Name</th>
                <th></th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {categorieslist.map((category) => (
                <tr key={category}>
                  <td>{category.name}</td>
                  <td></td>
                  <td>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" ><i className="bi bi-pencil-fill my-pen-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-eye-fill my-eye-color" /></button>
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

export default Categories;
