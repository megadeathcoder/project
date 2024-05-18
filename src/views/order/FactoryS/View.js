import React,{useState,useEffect}  from 'react';
import {
  Button,
  Row,
  Table,
  Col,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import ComponentCard1 from '../../../components/ComponentCard1';
import ComponentCard4 from '../../../components/ComponentCard4';
import 'react-table-v6/react-table.css';
import Barcode from "../../../assets/images/bg/barcode.png"

const JumbotronComponent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleEditAdd = () => {
    navigate('/order/factory-surplus/edit');
  };

  const handleSmallRollCreate = () => {
    navigate('/order/factory-surplus/small-roll-create');
  };
  const handleSmallRollEdit = (rollItem) => {
    navigate('/order/factory-surplus/small-roll-edit', {state: rollItem});
  };

  useEffect(() => {
    
   

    const fetchData = async () => {
      const token = localStorage.getItem('userToken');
      // console.log('token',token);
      const response = await fetch('https://factory.teamasia.in/api/public/rolls?is_trashed=0', {
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
      console.log("responsejson1",result.rolls);
      
      
      setData(result.rolls); 
    };

    fetchData();

  },[]);

  return (
    <>
      <ComponentCard1 title="">
         <Row>
                <Col md="12">
                  <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
                    Edit Product
                  </Button>
                </Col>
                
              </Row>
           
             
           

            <ComponentCard4>
             {/* repeat start */}
              <div className='table-margin'>
               <Table className='table-margin-zero order-table-button' size="sm">
              
                  <Row  style={{background:'#e3e3e3',padding:'2px'}}>
                    <Col md="6">
                      <div style={{margin:'0px 0px'}}>
                        <div className='fix-wid-1'><i className="bi-menu-button-wide-fill my-eye-color" style={{fontSize:'20px',marginRight:'1px'}}/>Product</div> 
                      </div>
                    </Col>
                    <Col md="6" style={{padding:'5px 0px 0px 0px'}}>
                      <button type='button' className="btn mybtncustomer my-btn-color-blue mr-1"> Remaining:19.80 meters</button>
                      <button type='button' className="btn mybtncustomer my-btn-color mr-1"> Total: 450 meters</button>
                      <button type='button' className="btn mybtncustomer my-btn-color-red mr-1" onClick={() => handleSmallRollCreate()}> Create Small Roll </button>
                    </Col>
                  </Row>
                  
                </Table>
                
                 <div>
                    <Table className='table-margin-zero ' responsive size="sm">
                      <thead>
                        
                        <tr>
                          <th scope="col">Grain</th>
                          <th scope="col">Color</th>
                          <th scope="col">Quality</th>
                          <th scope="col">Thickness</th>
                          <th scope="col">Fabric</th>
                          <th scope="col">FabricColor</th>
                          <th scope="col">HSN</th>
                          <th scope="col">Price($)</th>
                          <th scope="col">Tax</th>
                          <th scope="col">Embossing</th>
                          <th scope="col">Printing</th>
                          <th scope="col">CIR.</th>
                          <th scope="col">AT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td >1001A</td>
                                  <td>black</td>
                                  <td>Q2/CX0Y13Z03</td>
                                  <td>1.7 mm </td>
                                  <td>WP.matty_185g_120gsm</td>
                                  <td>black</td>
                                  <td>59031090</td>
                                  <td>313.6</td>
                                  <td>12%</td>
                                  <td>N/A</td>
                                  <td>N/A</td>
                                  <td>N/A</td>
                                  <td>N/A</td>

                        </tr>
                      
                      </tbody>
                      
                    </Table>
                 </div>
               </div>
              {/* repeat end */}
             </ComponentCard4>
         
            
              <ComponentCard4 title="">  
                      <Table responsive size="sm">
                        <thead>
                          <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Grade</th>
                            <th scope="col">Weight</th>
                            <th scope="col">BIN</th>
                            <th scope="col">GSM(g/m2)</th>
                            <th scope="col">Code</th>
                            <th scope="col">Action</th>
                            <th scope="col">Comment</th>
                          
                          </tr>
                        </thead>
                        <tbody>
                            {
                              data.map((roll,index)=>{
                            return (
                                      <tr key={roll.id}>
                                          <td>{index}</td>
                                          <td>{roll.quantity}</td>
                                          <td>{roll.grade_id}</td>
                                          <td>{roll.weight}</td>
                                          <td>{roll.bin}</td>
                                          <td>{roll.quantity}</td>
                                          <td><img src={Barcode} alt='barcode'/></td>
                                          <td>
                                            <td ><Button ><i className="bi bi-printer-fill my-pen-color" /></Button></td>
                                            <td ><Button ><i className="bi bi-pencil-fill my-eye-color" onClick={()=>handleSmallRollEdit(roll)} /></Button></td>
                                            <td ><Button ><i className="bi bi-trash-fill my-bell-color" /></Button></td>
                                          </td>
                                          <td>{roll.comment}</td>
                                        </tr>
                                 )
                              })
                            }

                          

                          <tr>
                            <td>5</td>
                            <td>17 m</td>
                            <td>Ist</td>
                            <td>30.92 kg</td>
                            <td></td>
                            <td>1299.16</td>
                            <td><img src={Barcode} alt='barcode'/></td>
                            <td>
                              <td ><Button ><i className="bi bi-printer-fill my-pen-color" /></Button></td>
                              <td ><Button ><i className="bi bi-pencil-fill my-eye-color" /></Button></td>
                              <td ><Button ><i className="bi bi-trash-fill my-bell-color" /></Button></td>
                            </td>
                            <td></td>
                          </tr>
                        
                        </tbody>
                      </Table>
              </ComponentCard4>
           
        
      </ComponentCard1>
    </>
  );
};

export default JumbotronComponent;
