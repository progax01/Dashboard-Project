import { createSlice } from '@reduxjs/toolkit';
import {
	getAreaForSelectList,
	getCustomersForSelectList,
	getCustomerTypesForSelectList,
	getDistrictForSelectList,
	getRegionsForSelectList,
	getReportingToEmpListForSelectList,
	getStatesForSelectList,
	getStatusMasterForSelectList
} from '../apis';

const initialState = {
	states: [],
	regions: [],
	districts: [],
	areas: [],
	customerTypes: [],
	customers: [],
	statusMaster: [],
	reportingToEmpList: []
}

const masterDataSlice = createSlice({
	name: 'masterData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getStatesForSelectList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.states = response.data;
			}
		});
		builder.addCase(getRegionsForSelectList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.regions = response.data;
			}
		});
		builder.addCase(getDistrictForSelectList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.districts = response.data;
			}
		});
		builder.addCase(getAreaForSelectList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.areas = response.data;
			}
		});
		builder.addCase(getCustomerTypesForSelectList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.customerTypes = response.data;
			}
		});
		builder.addCase(getCustomersForSelectList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.customers = response.data;
			}
		});
		builder.addCase(getStatusMasterForSelectList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.statusMaster = response.data;
			}
		});
		builder.addCase(getReportingToEmpListForSelectList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.reportingToEmpList = response.data;
			}
		});
	}
});

export default masterDataSlice.reducer;
