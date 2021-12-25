import PropTypes from 'prop-types';
import { Section, StatList, StatItem } from './Statistics.styled';

export default function Statistics({ title, stats }) {
  return (
    <Section>
      {title && <h2>{title}</h2>}

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id} Type={stats}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
