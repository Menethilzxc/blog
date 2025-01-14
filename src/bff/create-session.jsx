import { removeComment } from './session';
import { ROLE } from '../constants';

export const createSession = (roleId) => {
	let session = {
		logout() {
			// разлогин пользователя. Удаление ключей (logout, removeComment и тд)
			Object.keys(session).forEach((key) => {
				delete session[key];
			});
		},
	};

	switch (roleId) {
		case ROLE.ADMIN: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.MODERATOR: {
			session.removeComment = removeComment;
			break;
		}
		case ROLE.READER: {
			break;
		}
		default:
		//ничего не делать
	}

	return session;
};
