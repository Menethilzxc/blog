import { generateDate } from './genetate-date';

export const addUser = (login, password) =>
	fetch('http://localhost:3005/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			// если свойство и значение совпадает (login: login, password: password), то можно записать таким образом
			login,
			password,
			registed_at: generateDate(),
			role_id: 2,
		}),
	});
