import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
const { Text } = Typography;

function Navbar() {
  return (
    <div>
      <Row>
        <Col span={16}>
          <h1>AAA</h1>
        </Col>
        <Col span={8}>
          <Button type="text">Feedback</Button>
          <Button type="text">Support</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;