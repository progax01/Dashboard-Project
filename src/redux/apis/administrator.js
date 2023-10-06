import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const getProductsList = createAsyncThunk(
	'getProductsList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "productId"
				}
			};
			const response = await httpService.post('Admin/GetProductsList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getProductsList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveProduct = createAsyncThunk(
	'saveProduct', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveProduct', data);
			return response.data;
		} catch (error) {
			console.log('error in saveProduct', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getBrandsList = createAsyncThunk(
	'getBrandsList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "brandId"
				}
			};
			const response = await httpService.post('Admin/GetBrandsList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getBrandList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveBrand = createAsyncThunk(
	'saveBrand', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveBrand', data);
			return response.data;
		} catch (error) {
			console.log('error in saveBrand', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveCategory = createAsyncThunk(
	'saveCategory', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveCategory', data);
			return response.data;
		} catch (error) {
			console.log('error in saveCategory', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getCategoryList = createAsyncThunk(
	'getCategoryList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "categoryId"
				}
			};
			const response = await httpService.post('Admin/GetCategorysList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getCategoryList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveCollectionDetails = createAsyncThunk(
	'saveCollectionDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveCollectionDetails', data);
			return response.data;
		} catch (error) {
			console.log('error in saveCollectionDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getCollectionMasterList = createAsyncThunk(
	'getCollectionMasterList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "collectionId"
				}
			};
			const response = await httpService.post('Admin/GetCollectionMasterList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getCollectionMasterList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getSizesList = createAsyncThunk(
	'getSizesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "sizeId"
				}
			};
			const response = await httpService.post('Admin/GetSizesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getSizesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveSize = createAsyncThunk(
	'saveSize', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveSize', data);
			return response.data;
		} catch (error) {
			console.log('error in saveSize', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getDesignTypesList = createAsyncThunk(
	'getDesignTypesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "designTypeId"
				}
			};
			const response = await httpService.post('Admin/GetDesignTypesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getDesignTypesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveDesignType = createAsyncThunk(
	'saveDesignType', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveDesignType', data);
			return response.data;
		} catch (error) {
			console.log('error in saveDesignType', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getSeriesList = createAsyncThunk(
	'getSeriesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "seriesId"
				}
			};
			const response = await httpService.post('Admin/GetSeriesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getSeriesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveSeries = createAsyncThunk(
	'saveSeries', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveSeries', data);
			return response.data;
		} catch (error) {
			console.log('error in saveSeries', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getBaseDesignsList = createAsyncThunk(
	'getBaseDesignsList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "baseDesignId"
				}
			};
			const response = await httpService.post('Admin/GetBaseDesignsList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getBaseDesignsList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveBaseDesign = createAsyncThunk(
	'saveBaseDesign', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Admin/SaveBaseDesign', data);
			return response.data;
		} catch (error) {
			console.log('error in saveBaseDesign', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
