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
        {elements.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
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
