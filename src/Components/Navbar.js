import React from 'react';
import { Row, Col, Typography, Button, Avatar } from 'antd';
import BabyIcon from '@ant-design/icons/CiTwoTone';

const { Text } = Typography;

function Navbar() {
  return (
    <div style={{background:"white"}}>
      <Row>
        <Col span={14} style={{marginLeft:'2rem'}}>
          <h1>AAA</h1>
        </Col>
        <Col span={8} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          <Button type="text">Feedback</Button>
          <Button type="text">Support</Button>
          <Avatar size={25} icon={<BabyIcon/> } />
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;