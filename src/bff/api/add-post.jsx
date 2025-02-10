import { generateDate } from '../utils';

export const addPost = ({ imageUrl, title, content }) =>
	fetch('http://localhost:3005/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			// если свойство и значение совпадает (login: login, password: password), то можно записать таким образом
			title,
			image_url: imageUrl,
			content,
			published_at: generateDate(),
		}),
	}).then((createdPost) => createdPost.json());
