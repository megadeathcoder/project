import React from 'react';
import {
  Row,
  Button,
  Col,
  Table
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import ComponentCard from '../../../components/ComponentCard';
import ComponentCard1 from '../../../components/ComponentCard1';
import ComponentCard4 from '../../../components/ComponentCard4';
import 'react-table-v6/react-table.css';

const JumbotronComponent = () => {
  const navigate = useNavigate();

  const handleEditAdd = () => {
    navigate('/order/orders/add');
  };
  
  return (
    <>
      <ComponentCard1 title="">
         <Row>
                <Col md="12">
                  <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
                    Edit Order
                  </Button>
                </Col>
                
              </Row>
           <ComponentCard>
               <div className="order-view-page-flex">
                <div><i className="bi-hash my-trash-color" style={{fontSize:'19px'}}/>Order No : #572</div>
                <div> <i className="bi-calendar2-event-fill my-eye-color"/>Expected Date : 23 Dec, 2021</div>
                <div><i className="bi-hourglass-split my-calander-color"/>Status : Confirmed</div>
                <div><i className="bi-person-circle my-list-color"/>Customer : Aqualite Industries Pvt. Ltd.</div>
                <div><i className="bi-calendar2-event-fill my-eye-color"/>Order Date : 17 Dec, 2021</div>
                <div><i className="bi-hash my-eye-color" style={{fontSize:'19px'}}/>Purchase Order : 1000031448</div>
                <div><i className="bi bi-tags-fill my-eye-color"/>Priority : High</div>
                <div><i className="bi bi-plus-circle-fill my-calander-color"/>Created By : Team Operations</div>
               </div>
            </ComponentCard>
             
            <ComponentCard4>
             
              <div className='table-margin'>
               <Table className='table-margin-zero order-table-button-x' size="sm">
              
                  <Row  style={{background:'#e3e3e3',padding:'2px'}}>
                    <Col md="8">
                      <div style={{margin:'5px 0px'}}>
                        <div><i className="bi bi-stopwatch-fill  my-calander-color" style={{fontSize:'20px',marginRight:'1px'}}/>Proforma Invoice</div> 
                      </div>
                    </Col>
                    <Col md="4" style={{padding:'5px 0px'}}>

                      <Button  className="btn mybtncustomer btn-secondary" outline color="danger">Send On <i className="bi bi-envelope" style={{fontSize:'20px',marginRight:'1px'}}/></Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="success">Send On <i className="bi bi-whatsapp" style={{fontSize:'20px',marginRight:'1px'}}/></Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="danger">Print</Button>
                    </Col>
                  </Row>
                  
                </Table>
                
                 <div>
                  <div className="order-history">
                      <div>Email History</div>
                         <div><i className="bi bi-arrow-right my-eye-color" style={{fontSize:'19px',marginRight:'2px'}}/>No history found</div>
                  </div>
                 
                  <div className="order-history">
                      <div>Whatsapp History</div>
                         <div><i className="bi bi-arrow-right my-eye-color" style={{fontSize:'19px',marginRight:'2px'}}/>No history found</div>
                  </div>
                 </div>
               </div>
             
            
            

             </ComponentCard4>

            <ComponentCard>
             {/* repeat start */}
              <div className='table-margin'>
               <Table className='table-margin-zero order-table-button' size="sm">
              
                  <Row  style={{background:'#e3e3e3',padding:'2px'}}>
                    <Col md="2">
                      <div style={{margin:'5px 0px'}}>
                        <div className='fix-wid-1'><i className="bi-menu-button-wide-fill my-eye-color" style={{fontSize:'20px',marginRight:'1px'}}/>Product 572_11</div> 
                      </div>
                    </Col>
                    <Col md="10" style={{padding:'5px 0px'}}>

                      <Button  className="btn mybtncustomer btn-secondary" outline color="info"> Planned: 2000.00m</Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="danger"> Mfd Length: 996.70m</Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="info"> Dispatched: 0.00m</Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="danger"> Actual Pending: 3.30m</Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="info"> Delivery Date: 20 Dec, 2021</Button>
                      <button type='button' className="btn mybtncustomer my-btn-color mr-1"> Total: 1000m</button>
                    </Col>
                  </Row>
                  
                </Table>
                
                 <div>
                    <Table className='table-margin-zero ' responsive size="sm">
                      <thead>
                         <tr>
                          <th colSpan={20}>
                           <p style={{background:'#777',textAlign:'center',color:'white',marginBottom:'0px'}}> Front Side </p>
                          </th>
                          </tr>
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
                      <thead>
                         <tr>
                          <th colSpan={20}>
                             <p style={{background:'#777',textAlign:'center',color:'white',marginBottom:'0px'}}> Back Side </p>
                          </th>
                          </tr>
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
            
             {/* repeat start */}
             <div className='table-margin'>
               <Table className='table-margin-zero order-table-button' size="sm">
              
                  <Row  style={{background:'#e3e3e3',padding:'2px'}}>
                    <Col md="2">
                      <div style={{margin:'5px 0px'}}>
                        <div className='fix-wid-1'><i className="bi-hdd-stack-fill my-eye-color" style={{fontSize:'20px',marginRight:'1px'}}/>Product 572_11</div> 
                      </div>
                    </Col>
                    <Col md="10" style={{padding:'5px 0px'}}>

                      <Button  className="btn mybtncustomer btn-secondary" outline color="info"> Planned: 2000.00m</Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="danger"> Mfd Length: 996.70m</Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="info"> Dispatched: 0.00m</Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="danger"> Actual Pending: 3.30m</Button>
                      <Button  className="btn mybtncustomer btn-secondary" outline color="info"> Delivery Date: 20 Dec, 2021</Button>
                      <button type='button' className="btn mybtncustomer my-btn-color mr-1"> Total: 1000m</button>
                    </Col>
                  </Row>
                  
                </Table>
                
                 <div>
                    <Table className='table-margin-zero ' responsive size="sm">
                      <thead>
                         <tr>
                          <th colSpan={20}>
                           <p style={{background:'#777',textAlign:'center',color:'white',marginBottom:'0px'}}> Front Side </p>
                          </th>
                          </tr>
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
                      <thead>
                         <tr>
                          <th colSpan={20}>
                             <p style={{background:'#777',textAlign:'center',color:'white',marginBottom:'0px'}}> Back Side </p>
                          </th>
                          </tr>
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

             </ComponentCard>
         
         <Row>
          <Col md="6">
                <div style={{background:'#e3e3e3',padding:'10px'}}><i className="bi-geo-alt my-list-color" style={{fontSize:'19px'}}/>Billing Address</div>
                <ComponentCard4>
                    <div className="order-view-page-flex-temp">
                      <div>Manufacturing Unit</div> 
                      <div>Site- 308, HSIIDC, Sec-17,</div> 
                      <div>Footwear Park,</div> 
                      <div>Bahadurgarh</div> 
                      <div> Haryana - 06</div> 
                      <div> 124507, India</div> 
                      <div> GST No. : 06AAACF2054Q1ZI</div> 
                    </div>

                    <Table className='table-margin-zero ' responsive size="sm">
                      <thead>
                         <tr>
                          <th colSpan={20}>
                           <p style={{background:'aliceblue',marginBottom:'0px'}}><i className="bi bi-person my-bell-color" style={{fontSize:'19px'}}/>Representatives Details</p>
                          </th>
                          </tr>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Designation</th>
                          <th scope="col">Mobile</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>Suraj Ghosh</td>
                            <td>suraj.ghosh@aqualiteindia.com</td>
                            <td>Store Keeper</td>
                            <td>+91-8683800636 </td>
                        </tr>
                      
                      </tbody>
                     
                    </Table>
                </ComponentCard4>
          </Col>
          <Col md="6">
              <div style={{background:'#e3e3e3',padding:'10px'}}><i className="bi-geo-alt my-calander-color" style={{fontSize:'19px'}}/>Delivery Address</div>
              <ComponentCard4>
                <div className="order-view-page-flex-temp">
                    <div>Manufacturing Unit</div> 
                    <div>Site- 308, HSIIDC, Sec-17,</div> 
                    <div>Footwear Park,</div> 
                    <div>Bahadurgarh</div> 
                    <div> Haryana - 06</div> 
                    <div> 124507, India</div> 
                    <div>GST No. : 06AAACF2054Q1ZI</div> 
                  </div>

                  <Table className='table-margin-zero ' responsive size="sm">
                      <thead>
                         <tr>
                          <th colSpan={20}>
                           <p style={{background:'aliceblue',marginBottom:'0px'}}><i className="bi bi-person my-bell-color" style={{fontSize:'19px'}}/>Representatives Details</p>
                          </th>
                          </tr>
                        <tr>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Designation</th>
                          <th scope="col">Mobile</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>Suraj Ghosh </td>
                            <td>suraj.ghosh@aqualiteindia.com</td>
                            <td>Store Keeper</td>
                            <td>+91-8683800636 </td>
                        </tr>
                      
                      </tbody>
                     
                    </Table>
              </ComponentCard4>
          </Col>
         </Row>
         <Row>
          <Col md="12">
                <div style={{background:'#e3e3e3',padding:'10px'}}><i className="bi bi-stopwatch-fill  my-calander-color" style={{fontSize:'19px'}}/>Order History</div>
                <ComponentCard4>
                  <div className="order-history">
                     <div><i className="bi bi-arrow-right my-eye-color" style={{fontSize:'19px',marginRight:'2px'}}/>Order Created by Team Operations with Confirmed Status on 17 Dec, 2021</div>
                     <div><i className="bi bi-arrow-right my-eye-color" style={{fontSize:'19px',marginRight:'2px'}}/>Order Status changed by Team Operations as Parked Status on 25 Dec, 2021</div>
                     <div><i className="bi bi-arrow-right my-eye-color" style={{fontSize:'19px',marginRight:'2px'}}/>Order Status changed by Team Operations as Confirmed Status on 06 Aug, 2022 </div>
                  </div>
                    
                </ComponentCard4>
          </Col>
          
         </Row>
      </ComponentCard1>
    </>
  );
};

export default JumbotronComponent;
