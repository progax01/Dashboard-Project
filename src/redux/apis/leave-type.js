import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const getLeaveTypesList = createAsyncThunk(
	'getLeaveTypesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "leaveTypeId"
				}
			};
			const response = await httpService.post('Admin/GetLeaveTypesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getLeaveTypesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveLeaveType = createAsyncThunk(
	'saveLeaveType', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveLeaveType', data);
			return response.data;
		} catch (error) {
			console.log('error in saveLeaveType', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);