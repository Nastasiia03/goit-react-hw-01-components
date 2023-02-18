import PropTypes from "prop-types";
import { getRandomHexColor, Item, Label, List, Percentage, Section, Title } from "./statistics.styled";

export const Statistics = ({title, stats}) => {
    return (
        <Section>
            {title && (<Title>{title}</Title>)}
        <List>
            {stats.map(stat => (<Item key={stat.id} style={{backgroundColor: getRandomHexColor()}}>
                <Label>{stat.label}</Label>
                <Percentage>{stat.percentage}%</Percentage>
            </Item>))}
            </List>
            </Section>
)
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired,
}