import { createSlice } from '@reduxjs/toolkit';
import { getAreasList, getDistricstList, getRegionsList, getStatesList } from '../apis/territory';

const initialState = {
	states: [],
	regions: [],
	districts: [],
	areas: []
}

const masterDataSlice = createSlice({
	name: 'masterData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getStatesList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.states = response.data;
			}
		});
		builder.addCase(getRegionsList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.regions = response.data;
			}
		});
		builder.addCase(getDistricstList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.districts = response.data;
			}
		});
		builder.addCase(getAreasList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.areas = response.data;
			}
		});
	}
});

export default masterDataSlice.reducer;
