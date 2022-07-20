import axios from 'axios';

export default async function handler(req, res) {
	const { data } = await axios.get(
		'https://jsonplaceholder.typicode.com/posts'
	);
	res.status(200).json(data.slice(0, 5));
}
