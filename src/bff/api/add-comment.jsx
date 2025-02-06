import { generateDate } from '../utils';

export const addComment = (userId, postId, content) =>
	fetch('http://localhost:3005/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			// если свойство и значение совпадает (login: login, password: password), то можно записать таким образом
			author_id: userId,
			post_id: postId,
			published_at: generateDate(),
			content,
		}),
	});
