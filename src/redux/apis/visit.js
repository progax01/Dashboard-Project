import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "./httpService";

export const getVisitsList = createAsyncThunk(
	'getVisitsList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "visitId"
				}
			};
			const response = await httpService.post('Visit/GetVisitsList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getVisitsList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveVisitDetails = createAsyncThunk(
	'saveVisitDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Visit/SaveVisitDetails', data);
			return response.data;
		} catch (error) {
			console.log('error in saveVisitDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
