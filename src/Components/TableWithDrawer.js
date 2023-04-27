import React, { useState } from 'react';
import { Table, Drawer } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
];

function TableWithDrawer() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false); // state for Drawer visibility
  const [selectedRow, setSelectedRow] = useState(null); // state for selected row

  const handleRowClick = (record) => {
    setSelectedRow(record); // set the selected row
    setIsDrawerVisible(true); // open the Drawer
  }

  const handleDrawerClose = () => {
    setIsDrawerVisible(false); // close the Drawer
    setSelectedRow(null); // reset the selected row
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: () => handleRowClick(record), 
          };
        }}
      />
      <Drawer
        title="Detail"
        visible={isDrawerVisible}
        onClose={handleDrawerClose}
      >
        {selectedRow && (
          <div>
            <p>Name: {selectedRow.name}</p>
            <p>Age: {selectedRow.age}</p>
            <p>Address: {selectedRow.address}</p>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default TableWithDrawer;