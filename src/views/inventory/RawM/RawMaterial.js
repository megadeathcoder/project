import React from 'react';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';

const RawMaterial = () => {
  const data = [
    { RawMaterialName:'WP.matty_165g_110gsm-Red' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Blue' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Red' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Blue' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Red' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Blue' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Red' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Blue' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Red' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
    { RawMaterialName:'WP.matty_165g_110gsm-Blue' , InputItem: 'Both', CategoryName: 'RM-Textile', SubCategoryName: 'Woven'},
  

  
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
          Add Raw Material
        </Button>
      </Col>
    </Row>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>  
                <th>Raw Material Name</th>
                <th>Input Item</th>
                <th>Category Name</th>
                <th>Sub Category Name</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
                {data.map((raw) => (
                  <tr key={raw}>
                    <td>{raw.RawMaterialName}</td>
                  <td>{raw.InputItem}</td>
                  <td>{raw.CategoryName}</td>
                  <td>{raw.SubCategoryName}</td>
                  <td>
                    {/* Action buttons or icons */}
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" ><i className="bi bi-pencil-fill my-pen-color" /></button>
                      <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-printer-fill my-printer-color" /></button>
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

export default RawMaterial;