import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import Logo from "./assets/logo.svg";
import { FaUserAlt } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

import CustomTextField1 from "./components/CustomTextField1.component";
// import CustomCheckbox1 from "./components/CustomCheckBox1.component";
import CustomButton1 from "./components/CustomButton1.component";

import { login } from "../redux/apis/auth";

function Login() {
    const dispatch = useDispatch();
    const { loginProgress, isLoggedIn } = useSelector((state) => state.auth);
    const [formValues, setFormValues] = useState({ mobileNo: "", password: "" });

    const onChangeForm = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value,
        });
    };

    const onLoginRequest = () => {
        // let regEmail =
        //     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // if (!regEmail.test(formValues.email)) {
        //     return toast.error("Please enter valid email");
        // }
		if (formValues.mobileNo.trim() === "") {
            return toast.error("Please enter mobile");
        }
        if (formValues.password.trim() === "") {
            return toast.error("Please enter password");
        }
        const requestData = {
            mobileNo: formValues.mobileNo,
            password: formValues.password,
            remember: true,
        };
        dispatch(login(requestData));
    };

    if (isLoggedIn) {
        return <Navigate to="/admin" replace />;
    }

    return (
        <div className="flex items-center justify-end min-h-screen bg-cover bg-top bg-no-repeat  bg-[url('./pages/assets/bgimg.jpg')]">
            {/* MAIN CONTAINER */}
            <div className="rounded-lg flex flex-col md:flex-row items-stretch overflow-hidden justify-center m-6 w-[28rem] h-[30rem] custom-shadow-1 border-4 border-solid border-[rgba(255, 255, 255, 0.40)]">
                <div className=""></div>
                <div className="p-4  bg-bglogin  bg-fit grow pt-[20%]">
                    <h1 className="heading    text-white">Login</h1>
                    <p className="mt-2 text-xs  text-white"></p>
                    <div className="mt-10 pt-5">
                        <CustomTextField1
                            type="text"
                            icon={<FaUserAlt className="text-gray-700" />}
                            placeholder="Username"
                            label={"Username"}
                            name="mobileNo"
                            onChange={onChangeForm}
                        />
                    </div>
                    <div className="mt-4 pt-5">
                        <CustomTextField1
                            label={"Username"}
                            type="password"
                            icon={<IoMdLock className="text-gray-700" />}
							name="password"
                            placeholder="Password"
                            onChange={onChangeForm}
                        />
                    </div>

                    <div className="mt-5 pt-5">
                        <div className="w-full min-h-full text-base font-semibold capitalize">
                            <CustomButton1
                                onClick={onLoginRequest}
                                label="Login"
                                className={`bg-white text-first font-semibold w-full`}
                                loading={loginProgress}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
