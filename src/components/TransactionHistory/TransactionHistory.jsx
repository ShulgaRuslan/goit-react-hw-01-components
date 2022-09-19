import  css from 'components/TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = (items) => {
    return (
        <table className={css['transaction-history']}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
{/* _________________________________________________________________-- */}
  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
    )
}