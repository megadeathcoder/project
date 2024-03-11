import React from 'react';
import {
  Button,
} from 'reactstrap';
import ComponentCard from '../../../components/ComponentCard';

const FactorySurplus = () => {
  const data = [
    { id: 1, grain: '1037 A', fabric: 'NW.needlepunch_220gsm', quality: 'SURPLUS', color: 'black', quantity: '450 m' },
    { id: 2, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 3, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 4, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 5, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 6, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 7, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 8, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 9, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 10, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 11, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 12, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
    { id: 13, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black', quantity: '150 m' },
  
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
     <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }}>
      Add Surplus Product
            </Button>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
            <th>Grain</th>
            <th>Fabric</th>
            <th>Quality</th>
            <th>Color</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
              </thead>
              <tbody>
                {data.map((product) => (
                  <tr key={product.id}>
                  <td>{product.grain}</td>
                  <td>{product.fabric}</td>
                  <td>{product.quality}</td>
                  <td>{product.color}</td>
                  <td>{product.quantity}</td>
                  <td>
                    {/* Action buttons or icons */}
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

export default FactorySurplus;
