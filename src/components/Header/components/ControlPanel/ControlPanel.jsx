import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Icon, Button } from '../../../../components';
import { ROLE } from '../../../../constants';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';
import { checkAccess } from '../../../../utils';

import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const UserName = styled.div`
	font-size: 18px;
	font-weight: bold;
`;

// eslint-disable-next-line react/prop-types
const ControlPanelConteiner = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	const onLogout = () => {
		dispatch(logout(session));
		sessionStorage.removeItem('userData');
	};

	const isAdmin = checkAccess([ROLE.ADMIN], roleId);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button style={{ padding: '10px' }}>
						<Link to="/login">Войти</Link>
					</Button>
				) : (
					<>
						<UserName>{login}</UserName>

						<Icon
							to="/"
							id="fa-sign-out"
							margin="0 0 0 10px"
							onClick={onLogout}
						/>
					</>
				)}
			</RightAligned>
			<RightAligned>
				<Icon
					to="/"
					id="fa-backward"
					margin="10px 0 0 0"
					onClick={() => navigate(-1)}
				/>

				{isAdmin ? (
					<>
						<Link to="/post">
							<Icon id="fa-file-text-o" margin="10px 0 0 17px" />
						</Link>
						<Link to="/users">
							<Icon id="fa-users" margin="10px 0 0 17px" />
						</Link>
					</>
				) : (
					''
				)}
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelConteiner)``;
