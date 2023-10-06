import { createSlice } from '@reduxjs/toolkit';
import { getBaseDesignsList, getBloodGroupList, getBrandsList, getCategoryList, getCollectionMasterList, getCustomerTypesList, getDesignTypesList, getProductsList, getReferencesList, getSeriesList, getSizesList } from '../apis';
import { getLeaveTypesList } from '../apis/leave-type';

const initialState = {
	products: [],
	loadingProducts: false,
	brands: [],
	categories: [],
	sizes: [],
	designTypes: [],
	series: [],
	baseDesigns: [],
	leaveTypes: [],
	customerTypes: [],
	references: [],
	bloodGroups: [],
	collections: []
}

const administratorSlice = createSlice({
	name: 'administrator',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getProductsList.pending, (state) => {
			state.loadingProducts = true;
		});
		builder.addCase(getProductsList.fulfilled, (state, action) => {
			const response = action.payload;
			state.loadingProducts = false;
			if (response.isSuccess) {
				state.products = response.data;
			}
		});
		builder.addCase(getProductsList.rejected, (state, action) => {
			state.loadingProducts = false;
		});
		builder.addCase(getBrandsList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.brands = response.data;
			}
		});
		builder.addCase(getCategoryList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.categories = response.data;
			}
		});
		builder.addCase(getCollectionMasterList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.collections = response.data;
			}
		});
		builder.addCase(getSizesList.fulfilled, (state, action) => {
			const response = action.payload;
			// console.log(response);
			if (response.isSuccess) {
				state.sizes = response.data;
			}
		});
		builder.addCase(getDesignTypesList.fulfilled, (state, action) => {
			const response = action.payload;
			// console.log(response);
			if (response.isSuccess) {
				state.designTypes = response.data;
			}
		});
		builder.addCase(getSeriesList.fulfilled, (state, action) => {
			const response = action.payload;
			// console.log(response);
			if (response.isSuccess) {
				state.series = response.data;
			}
		});
		builder.addCase(getBaseDesignsList.fulfilled, (state, action) => {
			const response = action.payload;
			// console.log(response);
			if (response.isSuccess) {
				state.baseDesigns = response.data;
			}
		});
		builder.addCase(getLeaveTypesList.fulfilled, (state, action) => {
			const response = action.payload;
			// console.log(response);
			if (response.isSuccess) {
				state.leaveTypes = response.data;
			}
		});
		builder.addCase(getCustomerTypesList.fulfilled, (state, action) => {
			const response = action.payload;
			// console.log(response);
			if (response.isSuccess) {
				state.customerTypes = response.data;
			}
		});
		builder.addCase(getReferencesList.fulfilled, (state, action) => {
			const response = action.payload;
			// console.log(response);
			if (response.isSuccess) {
				state.references = response.data;
			}
		});
		builder.addCase(getBloodGroupList.fulfilled, (state, action) => {
			const response = action.payload;
			// console.log(response);
			if (response.isSuccess) {
				state.bloodGroups = response.data;
			}
		});
	}
})

// Action creators are generated for each case reducer function
// export const { logout } = administratorSlice.actions

export default administratorSlice.reducer