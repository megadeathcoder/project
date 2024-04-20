import React from 'react';
import {
  Row,
  Table
} from 'reactstrap';
import ComponentCard from '../../../components/ComponentCard';
import 'react-table-v6/react-table.css';

const JumbotronComponent = () => {





  return (
    <>
      <ComponentCard title="">
            <Row> 
                  <div className='table-margin'>
                    <Table className='table-margin-zero'>
                      <thead>
                        <tr>
                          <th scope="col">Order Details</th>
                          <th scope="col">Order and Exp Date	</th>
                          <th scope="col">Grain</th>
                          <th scope="col">Color</th>
                          <th scope="col">Quality</th>
                          <th scope="col">Thickness</th>
                          <th scope="col">Fabric</th>
                          <th scope="col">Fabric Color</th>
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
                                  
                                  <td >1001 A</td>
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
               
            </Row>
      </ComponentCard>
    </>
  );
};

export default JumbotronComponent;
