import Navbar from '@/Components/Navbar';
import AddCheck from '@/Components/AddCheck'
import React from 'react';
import TableWithDrawer from '@/Components/TableWithDrawer';



function New() {
  return (

    <div style={{ background: '	#F8F8F8', height: '1300px' }}>

     <div style={{width:'100%'}}><Navbar /></div> 
      <div style={{ marginTop: '.5rem' }}><AddCheck /></div>
      <div style={{ marginLeft: "1rem", marginRight: '1rem', marginTop: '.5rem', marginBottom: '2rem', }}> <TableWithDrawer /></div>
    </div>


  )
}

export default New