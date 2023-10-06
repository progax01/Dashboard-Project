import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const getBloodGroupList = createAsyncThunk(
	'getBloodGroupList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "bloodGroupId"
				}
			};
			const response = await httpService.post('Admin/GetBloodGroupList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getBloodGroupList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveBloodGroupDetails = createAsyncThunk(
	'saveBloodGroupDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveBloodGroupDetails', data);
			return response.data;
		} catch (error) {
			console.log('error in saveBloodGroupDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);