import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css'
export function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ stats, title }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}
            <ul className={css['stat-List']}>
                {stats.map(({ id, label,percentage}) => (
                    <li className={css.item} key={id}
                    style={{ backgroundColor: randomHexColor() }}>
                        <span className={css.label}>{label}</span>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>))}
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id:PropTypes.string.isRequired,
            label:PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired,
        })
    )
}