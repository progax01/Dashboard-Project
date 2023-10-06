import { createSlice } from '@reduxjs/toolkit';
import { getCustomerDetails, getCustomersList } from '../apis/customer';

const initialState = {
	customers: [],
	customerDetails: {}
}

const customerSlice = createSlice({
	name: 'customer',
	initialState,
	reducers: {
		attachContactDetail: (state, action) => {
			if (state.customerDetails && Object.keys(state.customerDetails).length > 0) {
				const customerDetails = state.customerDetails;
				customerDetails.contactDetails.push(action.payload);
				state.customerDetails = customerDetails;
			}
		},
		attachAddressDetail: (state, action) => {
			if (state.customerDetails && Object.keys(state.customerDetails).length > 0) {
				const customerDetails = state.customerDetails;
				customerDetails.addressDetails.push(action.payload);
				state.customerDetails = customerDetails;
			}
		}
	},
	extraReducers: (builder) => {
		builder.addCase(getCustomersList.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.customers = response.data;
			}
		});
		builder.addCase(getCustomerDetails.fulfilled, (state, action) => {
			const response = action.payload;
			if (response.isSuccess) {
				state.customerDetails = response.data;
			}
		});
	}
});

export const { attachContactDetail, attachAddressDetail } = customerSlice.actions
export default customerSlice.reducer;
