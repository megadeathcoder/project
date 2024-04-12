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
import { useLocation,useNavigate } from 'react-router-dom';
import DashCard from '../../../components/dashboard/dashboardCards/DashCard';



const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {id,name:DisplayName,status: Status,is_default_status:UseThisasdefaultstatusforOrders,is_notify: NotifyCustomersviaEmailandSMS,short_description:ShortDescription,sms_content:SmsContent,email_content:EmailContent,subject:Subject} = location.state || {}; // Default to an empty object if state is undefined

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


const [formDatas, setFormDataS] = useState({
  name:DisplayName,
  Status,
  UseThisasdefaultstatusforOrders,
  NotifyCustomersviaEmailandSMS,
  ShortDescription,
  SmsContent,
  EmailContent,
  Subject
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormDataS(prevState => ({
    ...prevState,
    [name]: value
  }));
};

async function apiCall() {
  try {
      // const formData = new FormData();
      // formData.append('name', formDatas.name);
      // formData.append('iso_code', formDatas.isoCode);
      // formData.append('isd_code', formDatas.isdCode);
      // console.log("json",JSON.stringify({
      //   name:formDatas.name,
      //   iso_code:formDatas.isoCode,
      //   isd_code:formDatas.isdCode
      // }));
      // console.log('formdata',formData);

      const token = localStorage.getItem('userToken');
      const response = await fetch(`https://factory.teamasia.in/api/public/pasteteams/${id}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
         
          body: JSON.stringify({
            name:formDatas.name,
            status:formDatas.Status,
            is_default_status:formDatas.UseThisasdefaultstatusforOrders,
            is_notify:formDatas.NotifyCustomersviaEmailandSMS,
            short_description:formDatas.ShortDescription,
            sms_content:formDatas.SmsContent,
            email_content:formDatas.EmailContent,
            subject:formDatas.Subject,
          }),
      });

      const data = await response.json();
      console.log("dataapi",data)
      if (response.ok) {


        navigate('/resources/paste-types');
          
      } 
          // Handle any errors, such as showing an error message to the user
          console.error("Authentication failed:", data.message);
          return null;
    
  } catch (error) {
      console.error("Network error:", error);
      return null;
  }
}

const handleSubmit = async (event) => {
event.preventDefault();
console.log('event',event);
apiCall();

};
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
             <Form onSubmit={handleSubmit}>
               <Row>
                 <Col md="6">
                   <FormGroup>
                     <Label>Display Name</Label>
                     <Input   
                      type="text" 
                      name="name" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.name}
                      onChange={handleChange}
                     />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="6">
                   <FormGroup>
                     <Label>Status</Label>
                     <Input   
                      type="text" 
                      name="Status" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.Status}
                      onChange={handleChange}
                     />
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
                     <Input   
                      type="textarea" 
                      name="ShortDescription" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.ShortDescription}
                      onChange={handleChange}
                     />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="12">
                   <FormGroup>
                     <Label>SMS Content</Label>
                     <Input   
                      type="textarea" 
                      name="SmsContent" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.SmsContent}
                      onChange={handleChange}
                     />
                     <FormText className="muted"></FormText>
                   </FormGroup>
                 </Col>
                 <Col md="12">
                   <FormGroup>
                     <Label>Subject</Label>
                     <Input
                      type="text"   
                      name="Subject" 
                      id="name" 
                      placeholder="Enter name" 
                      value={formDatas.Subject}
                      onChange={handleChange}
                     />
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