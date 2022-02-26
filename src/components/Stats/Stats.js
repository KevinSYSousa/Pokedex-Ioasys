import React from 'react';
import {
	StyledStatsContainer,
	StyledTitle,
	StyledValue,
	StyledStatusBarContainer,
	StyledStatusValue,
	StyledStatusBar,
	StyledLine,
} from './styles';

const Stats = ({nightMode, stat, color}) => {
	const totalStats = 250;
	const statName = (name) => {
		switch (name) {
			case 'hp':
				return 'HP';
			case 'attack':
				return 'ATK';
			case 'defense':
				return 'DEF';
			case 'special-attack':
				return 'SATK';
			case 'special-defense':
				return 'SDEF';
			case 'speed':
				return 'SPO';
			default:
				return;
		}
	};

	return (
		<>
			<StyledStatsContainer>
				<StyledLine />
				<StyledTitle color={color}>{statName(stat.stat.name)}</StyledTitle>
				<StyledValue nightMode={nightMode}>
					{('000' + stat.base_stat).slice(-3)}
				</StyledValue>
				<StyledStatusBarContainer>
					<StyledStatusValue
						stats={`${(stat.base_stat / totalStats) * 100}%`}
						color={color}
					/>
					<StyledStatusBar color={color} />
				</StyledStatusBarContainer>
			</StyledStatsContainer>
		</>
	);
};

export default Stats;
