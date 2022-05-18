import Transaction from './Transaction';
import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function TransactionHistory({ elements }) {
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.head}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {elements.map(element => (
          <Transaction
            key={element.id}
            type={element.type}
            amount={element.amount}
            currency={element.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
