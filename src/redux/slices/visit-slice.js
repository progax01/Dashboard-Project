import { createSlice } from '@reduxjs/toolkit';
import { getVisitsList } from '../apis';

const initialState = {
	loadingVisits: false,
	visits: [],
	nextVisitId: ""
}

const visitSlice = createSlice({
	name: 'visit',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getVisitsList.pending, (state, action) => {
			state.loadingVisits = true;
		});
		builder.addCase(getVisitsList.fulfilled, (state, action) => {
			const response = action.payload;
			state.loadingVisits = false;
			if (response.isSuccess) {
				state.visits = response.data;
				if (response.data && response.data.length > 0) {
					const lastVisit = response.data.pop();
					state.nextVisitId = `V00${lastVisit.visitId + 1}`;
				}
			} else {
				state.nextVisitId = "V001";
			}
		});
		builder.addCase(getVisitsList.rejected, (state, action) => {
			state.loadingVisits = false;
		});
	}
});

export default visitSlice.reducer;
