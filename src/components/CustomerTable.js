import React, { useState, useEffect } from 'react';
import { getCustomers, getTransactions } from '../services/api.js';
import { Link } from 'react-router-dom';
import { getTotalTransactionAmount } from '../utils/utils.js';

const CustomerTable = () => {
  const [customers, setCustomers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerResponse = await getCustomers();
        const transactionResponse = await getTransactions();
        setCustomers(customerResponse.data);
        setTransactions(transactionResponse.data);
        
        // Debugging: Log the fetched data
        console.log('Fetched Customers:', customerResponse.data);
        console.log('Fetched Transactions:', transactionResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container" style={{background: "#007bff",padding:"20px", background: "linear-gradient(to right, #0062E6, #33AEFF)",
      width: "100%",
      
      overflow: "hidden",}}>
      <input
        type="text"
        placeholder="Filter by customer name"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-3"
      />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Total Transaction Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map(customer => {
            const totalAmount = getTotalTransactionAmount(transactions, parseInt(customer.id));
            
            // Debugging: Log the total amount calculation
            console.log(`Total Amount for ${customer.name} (ID: ${customer.id}):`, totalAmount);
            
            return (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{totalAmount}</td>
                <td>
                  <Link to={`/customer/${customer.id}`} className="btn btn-primary">
                    View Transactions
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
