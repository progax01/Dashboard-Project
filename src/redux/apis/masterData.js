import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const getStatesForSelectList = createAsyncThunk(
	'getStatesForSelectList', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('MasterData/GetStatesForSelectList', { isActive: true });
			return response.data;
		} catch (error) {
			console.log('error in getStatesForSelectList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getRegionsForSelectList = createAsyncThunk(
	'getRegionsForSelectList', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('MasterData/GetRegionForSelectList', data);
			return response.data;
		} catch (error) {
			console.log('error in getRegionsForSelectList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getDistrictForSelectList = createAsyncThunk(
	'getDistrictForSelectList', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('MasterData/GetDistrictForSelectList', data);
			return response.data;
		} catch (error) {
			console.log('error in getDistrictForSelectList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getAreaForSelectList = createAsyncThunk(
	'getAreaForSelectList', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('MasterData/GetAreaForSelectList', data);
			return response.data;
		} catch (error) {
			console.log('error in getAreaForSelectList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getCustomerTypesForSelectList = createAsyncThunk(
	'getCustomerTypesForSelectList', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('MasterData/GetCustomerTypesForSelectList', { isActive: true });
			return response.data;
		} catch (error) {
			console.log('error in getCustomerTypesForSelectList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getCustomersForSelectList = createAsyncThunk(
	'getCustomersForSelectList', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('MasterData/GetCustomersForSelectList', data);
			return response.data;
		} catch (error) {
			console.log('error in getCustomersForSelectList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getStatusMasterForSelectList = createAsyncThunk(
	'getStatusMasterForSelectList', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('MasterData/GetStatusMasterForSelectList', data);
			return response.data;
		} catch (error) {
			console.log('error in getStatusMasterForSelectList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getReportingToEmpListForSelectList = createAsyncThunk(
	'getReportingToEmpListForSelectList', async (data, { rejectWithValue }) => {
		//console.log('requestBody of LogIn', data);
		try {
			const response = await httpService.post('MasterData/GetReportingToEmpListForSelectList', data);
			return response.data;
		} catch (error) {
			console.log('error in getReportingToEmpListForSelectList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
