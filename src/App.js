import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from "./routes/AllRoutes";

function App() {
    return (
        <section className="app bg-white  ">
            <AllRoutes />
			<ToastContainer
				position="top-right"
				autoClose={3000}
				closeOnClick
				rtl={false}
				theme="colored"
				hideProgressBar
			/>
        </section>
    );
}

export default App;
