import axios from 'axios';

const httpService = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	timeout: 30000,
	headers: {
		"Content-Type": 'application/json; charset=utf-8',
		'Accept': 'application/json'
	}
});

export default httpService;