import { Icon } from '../../../../components';

import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
	return (
		<div className={className}>
			<div className="publised-at">
				<Icon id="fa-calendar-o" margin="0 7px 0 0 " size="18px" />
				{publishedAt}
			</div>
			<div className="buttons-panel">
				{editButton}
				<Icon id="fa-trash-o" size="21px" />
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};
	font-size: 18px;

	& .publised-at {
		display: flex;
		align-items: center;
		height: 44px;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons-panel {
		display: flex;
	}
`;
