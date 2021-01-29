import React from 'react'
import './index.css';
import { Button, Modal, Form, Input } from 'antd';

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
required: '${label} é obrigatório!',
types: {
  email: '${label} não é um email válido!',
},
};
const onFinish = (values) => {
  console.log(values);
};

class ModalContact extends React.Component {
  render(){
    return(

      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} size={"large"}>
        <Form.Item name={['user', 'name']} label="Nome" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email', required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'topic']} label="Assunto">
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'text']} label="Texto">
            <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
            Enviar
            </Button>
        </Form.Item>
      </Form>
    );
  }
}
export default ModalContact