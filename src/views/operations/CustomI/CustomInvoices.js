import React, { useState } from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,

} from 'reactstrap';
// import ComponentCard from '../../components/ComponentCard';

const CustomInvoices = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems(items.concat({ product: '', grade: '', discount: '', hsnCode: '', quantity: '', price: '', tax: '' }));
  };

  const removeItem = index => {
    const newItems = items.slice();
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleInputChange = (index, event) => {
    const newItems = items.slice();
    console.log("data",newItems);
    newItems[index][event.target.name] = event.target.value;
    setItems(newItems);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Items:', items);
  //   // Here you would typically handle the form submission,
  //   // such as sending data to a server or updating state elsewhere.
  // };




  return (
    <div>
     
      <Row>
        <Col md="12">
          <Card>
            <CardTitle tag="h4" className="border-bottom bg-primary p-3 mb-0 text-white">
            </CardTitle>
            <CardBody className="bg-light">
              <CardTitle tag="h4" className="mb-0">
                Create Invoice
              </CardTitle>
            </CardBody>
            <CardBody>
              <Form>
                <Row>
                  <Col md="3">
                    <FormGroup>
                      <Label>Invoice No</Label>
                      <Input type="text" placeholder="" />
                      <FormText className="muted"></FormText>
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Order Id</Label>
                      <Input type="text" placeholder="" />
                      <FormText className="muted"></FormText>
                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Items Count</Label>
                      <Input type="text" placeholder="" />
                      <FormText className="muted"></FormText>

                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Invoice Unit</Label>
                      <Input type="text" placeholder="" />
                      <FormText className="muted"></FormText>

                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                <Col md="3">
                    <FormGroup>
                      <Label>Vehicle No</Label>
                      <Input type="text" placeholder="" />
                      <FormText className="muted"></FormText>

                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Driver Name</Label>
                      <Input type="text" placeholder="" />
                      <FormText className="muted"></FormText>

                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Driver Mobile</Label>
                      <Input type="text" placeholder="" />
                      <FormText className="muted"></FormText>

                    </FormGroup>
                  </Col>
                  <Col md="3">
                    <FormGroup>
                      <Label>Invoice Date</Label>
                      <Input type="text" placeholder="" />
                      <FormText className="muted"></FormText>

                    </FormGroup>
                  </Col>
                </Row>
               
              </Form>
            </CardBody>
            <Row>
              <Col md="10">
                  <Button>Add Items</Button>
              </Col>
              <Col md="2">
                <Button type="button" className='btn-success' onClick={addItem}>Add More</Button>
              </Col>
            </Row>
            
            <table className="table">
            
      <thead>
            <tr>
              <Row>
                <Col md="3"><th>Product</th></Col>
                <Col md="1"><th>Grade</th></Col>
                <Col md="2"> <th>Discount%</th></Col>
                <Col md="2"> <th>HSN Code</th></Col>
                <Col md="1"> <th>Quantity</th></Col>
                <Col md="1"> <th>Price</th></Col>
                <Col md="1"> <th>Tax %</th></Col>
                <Col md="1"> <th>Action</th></Col>
              </Row>
              
            
            </tr>
          </thead>
          <tbody>
          
          </tbody>
              <tbody>
              {items.map((item, index) => (
                  <tr key={item}>
                    <Row>
                    <Col md="3"><Input name="product" value={item.product} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><Input name="grade" value={item.grade} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="discount" value={item.discount} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="2"><Input name="hsnCode" value={item.hsnCode} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><Input name="quantity" value={item.quantity} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><Input name="price" value={item.price} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><Input name="tax" value={item.tax} type="text" onChange={e => handleInputChange(index, e)} placeholder="" /></Col>
                      <Col md="1"><button type="button"  style={{ backgroundColor:"red",marginTop:"5px"}} onClick={() => removeItem(index)}>X</button></Col>
                    </Row>
                    
                  </tr>
                ))}
              </tbody>
            </table>

            <CardBody className="border-top gap-2 d-flex align-items-center">
              <Button type="submit" className="btn my-btn-color">
                Save
              </Button>
              <Button type="button" className="btn btn-dark ml-2">
                Cancel
              </Button>
            </CardBody>
          </Card>
        </Col> 
      </Row>
      
    </div>
   
   
  );
};

export default CustomInvoices;