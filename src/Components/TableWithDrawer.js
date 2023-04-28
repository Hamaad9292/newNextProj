import React, { useState, useEffect } from 'react';
import { Table, Drawer } from 'antd';

function TableWithDrawer() {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://profound-marmot-29.hasura.app/v1/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
            comments {
              id
              imageUrl
            }
          }
        `
      })
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch comments');
        }
        return res.json();
      })
      .then(data => setComments(data.data.comments))
      .catch(error => console.error(error));
  }, []);
  

  const columns = [
    {
      title: 'Title',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: (text, record) => (
        <span>{record.title}</span>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Owner',
      dataIndex: 'owner',
      key: 'owner',
    },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
    },
  ];
  

  const data = comments.map(comment => ({
    key: comment.id,
    id: comment.id,
    title: comment.title,
    owner: comment.owner,
    status: comment.status,
    created: comment.created
  }));

  const handleRowClick = (record) => {
    setSelectedRow(record);
    setIsDrawerVisible(true);
  }

  const handleDrawerClose = () => {
    setIsDrawerVisible(false);
    setSelectedRow(null);
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
        width={300}
        title="Details"
        open={isDrawerVisible}
        onClose={handleDrawerClose}
      >
        {selectedRow && (
          <div>
            <p>Title: {selectedRow.title}</p>
            <img src={selectedRow.imageUrl} alt="Image Description" width={300} height={200}/>
          </div>
        )}
      </Drawer>
    </div>
  );
}

export default TableWithDrawer;

