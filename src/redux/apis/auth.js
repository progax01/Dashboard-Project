import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const login = createAsyncThunk(
	'login', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('Login/Login', data);
			//console.log('responseof LogIn', response.data);
			return response.data;
		} catch (error) {
			console.log('error in login', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);