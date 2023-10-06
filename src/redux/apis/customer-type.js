import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const getCustomerTypesList = createAsyncThunk(
	'getCustomerTypesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "customerTypeId"
				}
			};
			const response = await httpService.post('Admin/GetCustomerTypesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getCustomerTypesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveCustomerType = createAsyncThunk(
	'saveCustomerType', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveCustomerType', data);
			return response.data;
		} catch (error) {
			console.log('error in saveCustomerType', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);