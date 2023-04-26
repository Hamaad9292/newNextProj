import React from 'react';
import { Row, Typography } from 'antd';
const { Text } = Typography;

function Detail() {
    return (
        <div>
            <Row style={{ marginTop: '2rem' }}>
                <table style={{ width: '100%' }}>
                    <tr>
                        <th colSpan={6}>Title</th>
                        <th colSpan={6}>Owner</th>
                        <th colSpan={6}>Status</th>
                        <th colSpan={6}>Created at</th>
                    </tr>
                    <tr style={{ textAlign: "center" }}>
                        <td colSpan={6}>CheckIn Name</td>
                        <td colSpan={6}>John Doer</td>
                        <td colSpan={6}>CHECKED IN</td>
                        <td colSpan={6}>12 November 2022</td>
                    </tr>
                </table>
            </Row>
        </div>
    )
}

export default Detail;