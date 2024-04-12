import React, {useState} from 'react';
import {
  Button,
  Row,
  Table,
  Collapse,
  Card,
  Col,
  Input,
  Label,
  FormText,
  FormGroup,
  Form,
  CardBody,
} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import ComponentCard from '../../../components/ComponentCard';
import 'react-table-v6/react-table.css';

const JumbotronComponent = () => {
  const [collapse, setCollapse] = useState(false);
 const navigate = useNavigate();
  const toggle = () => setCollapse(!collapse);

  const orderView = ()=>{
    navigate('/operations/stock-management/order-view');
  }

  return (
    <>
    
          <div style={{display:'flex',flexGrow:'1'}}>

                <div style={{width:'25%',fontSize:'10px',background:'white',margin:'5px',height: 'fit-content'}}>
                  <div style={{textAlign:'center',background:'#3780a2',padding:'10px',color:'white',fontSize:'14px'}}>
                    Overall Stock
                  </div>
                  <Table title='Overall Stock' style={{margin:'0px'}}>
                          <thead>
                          
                          </thead>
                          
                        <thead>
                            
                          
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Count</th>
                            <th scope="col">Qty</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <th scope="row">Total</th>
                                    <td>900</td>
                                    <td>23,008.80 M</td>
                          </tr>
                          <tr>
                            <th scope="row">Grades</th>
                          </tr>
                          <tr>
                          <th scope="row">Ist</th>
                                    <td>591</td>
                                    <td>16,796.00 M</td>
                          </tr>
                          <tr>
                          <th scope="row">A</th>
                                    <td>285</td>
                                    <td>5,810.80 M</td>
                          </tr>
                          <tr>
                          <th scope="row">B</th>
                                    <td>24</td>
                                    <td>402.00 M</td>
                          </tr>
                          <tr>
                          <th scope="row">Surplus</th>
                                    <td> 0</td>
                                    <td>0.00 M</td>
                          </tr>
                        
                        </tbody>
                      </Table>
                 </div>

                <div style={{width:'25%',fontSize:'10px',background:'white',margin:'5px',height: 'fit-content'}}>
                  <div style={{textAlign:'center',background:'#3780a2',padding:'10px',color:'white',fontSize:'14px'}}>
                      Ready Stock
                  </div>
                  <Table title='Overall Stock' style={{margin:'0px'}}>
                          <thead>
                          
                          </thead>
                          
                        <thead>
                            
                          
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Count</th>
                            <th scope="col">Qty</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <th scope="row">Total</th>
                                    <td>900</td>
                                    <td>23,008.80 M</td>
                          </tr>
                          <tr>
                            <th scope="row">Grades</th>
                          </tr>
                          <tr>
                          <th scope="row">Ist</th>
                                    <td>591</td>
                                    <td>16,796.00 M</td>
                          </tr>
                          <tr>
                          <th scope="row">A</th>
                                    <td>285</td>
                                    <td>5,810.80 M</td>
                          </tr>
                          <tr>
                          <th scope="row">B</th>
                                    <td>24</td>
                                    <td>402.00 M</td>
                          </tr>
                          
                        
                        </tbody>
                      </Table>
                 </div>
   
                <div style={{width:'25%',fontSize:'10px',background:'white',margin:'5px',height: 'fit-content'}}>
            <div style={{textAlign:'center',background:'#3780a2',padding:'10px',color:'white',fontSize:'14px'}}>
               Factory Stock
            </div>
            <Table title='Overall Stock' style={{margin:'0px'}}>
                    <thead>
                    
                    </thead>
                    
                  <thead>
                      
                    
                    <tr>
                      <th scope="col"></th>
                      <th scope="col">Count</th>
                      <th scope="col">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <th scope="row">Total</th>
                              <td>900</td>
                              <td>23,008.80 M</td>
                    </tr>
                    <tr>
                       <th scope="row">Grades</th>
                    </tr>
                    <tr>
                    <th scope="row">Ist</th>
                              <td>591</td>
                              <td>16,796.00 M</td>
                    </tr>
                    <tr>
                    <th scope="row">A</th>
                              <td>285</td>
                              <td>5,810.80 M</td>
                    </tr>
                    <tr>
                    <th scope="row">B</th>
                              <td>24</td>
                              <td>402.00 M</td>
                    </tr>
                    
                  
                  </tbody>
                </Table>
                </div>

                <div style={{width:'25%',fontSize:'10px',background:'white',margin:'5px' ,height: 'fit-content'}}>
                  <div style={{textAlign:'center',background:'#3780a2',padding:'10px',color:'white',fontSize:'14px'}}>
                      Surplus Stock
                  </div>
                  <Table title='Overall Stock' style={{margin:'0px'}}>
                          <thead>
                          
                          </thead>
                          
                        <thead>
                            
                          
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Count</th>
                            <th scope="col">Qty</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                          <th scope="row">Total</th>
                                    <td>900</td>
                                    <td>23,008.80 M</td>
                          </tr>
                          <tr>
                            <th scope="row">Grades</th>
                          </tr>
                          <tr>
                          <th scope="row">Ist</th>
                                    <td>591</td>
                                    <td>16,796.00 M</td>
                          </tr>
                          <tr>
                          <th scope="row">A</th>
                                    <td>285</td>
                                    <td>5,810.80 M</td>
                          </tr>
                          <tr>
                          <th scope="row">B</th>
                                    <td>24</td>
                                    <td>402.00 M</td>
                          </tr>
                          <tr>
                          <th scope="row">Surplus</th>
                                    <td> 0</td>
                                    <td>0.00 M</td>
                          </tr>
                        
                        </tbody>
                      </Table>
                </div>
          </div>
           
    

      <ComponentCard title="">

          <Row style={{padding:'8px'}}>
             <Button className='' onClick={toggle.bind(null)} style={{background:'whitesmoke',width:'100%'}}>
                <div style={{background:'#3780a2',width:'fit-content',borderRadius:'50%',padding:'5px 10px'}}>
                  <i className='bi-funnel' style={{fontSize:'20px',color:'white'}}/>
                </div>
            </Button>
            <Collapse isOpen={collapse}>
              <Card className="border">
                <CardBody>
                <Form>
               <Row>
               <Col md="4">
                   <FormGroup>
                     <Label>Order ID</Label>
                     <Input type="text" placeholder="Order ID" />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 <Col md="4">
                   <FormGroup>
                     <Label>Production date</Label>
                     <Input type="date" placeholder="" />
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
            <Row>
            <Table responsive>
                  <thead>
                    <tr>
                      <th scope="col"></th>
                      <th scope="col"></th>
                      
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                              <td>{" Factory Surplus (Total => Count: 59, Qty: 1,829.40 m)(Grains : 1037 A,3001 A,1021 A,5001 B,1014 A,1047 B,1036 A,1046 B,1001 A,1035 A,BOLT,3006 B) "}</td>
                              <td>FS1</td>
                              <td><Button type="submit" className="btn my-btn-color-yellow" style={{marginTop:"28px"}} onClick={orderView}>
                     View Orders
                 </Button></td>
                              

                    </tr>
                    <tr>
                              <td>{" Factory Surplus (Total => Count: 59, Qty: 1,829.40 m)(Grains : 1037 A,3001 A,1021 A,5001 B,1014 A,1047 B,1036 A,1046 B,1001 A,1035 A,BOLT,3006 B) "}</td>
                              <td>{" 268 , 321 , 408 , 503 , 559 , 562 , 570 , 583 , 593 , 604 , 607 , 626 , 632 , 635 , 638 , 646 , 678 , 710 , 729 , 730 , 731 , 737 , 738 , 739 , 742 , 743 , 744 , 751 , 773 , 777 , 787 , 790 , 793 , 794 , 795 , 827 , 832 , 840 , 851 , 861 , 870 , 877 , 880 , 885 , 886 , 892 , 894 , 895 , 897 , 900 , 907 , 913 , 938 , 941 , 957 , 961 , 962 , 966 , 968 , 975 , 976 , 979 , 1028 , 1036 , 1078 , 1109 , 1118 , 1131 , 1152 , 1155 , 1156 , 1204 , 1221 , 1232 , 1333 , 1349 , 1372 , 1406 , 1425 , 1439 , 1458"}</td>
                              <td><Button type="submit" className="btn my-btn-color-yellow" style={{marginTop:"28px"}} onClick={orderView}>
                              View Orders
                 </Button></td>
                    </tr>

                    <tr>
                              <td>{" Factory Surplus (Total => Count: 59, Qty: 1,829.40 m)(Grains : 1037 A,3001 A,1021 A,5001 B,1014 A,1047 B,1036 A,1046 B,1001 A,1035 A,BOLT,3006 B) "}</td>
                              <td>FS1</td>
                              <td><Button type="submit" className="btn my-btn-color-yellow" style={{marginTop:"28px"}} onClick={orderView}>
                     View Orders
                 </Button></td>
                    </tr>

                    <tr>
                              <td>{" Factory Surplus (Total => Count: 59, Qty: 1,829.40 m)(Grains : 1037 A,3001 A,1021 A,5001 B,1014 A,1047 B,1036 A,1046 B,1001 A,1035 A,BOLT,3006 B) "}</td>
                              <td>{" 268 , 321 , 408 , 503 , 559 , 562 , 570 , 583 , 593 , 604 , 607 , 626 , 632 , 635 , 638 , 646 , 678 , 710 , 729 , 730 , 731 , 737 , 738 , 739 , 742 , 743 , 744 , 751 , 773 , 777 , 787 , 790 , 793 , 794 , 795 , 827 , 832 , 840 , 851 , 861 , 870 , 877 , 880 , 885 , 886 , 892 , 894 , 895 , 897 , 900 , 907 , 913 , 938 , 941 , 957 , 961 , 962 , 966 , 968 , 975 , 976 , 979 , 1028 , 1036 , 1078 , 1109 , 1118 , 1131 , 1152 , 1155 , 1156 , 1204 , 1221 , 1232 , 1333 , 1349 , 1372 , 1406 , 1425 , 1439 , 1458"}</td>
                              <td><Button type="submit" className="btn my-btn-color-yellow" style={{marginTop:"28px"}} onClick={orderView}>
                              View Orders
                 </Button></td>
                    </tr>
                  </tbody>
                </Table>  
            </Row>
      </ComponentCard>
    </>
  );
};

export default JumbotronComponent;
