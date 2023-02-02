import ActionStyle from './TransactionHistory.module.css';

export const Transaction = ({ action }) => {
    
    return (
        <table className={ActionStyle.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
          
  </thead>
        
  <tbody>
        {action.map(({ type, amount, currency, id }) => (
            
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
    
        ))
  
}
  </tbody>
        
  </table>

    )

} 