import axios from 'axios';
import { SERVER_URL } from '../constants/api';

export const getTodoList = async () => {
	const res = await axios.get(`${SERVER_URL}/todos`);
	return res.data;
};
