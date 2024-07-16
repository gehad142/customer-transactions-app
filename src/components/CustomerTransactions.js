import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTransactions } from '../services/api.js';
import TransactionGraph from './TransactionGraph.js';
import { getTotalTransactionAmount } from '../utils/utils.js';

const CustomerTransactions = () => {
  const { customerId } = useParams();
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTransactions();
      setTransactions(response.data.filter(t => t.customer_id === parseInt(customerId)));
    };
    fetchData();
  }, [customerId]);

 const totalAmount = getTotalTransactionAmount(transactions, parseInt(customerId))
  return (
    <div className="container" >
      <h2 style={{textAlign:"center",margin:"20px",color:"#007bff"}}>Transactions</h2>
      <p>Total Transaction Amount: {totalAmount}</p>
      <table className="table table-bordered" >
        <thead>
          <tr>
            <th style={{color:"#007bff"}}>Date</th>
            <th style={{color:"#007bff"}}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TransactionGraph transactions={transactions} />
    </div>
  );
};

export default CustomerTransactions;
