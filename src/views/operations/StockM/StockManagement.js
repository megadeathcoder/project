import React from 'react';

import ComponentCard from '../../../components/ComponentCard';

const StockManagement = () => {
  // const stockSummary = {
  //   overall: { total: 900, qty: 23088.00 },
  //   ready: { total: 135, qty: 3677.20 },
  //   factory: { total: 706, qty: 17507.40 },
  //   surplus: { total: 59, qty: 1329.40 },
  // };
  
  const detailedStocks = [
    { id: 1, name: 'Colex International Pvt. Ltd.', grades: 'F151', grains: ['1037 A', '3001 A', '5001 B'], total: 330, qty: 8765.00 },
    { id: 2, name: 'We-One Power Solutions', grades: '383', grains: ['3001 A'], total: 246, qty: 6729.00 },
  ];

  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
  };

  return (
    <ComponentCard
    title="Project Listing"
    subtitle={
      <p>
        Overview of the projects
      </p>
    }
  >
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
 

      <table className="table" style={tableStyle}>
      <thead>
          <tr>
            <th>Company Name</th>
            <th>Grade</th>
            <th>Grain</th>
            <th>Total</th>
            <th>Qty</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {detailedStocks.map((stock) => (
            <tr key={stock.id}>
              <td>{stock.name}</td>
              <td>{stock.grades}</td>
              <td>{stock.grains.join(', ')}</td>
              <td>{stock.total}</td>
              <td>{stock.qty} M</td>
              <td>
                {/* Replace placeholder with actual buttons or links */}
                <button type="button" className="btn">View Orders</button>
              </td>
            </tr>
          ))}
        </tbody>
            </table>
            
    </div>
   
  </ComponentCard>

   
   
  );
};

export default StockManagement;