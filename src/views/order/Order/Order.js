import React, {useState,useEffect } from 'react';
import { Row,Col,Button,Input,Label,Collapse,Card,CardBody,Form,FormGroup,FormText,Table} from 'reactstrap';
import PropTypes from 'prop-types';
import 'react-table-v6/react-table.css';
import { useNavigate } from 'react-router-dom';
import ComponentCard from '../../../components/ComponentCard';

const MyTooltip = ({children,text})=>{

  return (<div className="tooltip-container">
      {/* {console.log('children',children)} */}
      {children}
      <span className="my-tooltip">{text}</span>
  </div>)
}

const JumbotronComponent = () => {
// const [data,setData] = useState([]);
      const [collapse, setCollapse] = useState(false);
      const navigate = useNavigate();

     

      const toggle = () => setCollapse(!collapse);
      const handleEditAdd = () => {
        navigate('/order/orders/add');
      };

      const  editOrder = () => {
        navigate('/order/orders/edit');
      };

      const  viewOrder = () => {
        console.log('hi');
        navigate('/order/orders/view');
      };

      useEffect(()=>{
        const fetchData = async ()=>{

          const token = localStorage.getItem('userToken');
          const response =await  fetch(`https://factory.teamasia.in/api/public/orders/?is_trashed=0`,{
            method: "GET",
            headers:{
              'Authorization': `Bearer ${token}`
            }
          });

          if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          
          const datas = await response.json();
            // setData(datas.orders);
            console.log('result',datas.orders);
        }
        fetchData();
      },[])

  return (
    <>
     
        <Row>
            <ComponentCard>
              <Row>
                <Col md="4">
                  <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
                    Add Order
                  </Button>
                  <Button className='my-btn-color' onClick={toggle.bind(null)} style={{ marginBottom: '1rem',marginRight:'10px' }}>
                    Search
                  </Button>
                  <Button className='my-btn-color-green' style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
                    Parked
                  </Button>
                </Col>
                <Col md="8" style={{textAlign:'right'}}>
                   <Button className='my-btn-color-red' style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
                     Print
                  </Button>
                   <Button className='my-btn-color-green' style={{ marginBottom: '1rem',marginRight:'10px' }} onClick={() => handleEditAdd()}>
                    Sort By Customer
                  </Button>
                </Col>
              </Row>
              <Row>
                  <Collapse isOpen={collapse}>
                    <Card className="border">
                      <CardBody>
                      <Form>
                    <Row>
                      <Col md="2">
                        <FormGroup>
                          <Label>Order No</Label>
                          <Input type="text" placeholder="Order No" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Customer</Label>
                          <Input type="text" placeholder="" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Order Date</Label>
                          <Input type="date" placeholder="Order Date" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Expected Date</Label>
                          <Input type="date" placeholder="Expected Date" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Grain</Label>
                          <Input type="text" placeholder="" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                      <FormGroup>
                          <Label>Priority</Label>
                          <Input type="select">
                            <option>Choose Priority...</option>
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                          </Input>
                      </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Status</Label>
                          <Input type="text" placeholder="" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Quality</Label>
                          <Input type="text" placeholder="" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Purchase Order</Label>
                          <Input type="text" placeholder="" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Color</Label>
                          <Input type="text" placeholder="" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <Label>Thickness</Label>
                          <Input type="text" placeholder="Thickness" />
                          <FormText className="muted"></FormText>
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <Button type="submit" className="btn btn-info" style={{marginTop:"28px"}}>
                              Search
                          </Button>
                          <Button type="reset" className="btn btn-info" style={{marginTop:"28px",marginLeft:"10px"}}>
                              Reset
                          </Button>
                        </FormGroup>
                      </Col>
                    </Row>
                    
                    
                  </Form>
                      </CardBody>
                    </Card>
                  </Collapse>
              </Row>
              <div className='table-margin table-responsive'>
                <Table className='table-margin-zero-temp responsive table-size-x' size="sm">
                  <thead>
                    <tr>
                      <th>Order Details</th>
                      <th>Order and Exp Date</th>
                      <th>
                        <Table>
                           <tbody>
                            <tr>
                            <td>         Grain </td>
                            <td>       Quality </td>
                            <td>         THKNS </td>
                            <td>         Color </td>
                            <td>         T.Qty </td>
                            <td>          2PLN </td>
                            <td>           MFG </td>
                            <td>          DISP </td>
                            <td>       DISP OT </td>
                            <td>Actual Pending </td>
                            </tr>
                           </tbody>
                        </Table>
                      </th>
                    </tr>
                  </thead>
                  <tbody >
                    {/* Repeat this block for each set of order details */}
                    <tr >
                      <td>
                        <Table className="order-page-table" size="sm">
                          <thead>
                            <tr>
                              <th>
                                 #572
                              </th>
                              <th title='Aqualite  aaaaaa aaaaaaaaaaa Industries Pvt. Ltd.'>
                                 Aqualite  aaaaaa aaaaaaaaaaa Industries Pvt. Ltd.
                              </th>
                            </tr>
                            <tr>
                              <th>
                                 Confirmed
                              </th>
                              <th>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1" onClick={()=>{editOrder()}}><i className="bi bi-pencil-fill my-pen-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1" onClick={()=>{viewOrder()}}><i className="bi bi-eye-fill my-list-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-files my-eye-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-file-earmark-check-fill my-eye-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-person-fill my-trash-color" /></button>
                              </th>
                            </tr>
                          </thead>
                        </Table>
                      </td>
                      
                      <td  className="date-cell">
                        <div>
                          17 Dec, 2021
                        </div>
                        <div>
                          23 Dec, 2021
                        </div>
                      </td> 
                      <td>
                        <Table size='sm' className="order-page-table">
                          <tbody>
                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02 Q22/CX0Y12Z02">Q22/CX0Y12Z02 Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>
                           
                            
                                 
                          </tbody>
                        </Table>  
                      </td>
                    </tr>
                    {/* Repeat this block for each set of order details */}

{/* Repeat this block for each set of order details */}
<tr >
                      <td>
                        <Table className="order-page-table" size="sm">
                          <thead>
                            <tr>
                              <th>
                                 #572
                              </th>
                              <th title='Aqualite Industries Pvt. Ltd.'>
                                 Aqualite Industries Pvt. Ltd.
                              </th>
                            </tr>
                            <tr>
                              <th>
                                 Confirmed
                              </th>
                              <th>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1" onClick={()=>{editOrder()}}><i className="bi bi-pencil-fill my-pen-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1" onClick={()=>{viewOrder()}}><i className="bi bi-eye-fill my-list-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-files my-eye-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-file-earmark-check-fill my-eye-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-person-fill my-trash-color" /></button>
                              </th>
                            </tr>
                          </thead>
                        </Table>
                      </td>
                      
                      <td  className="date-cell">
                        <div>
                          17 Dec, 2021
                        </div>
                        <div>
                          23 Dec, 2021
                        </div>
                      </td> 
                      <td>
                        <Table size='sm' className="order-page-table">
                          <tbody>
                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02 Q22/CX0Y12Z02">Q22/CX0Y12Z02 Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>
                           
                            
                                 
                          </tbody>
                        </Table>  
                      </td>
                    </tr>
                    {/* Repeat this block for each set of order details */}

                    {/* Repeat this block for each set of order details */}
                    <tr >
                      <td>
                        <Table className="order-page-table" size="sm">
                          <thead>
                            <tr>
                              <th>
                                 #572
                              </th>
                              <th title='Aqualite Industries Pvt. Ltd.'>
                                 Aqualite Industries Pvt. Ltd.
                              </th>
                            </tr>
                            <tr>
                              <th>
                                 Confirmed
                              </th>
                              <th>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1" onClick={()=>{editOrder()}}><i className="bi bi-pencil-fill my-pen-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1" onClick={()=>{viewOrder()}}><i className="bi bi-eye-fill my-list-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-files my-eye-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-file-earmark-check-fill my-eye-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-person-fill my-trash-color" /></button>
                              </th>
                            </tr>
                          </thead>
                        </Table>
                      </td>
                      
                      <td  className="date-cell">
                        <div>
                          17 Dec, 2021
                        </div>
                        <div>
                          23 Dec, 2021
                        </div>
                      </td> 
                      <td>
                        <Table size='sm' className="order-page-table">
                          <tbody>
                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02 Q22/CX0Y12Z02">Q22/CX0Y12Z02 Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>
                           
                            
                                 
                          </tbody>
                        </Table>  
                      </td>
                    </tr>
                    {/* Repeat this block for each set of order details */}

                    {/* Repeat this block for each set of order details */}
                    <tr >
                      <td>
                        <Table className="order-page-table" size="sm">
                          <thead>
                            <tr>
                              <th>
                                 #572
                              </th>
                              <th title='Aqualite Industries Pvt. Ltd.'>
                                 Aqualite Industries Pvt. Ltd.
                              </th>
                            </tr>
                            <tr>
                              <th>
                                 Confirmed
                              </th>
                              <th>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1" onClick={()=>{editOrder()}}><i className="bi bi-pencil-fill my-pen-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1" onClick={()=>{viewOrder()}}><i className="bi bi-eye-fill my-list-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-files my-eye-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-file-earmark-check-fill my-eye-color" /></button>
                                   <button type="button" className="btn mybtncustomer btn-secondary  mr-1"><i className="bi bi-person-fill my-trash-color" /></button>
                              </th>
                            </tr>
                          </thead>
                        </Table>
                      </td>
                      
                      <td  className="date-cell">
                        <div>
                          17 Dec, 2021
                        </div>
                        <div>
                          23 Dec, 2021
                        </div>
                      </td> 
                      <td>
                        <Table size='sm' className="order-page-table">
                          <tbody>
                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02 Q22/CX0Y12Z02">Q22/CX0Y12Z02 Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>

                            <tr>
                              <td title="ALINEA">ALINEA</td>
                              <td title="Q22/CX0Y12Z02">Q22/CX0Y12Z02</td>
                              <td title="2.4mm">2.4mm</td>
                              <td title="peach">peach</td>
                              <td title="1000m">1000m</td>
                              <td title="2000.00m">2000.00m</td>
                              <td title="996.70m">996.70m</td>
                              <td title="491.10m"> 491.10m</td>
                              <td title="0.00m">0.00m</td>
                              <td title="3.30m">3.30m</td>
                            </tr>
                           
                            
                                 
                          </tbody>
                        </Table>  
                      </td>
                    </tr>
                    {/* Repeat this block for each set of order details */}
                   
                  </tbody>
                </Table>
                
              </div>
            </ComponentCard>
        </Row>
    </>
  );
};

export default JumbotronComponent;

MyTooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};