import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function StatisticsList({ elements }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>Upload stats</h2>
      <ul className={s.list}>
        {elements.map(element => (
          <Statistics
            key={element.id}
            label={element.label}
            percentage={element.percentage}
          />
        ))}
      </ul>
    </section>
  );
}

StatisticsList.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
