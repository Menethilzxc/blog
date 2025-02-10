import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import { openModal, removePostAsync, CLOSE_MODAL } from '../../../../actions';
import { useServerRequest } from '../../../../hooks';

import styled from 'styled-components';

// eslint-disable-next-line react/prop-types
const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const requestServer = useServerRequest();

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => {
						navigate('/');
					});
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="publised-at">
				{publishedAt && (
					<Icon
						inactive={true}
						id="fa-calendar-o"
						margin="0 7px 0 0 "
						size="18px"
					/>
				)}
				{publishedAt}
			</div>
			<div className="buttons-panel">
				{editButton}
				{publishedAt && (
					<Icon
						id="fa-trash-o"
						margin="0 0 0 10px"
						size="21px"
						onClick={() => onPostRemove(id)}
					/>
				)}
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
