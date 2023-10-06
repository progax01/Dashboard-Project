import { createSlice } from '@reduxjs/toolkit';
import { getDesignesList } from '../apis/design';

const initialState = {
	loadingDesigns: false,
	designs: []
}

const designSlice = createSlice({
	name: 'design',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getDesignesList.pending, (state, action) => {
			state.loadingDesigns = true;
		});
		builder.addCase(getDesignesList.fulfilled, (state, action) => {
			const response = action.payload;
			state.loadingDesigns = false;
			if (response.isSuccess) {
				state.designs = response.data;
			}
		});
		builder.addCase(getDesignesList.rejected, (state, action) => {
			state.loadingDesigns = false;
		});
	}
});

export default designSlice.reducer;
