import React,{useState, useEffect} from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Label,
  Button,
} from 'reactstrap';
// import { useParams } from 'react-router-dom';
import { useLocation,useNavigate } from 'react-router-dom';

// import ComponentCard from '../../components/ComponentCard';

const Products = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {id} = location.state || {}; // Default to an empty object if state is undefined
  

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);

  // const items = [
  //   { id: 1, grain: '1037 A', fabric: 'NW.needlepunch_220gsm', quality: 'SURPLUS', color: 'black',hsnCode:'56039400',PricePerUnit:'274.4',Thickness:'1.5',TaxRate:'12',deliveryDate:'2021-06-19',CustomerItemRefernce:'', quantity: '450 m' },
  // { id: 2, grain: '3001 A', fabric: 'WP.matty_165g_110gsm', quality: 'SURPLUS', color: 'black',hsnCode:'56039400',PricePerUnit:'274.4',Thickness:'1.5',TaxRate:'12',deliveryDate:'2021-06-19',CustomerItemRefernce:'', quantity: '150 m' },
  // ]
  console.log('final',location.state);




//  console.log("items",items);

  const addProductItem = () => {
    console.log('idxxxxx',id);
     navigate('/order/orders/product-add',{state: id});
  };

  const editProductItem = () => {
    console.log('idxxxxx',id);
     navigate('/order/order-templates/product-add',{state: id});
  };

  // const handleInputChange = (index, event) => {
  //   const newItems = items.slice();
  //   console.log("data",index,newItems);
  //   newItems[index] =  event.target.value;
  //   setItems(newItems);
  //   setData2(newItems);
  // };





function getGrainNameById(grainId) {
  const Name = data2.find(item => item.id === grainId);
  console.log('a1',Name);
  return Name ? Name.name : 'Unknown Country';
}

function getFabricNameById(fabricId) {
  const Name = data3.find(item => item.id === fabricId);
  console.log('a1',Name);
  return Name ? Name.name : 'Unknown State';
}

function getQualityNameById(qualityId) {
  const Name = data4.find(item => item.id === qualityId);
  console.log('a1',Name);
  return Name ? Name.name : 'Unknown State';
}

function getColorNameById(colorId) {
  const Name = data5.find(item => item.id === colorId);
  console.log('a1',Name);
  return Name ?  Name.name : 'Unknown State';
}


const productwithNames = data1.map(product => ({
  ...product,
  grainName: getGrainNameById(product.grain_id),
  fabricName: getFabricNameById(product.fabric_id),
  qualityName: getQualityNameById(product.quality_id),
  colorName: getColorNameById(product.color_id)
}));

  useEffect(() => {
    const fetchData1 = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch(`https://factory.teamasia.in/api/public/products`, {
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
      setData1(result.products); 
    };

    const fetchData2 = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch('https://factory.teamasia.in/api/public/grains', {
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
      setData2(result.grains); 
    };
    const fetchData3 = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch('https://factory.teamasia.in/api/public/fabrics', {
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
      console.log("responsejson2",result);
      setData3(result.fabrics); 
    };
    const fetchData4 = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch('https://factory.teamasia.in/api/public/qualities', {
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
      console.log("responsejson3",result);
      setData4(result.qualities); 
    };
    const fetchData5 = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch('https://factory.teamasia.in/api/public/colors', {
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
      console.log("responsejson4",result);
      setData5(result.colors); 
    };


    fetchData1();
    fetchData2();
    fetchData3();
    fetchData4();
    fetchData5();
  },[]);

  return (
<div>
     
     <Row>
       <Col md="12">
         <Card>
         <CardTitle tag="h4" className=" p-3 mb-0 text-white">
           </CardTitle>
          
           <CardBody>
             

               <Row>
                 

                  <Row>
                  <Col md="10">
                    <Label>Products</Label>
                  </Col>
                  <Col md="2">
                    <Button type="button" className='my-btn-color-red' onClick={addProductItem}>Add Product</Button>
                  </Col>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <table className="table" >        
                      <thead >
                          <tr >
                            <th>Grain</th>
                            <th>Quality</th>
                            <th>Color</th>
                            <th>Thickness</th>
                            <th>Fabric</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
            
                      <tbody>
                        {productwithNames.map((product) => (
                          <tr key={product.id}>
                          <td>{product.grainName}</td>
                          <td>{product.qualityName}</td>
                          <td>{product.colorName}</td>
                          <td>{product.thickness}</td>
                          <td>{product.fabricName}</td>
                          <td>{product.quantity}</td>
                          <td>{product.delivery_date}</td>
                          <td>
                            {/* Action buttons or icons */}
                              <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" onClick={() => editProductItem(product)}><i className="bi bi-pencil-fill my-pen-color" /></button>
                              <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-eye-fill my-eye-color" /></button>
                              <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2" ><i className="bi bi-trash-fill my-trash-color" /></button>
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                </Row>

                
               </Row>
           </CardBody>
          
          
           
         </Card>
       </Col> 
     </Row>
     
   </div>

   
   
  );
};

export default Products;