import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const getReferencesList = createAsyncThunk(
	'getReferencesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "referenceId"
				}
			};
			if (data && data.isActive) {
				requestBody["isActive"] = data.isActive;
			}
			const response = await httpService.post('Reference/GetReferencesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getReferencesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveReferenceDetails = createAsyncThunk(
	'saveReferenceDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Reference/SaveReferenceDetails', data);
			return response.data;
		} catch (error) {
			console.log('error in saveReferenceDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
