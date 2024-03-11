import {
  Button,
} from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';


const OrderTemplates = () => {
  const data = [
    { id: 1, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/11203_sports_109697', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 2, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/1221_sandal_1104267', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 3, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/11203_sports_109697', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 4, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/1221_sandal_1104267', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 5, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/11203_sports_109697', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 6, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/1221_sandal_1104267', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 7, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/11203_sports_109697', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 8, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/1221_sandal_1104267', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 9, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/11203_sports_109697', customer: 'Relaxo Footwear Ltd.', type: 'customer' },
    { id: 10, title: 'C:/FOT/PCV/UPS/C1/Q2/XY/1221_sandal_1104267', customer: 'Relaxo Footwear Ltd.', type: 'customer' },

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
                {data.map((item) => (
                  <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.customer}</td>
                  <td>{item.type}</td>
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

export default OrderTemplates;
