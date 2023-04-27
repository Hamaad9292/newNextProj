import React, { useState } from 'react';
import { Table, Drawer } from 'antd';

const columns = [
  {
    title: 'Title',
    dataIndex: 'Title',
    key: 'Title',
  },
  {
    title: 'Status',
    dataIndex: 'Status',
    key: 'Status',
  },
  {
    title: 'Owner',
    dataIndex: 'Owner',
    key: 'Owner',
  },
  {
    title: 'Created',
    dataIndex: 'Created',
    key: 'Created',
  },
];

const data = [
  {
    key: '1',
    Title: 'John Brown',
    Owner: "john Down",
    Status: 'Checked In',
    Created: '12-11-2022',
  },
  {
    key: '2',
    Title: 'John Brown',
    Owner: "john Down",
    Status: 'Checked In',
    Created: '12-11-2022',
  },
  {
    key: '3',
    Title: 'John Brown',
    Owner: "john Down",
    Status: 'Checked In',
    Created: '12-11-2022',
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
            <p>Title: {selectedRow.Title}</p>
            <p>Status: {selectedRow.Status}</p>
            <p>Owner: {selectedRow.Owner}</p>
            <p>Created At: {selectedRow.Created}</p>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default TableWithDrawer;