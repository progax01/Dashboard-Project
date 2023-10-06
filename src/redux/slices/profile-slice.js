import { createSlice } from '@reduxjs/toolkit';
import { getEmployeeList, getReportingToList, getRolesList } from '../apis';

const initialState = {
	roles: [],
	reportingToList: [],
	employees: []
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getRolesList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.roles = response.data;
			}
		});
		builder.addCase(getReportingToList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.reportingToList = response.data;
			}
		});
		builder.addCase(getEmployeeList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.employees = response.data;
			}
		});
	}
})

export default profileSlice.reducer