import { useState } from 'react';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import styled from 'styled-components';
import { useServerRequest } from '../../../../hooks';

// eslint-disable-next-line react/prop-types
const UserRowContainer = ({
	// eslint-disable-next-line react/prop-types
	className,
	// eslint-disable-next-line react/prop-types
	id,
	// eslint-disable-next-line react/prop-types
	login,
	// eslint-disable-next-line react/prop-types
	registedAt,
	// eslint-disable-next-line react/prop-types
	roleId: userRoleId,
	// eslint-disable-next-line react/prop-types
	roles,
	// eslint-disable-next-line react/prop-types
	onUserRemove,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId);
	const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);
	const requestServer = useServerRequest();

	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};

	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUserRole', userId, newUserRoleId).then(() => {
			setInitialRoleId(newUserRoleId);
		});
	};

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;

	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registedAt}</div>
				<div className="role-column">
					<select
						value={selectedRoleId}
						onChange={onRoleChange}
						className="cursor-pointer bg-gray-300"
					>
						{roles
							.filter(({ id }) => id !== '3')
							.map(({ id: roleId, name: roleName }) => (
								<option key={roleId} value={roleId}>
									{roleName}
								</option>
							))}
					</select>
					<Icon
						id="fa-floppy-o"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
						onClick={() => onRoleSave(id, selectedRoleId)}
					/>
				</div>
			</TableRow>
			<Icon id="fa-trash-o" margin={'0 0 0 10px'} onClick={onUserRemove} />
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 10px;

	& select {
		font-size: 16px;
	}
`;
