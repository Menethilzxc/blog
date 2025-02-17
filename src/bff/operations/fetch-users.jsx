import { sessions } from '../sessions';
import { getUsers } from '../api';
import { ROLE } from '../constants';

export const fetchUsers = async (hash) => {
	const accessRoles = [ROLE.ADMIN];

	const access = await sessions.access(hash, accessRoles);

	if (!access || accessRoles !== ROLE.ADMIN) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	const users = await getUsers();

	return {
		error: null,
		res: users,
	};
};
