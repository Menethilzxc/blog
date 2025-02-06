export const addSession = (hash, user) =>
	fetch('http://localhost:3005/sessions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			// если свойство и значение совпадает (login: login, password: password), то можно записать таким образом
			hash,
			user,
		}),
	});
