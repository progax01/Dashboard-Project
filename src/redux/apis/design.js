import { createAsyncThunk } from "@reduxjs/toolkit";
import httpService from "./httpService";

export const getDesignesList = createAsyncThunk(
	'getDesignesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "designId"
				}
			};
			const response = await httpService.post('ManageDesign/GetDesignesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getDesignesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveDesignDetails = createAsyncThunk(
	'saveDesignDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('ManageDesign/SaveDesignDetails', data);
			return response.data;
		} catch (error) {
			console.log('error in saveDesignDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
