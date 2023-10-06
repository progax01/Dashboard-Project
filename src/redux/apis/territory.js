import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const getStatesList = createAsyncThunk(
	'getStatesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "stateId"
				}
			};

			if (data && data.stateName) {
				requestBody["stateName"] = data.stateName;
			}
			const response = await httpService.post('ManageTerritory/GetStatesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getStatesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveState = createAsyncThunk(
	'saveState', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('ManageTerritory/SaveState', data);
			return response.data;
		} catch (error) {
			console.log('error in saveState', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getRegionsList = createAsyncThunk(
	'getRegionsList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "regionId"
				}
			};
			if (data && data.regionName) {
				requestBody["regionName"] = data.regionName;
			}
			const response = await httpService.post('ManageTerritory/GetRegionsList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getRegionsList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveRegion = createAsyncThunk(
	'saveRegion', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('ManageTerritory/SaveRegion', data);
			return response.data;
		} catch (error) {
			console.log('error in saveRegion', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getDistricstList = createAsyncThunk(
	'getDistricstList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "districtId"
				}
			};
			if (data && data.districtName) {
				requestBody["districtName"] = data.districtName;
			}
			const response = await httpService.post('ManageTerritory/GetDistrictsList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getDistricstList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveDistrict = createAsyncThunk(
	'saveDistrict', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('ManageTerritory/SaveDistrict', data);
			return response.data;
		} catch (error) {
			console.log('error in saveDistrict', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getAreasList = createAsyncThunk(
	'getAreasList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "areaId"
				}
			};
			if (data && data.areaName) {
				requestBody["areaName"] = data.areaName;
			}
			const response = await httpService.post('ManageTerritory/GetAreasList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getAreasList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveArea = createAsyncThunk(
	'saveArea', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('ManageTerritory/SaveArea', data);
			return response.data;
		} catch (error) {
			console.log('error in saveArea', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
