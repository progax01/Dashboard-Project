import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "./httpService";

export const getCustomersList = createAsyncThunk(
	'getCustomersList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "customerId"
				}
			};
			const response = await httpService.post('Customer/GetCustomersList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getCustomersList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveCustomerDetails = createAsyncThunk(
	'saveCustomerDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Customer/SaveCustomerDetails', data);
			return response.data;
		} catch (error) {
			console.log('error in saveCustomerDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getCustomerDetails = createAsyncThunk(
	'getCustomerDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.get('Customer/GetCustomerDetails', {
				params: data
			});
			return response.data;
		} catch (error) {
			console.log('error in getCustomerDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
