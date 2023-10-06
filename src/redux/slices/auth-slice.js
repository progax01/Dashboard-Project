import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { login } from '../apis/auth';

const initialState = {
	isLoggedIn: false,
	loginProgress: false,
	user: undefined,
	token: undefined
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.isLoggedIn = false;
			state.user = undefined;
			state.token = undefined;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(login.pending, (state) => {
			state.loginProgress = true;
		});
		builder.addCase(login.fulfilled, (state, action) => {
			const response = action.payload;
			state.loginProgress = false;
			if (response.isSuccess) {
				state.isLoggedIn = true;
				state.token = response.data.token;
				const userDetails = response.data;
				delete userDetails.token;
				state.user = userDetails;
			} else {
				toast.error(response.message);
			}
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loginProgress = false;
			state.isLoggedIn = false;
			toast.error(action.payload.message);
		});
	}
})

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer