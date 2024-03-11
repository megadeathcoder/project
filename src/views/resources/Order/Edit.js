import React,{ useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertFromRaw } from 'draft-js';
import './editor.scss';
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
import { useLocation } from 'react-router-dom';
import DashCard from '../../../components/dashboard/dashboardCards/DashCard';



const Edit = () => {
  const location = useLocation();
  const {DisplayName, Status,UseThisasdefaultstatusforOrders, NotifyCustomersviaEmailandSMS,ShortDescription,SmsContent,EmailContent,Subject} = location.state || {}; // Default to an empty object if state is undefined
  
  const [data1,setData1] = useState(UseThisasdefaultstatusforOrders === '1')
  const [data2,setData2] = useState(NotifyCustomersviaEmailandSMS === '1')
  const content = {
      "blocks": [
          {
              "key": "dgeol",
              "text": EmailContent,
              "type": "unstyled",
              "depth": 0,
              "inlineStyleRanges": [],
              "entityRanges": [],
              "data": {}
          }
      ],
      "entityMap": {}
  };
  const [contentState, setEditorState] = useState(convertFromRaw(content));
  
  const onContentStateChange = (c) => {
    console.log('contentState',c);
    setEditorState(c);
  };
  const checkboxclick1 = ()=>{
       console.log('hi',data1);
       setData1(!data1);
       console.log('by',data1);
  }
  const checkboxclick2 = ()=>{
    console.log('hi',data2);
    setData2(!data2);
    console.log('by',data2);
}

  return (
<div>
     
     <Row>
       <Col md="12">
         <Card>
           <CardTitle tag="h4" className="border-bottom bg-primary p-3 mb-0 text-white">
           </CardTitle>
           <CardBody className="bg-light">
             <CardTitle tag="h4" className="mb-0">
             </CardTitle>
           </CardBody>
           <CardBody>
             <Form>
               <Row>
                 <Col md="6">
                   <FormGroup>
                     <Label>Display Name</Label>
                     <Input type="text" placeholder ={DisplayName} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     <Label>Status</Label>
                     <Input type="text" placeholder ={Status} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                     <Input type="checkbox" checked={ data1} onChange={checkboxclick1}  />
                     <Label className='mx-1'> Use this as default status for Orders</Label>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     {/* <Input type="checkbox" checked={ DefaultToFactoryStock === '1'} onChange={checkboxclick()}  /> */}
                     <Input type="checkbox" checked={ data2} onChange={checkboxclick2}  />
                     <Label className='mx-1'> Notify Customers via Email and SMS</Label>
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>

                 <Col md="12">
                   <FormGroup>
                     <Label>Short Description</Label>
                     <Input type="textarea" placeholder ={ShortDescription} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="12">
                   <FormGroup>
                     <Label>SMS Content</Label>
                     <Input type="textarea" placeholder ={SmsContent} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="12">
                   <FormGroup>
                     <Label>Subject</Label>
                     <Input type="text" placeholder ={Subject} />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="12">
                 <DashCard title="Email Content" >
                    <Editor
                      wrapperClassName="demo-wrapper mb-0"
                      editorClassName="demo-editor border mb-4 edi-height"
                      onContentStateChange={onContentStateChange}
                    />
                    <Input type="textarea" raw={4} disabled value={JSON.stringify(contentState, null, 4)} />
                </DashCard>
      </Col>

                 <Col md="4">
                   <FormGroup>
                    <Button type="submit" className="btn my-btn-color" style={{marginTop:"28px"}}>
                        Submit
                    </Button>
                   </FormGroup>
                 </Col>
               </Row>
               
              
             </Form>
             
           </CardBody>
          
          
           
         </Card>
       </Col> 
     </Row>
     
   </div>

   
   
  );
};

export default Edit;