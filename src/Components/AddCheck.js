import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Button, Form, Input, Modal } from 'antd';
const { Text } = Typography;

function AddCheck() {
    const [visible, setVisible] = useState(false); // State to manage form visibility
    const [formValues, setFormValues] = useState(null); // State to store form values

    useEffect(() => {
        
        if (!visible) {
            setFormValues(null);
        }
    }, [visible]);

    const handleOpenForm = () => {
        setVisible(true);
    };

    const handleCloseForm = () => {
        setVisible(false);
    };

    const handleSubmit = (values) => {
        console.log(values);
        setFormValues(values);
        handleCloseForm();
    };

    return (
        <div style={{background:"white"}}>
            <Row style={{ marginTop: "" }}>
                <Col span={20}>
                    <h1>CheckIns</h1>
                    <div>
                        <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</Text>
                    </div>
                </Col>
                <Col span={4}>
                    <Button type="default" onClick={handleOpenForm} style={{ background: 'black', color: 'white', marginTop: '2rem' }}>
                        Add CheckIn
                    </Button>
                </Col>
            </Row>
            <Modal visible={visible} onCancel={handleCloseForm} footer={null} centered>
                <h3>New CheckIn</h3>
                <Form onFinish={handleSubmit}>
                    <Form.Item name="Title"  rules={[{ required: true }]}>
                        <Input placeholder="Check In Title" />
                    </Form.Item>
                    <Form.Item name="URL"  rules={[{ required: true }]}>
                        <Input placeholder="Image URL" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ float: 'right', background: "black", color: 'white' }}>
                            Create CheckIn
                        </Button>
                        <Button htmlType="button" onClick={handleCloseForm} style={{ float: "right", background: "white", color: 'black' }}>
                            Cancel
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            {formValues && (
                <div style={{ position: 'fixed', right: 0, top: 0, bottom: 0, backgroundColor: 'lightgray', width: '30%', padding: '1rem' }}>
                    <h3>Form Values</h3>
                    <h3><strong>Title:</strong> {formValues.Title}</h3>
                    <h3><strong>URL:</strong> {formValues.URL}</h3>
                    <Button onClick={() => setFormValues(null)} style={{ position: 'absolute', top: 0, right: 0 }}>Close</Button>
                </div>
            )}
        </div>
    )
}

export default AddCheck;