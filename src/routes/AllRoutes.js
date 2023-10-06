import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import Login from "../pages/Login.page";
import Admin from "../pages/Admin.page";
import NotFound from "../pages/NotFound.page";
import Protected from './Protected';

const AllRoutes = () => {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route
				path="/admin/*"
				element={
					<Protected isLoggedIn={isLoggedIn}>
						<Admin />
					</Protected>
				}
			/>
			<Route path="/*" element={<NotFound />} />
		</Routes>
	);
};

export default AllRoutes;
