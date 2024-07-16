import React from 'react';
import CustomerTable from '../components/CustomerTable.js';

const HomePage = () => {
  return (
    <div>
      <h1 style={{textAlign:"center",margin:"20px",color:"#007bff"}}>Customer Transactions</h1>
      <CustomerTable />
    </div>
  );
};

export default HomePage;
