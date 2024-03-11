import React  from 'react';

import { Button } from 'reactstrap';

import ComponentCard from '../../../components/ComponentCard';

const Payments = () => {
  const payments = [
    {
      type: 'Credit Note',
      voucherNo: 'GOODS RETURN (TCINV/21-22/0020)',
      customerName: 'A-One Footarts Pvt. Ltd.',
      paymentDate: '17 Jun, 2021',
      amount: '520.07',
      description: 'Monthly Credit'
    },
    {
      type: 'Receipt',
      voucherNo: 'NEFT',
      customerName: 'Prince Enterprises',
      paymentDate: '21 Jun, 2021',
      amount: '119.842.00',
      description: 'Invoice Payment'
    },
    // ... more dummy payment objects
  ];

  const tableStyle = {
    // margin: 'auto', 
    // width: '60%',  
    // maxWidth: '1000px',
  };

  return (
    <ComponentCard
    title=""
    subtitle={
      <p>
        {/* Overview of the projects */}
      </p>
    }
  >
    <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }}>
           Add Payment
            </Button>
            <Button className='my-btn-color' style={{ marginBottom: '1rem',marginRight:'10px' }}>
           Import Payments
            </Button>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <table className="table" style={tableStyle}>
              <thead>
              <tr>
                <th>Type</th>
                <th>Voucher No</th>
                <th>Customer Name</th>
                <th>Payment Date</th>
                <th>Amount (₹)</th>
                <th>Desc</th>
                <th>Actions</th>
              </tr>
              </thead>
              <tbody>
              {payments.map((payment) => (
                  <tr key={payment.voucherNo}>
                    <td>{payment.type}</td>
                    <td>{payment.voucherNo}</td>
                    <td>{payment.customerName}</td>
                    <td>{payment.paymentDate}</td>
                    <td>{payment.amount}</td>
                    <td>{payment.description}</td>
                    <td>
                      {/* Replace with actual action components or icons */}
                       <button type="button" className="btn mybtncustomer btn-secondary btn-sm mr-2"><i className="bi bi-eye-fill my-eye-color" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
    </div>
   
  </ComponentCard>

   
   
  );
};

export default Payments;