import { combineReducers } from "@reduxjs/toolkit";
import administratorSlice from "./slices/administrator-slice";
import authSlice from './slices/auth-slice';
import customerSlice from "./slices/customer-slice";
import masterDataSlice from "./slices/masterData-slice";
import territorySlice from "./slices/territory-slice";
import profileSlice from "./slices/profile-slice";
import visitSlice from "./slices/visit-slice";
import designSlice from "./slices/design-slice";

export default combineReducers({
	auth: authSlice,
	administrator: administratorSlice,
	customer: customerSlice,
	territory: territorySlice,
	masterData: masterDataSlice,
	profile: profileSlice,
	visit: visitSlice,
	design: designSlice
});
