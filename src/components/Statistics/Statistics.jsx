import {
  StatsItem,
  StatsTitle,
  StatsSection,
  StatsList,
} from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      <StatsTitle>{title}</StatsTitle>

      <StatsList>
        {stats.map(item => {
          return (
            <StatsItem key={item.id} label={item.label.slice(1)}>
              <span>{item.label}</span>
              <span>{item.percentage}</span>
            </StatsItem>
          );
        })}
      </StatsList>
    </StatsSection>
  );
};

Statistics.PropTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
export default Statistics;
