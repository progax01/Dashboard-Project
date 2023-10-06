import { createAsyncThunk } from '@reduxjs/toolkit';
import httpService from './httpService';

export const getRolesList = createAsyncThunk(
	'getRolesList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "roleId"
				}
			};
			if (data && data.isActive) {
				requestBody["isActive"] = data.isActive;
			}
			const response = await httpService.post('Profile/GetRolesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getRolesList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveRoleDetails = createAsyncThunk(
	'saveRoleDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Profile/SaveRoleDetails', data);
			return response.data;
		} catch (error) {
			console.log('error in saveRoleDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getReportingToList = createAsyncThunk(
	'getReportingToList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "id"
				}
			};
			const response = await httpService.post('Profile/GetReportingTosList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getReportingToList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveReportingToDetails = createAsyncThunk(
	'saveReportingToDetails', async (data, { rejectWithValue }) => {
		try {
			const response = await httpService.post('Profile/SaveReportingToDetails', data);
			return response.data;
		} catch (error) {
			console.log('error in saveReportingToDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const getEmployeeList = createAsyncThunk(
	'getEmployeeList', async (data, { rejectWithValue }) => {
		try {
			const requestBody = {
				pagination: {
					pageNo: 1,
					pageSize: 100,
					sortBy: "employeeId"
				}
			};
			const response = await httpService.post('Profile/GetEmployeesList', requestBody);
			return response.data;
		} catch (error) {
			console.log('error in getEmployeeList', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);

export const saveEmployeeDetails = createAsyncThunk(
	'saveEmployeeDetails', async (data, { rejectWithValue }) => {
		try {
			const reqParams = {
				parameter: JSON.stringify({
					// "EmployeeId": 0,
					"EmployeeName": data.employeeName,
					"EmployeeCode": data.employeeCode,
					"EmailId": data.emailId,
					"MobileNumber": data.mobileNumber,
					"RoleId": Number(data.roleId),
					"ReportingTo": Number(data.reportingTo),
					"Address": data.address,
					"StateId": Number(data.stateId),
					"RegionId": Number(data.regionId),
					"DistrictId": Number(data.districtId),
					"AreaId": Number(data.areaId),
					"Pincode": data.pincode,
					"DateOfBirth": data.dateOfBirth,
					"DateOfJoining": data.dateOfJoining,
					"EmergencyContactNumber": data.emergencyContactNumber,
					"BloodGroupId": Number(data.bloodGroup),
					"IsWebUser": data.isWebUser,
					"IsMobileUser": data.isMobileUser,
					"IsActive": data.isActive
				})
			}
			const formData = new FormData();
			if (data.imageUpload) {
				formData.append("profilePicture", data.imageUpload)	
			}
			const response = await httpService.post('Profile/SaveEmployeeDetails', formData, {
				params: reqParams,
				headers: {
					"Content-Type": "multipart/form-data",
				}
			});
			return response.data;
		} catch (error) {
			console.log('error in saveEmployeeDetails', error.response.data);
			return rejectWithValue(error.response.data);
		}
	}
);
