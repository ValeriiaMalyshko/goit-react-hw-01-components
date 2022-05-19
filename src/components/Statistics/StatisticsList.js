import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function StatisticsList({ stats }) {
  return (
    <section className={s.statistics}>
      {/* <h2 className={s.title}>Upload stats</h2> */}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <Statistics key={id} label={label} percentage={percentage} />
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
