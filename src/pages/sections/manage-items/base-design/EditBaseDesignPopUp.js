import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import PopUp from "../../../components/PopUp.componenet";
import CustomButton1 from "../../../components/CustomButton1.component";
import CustomTextField2 from "../../../components/CustomTextField2.component";
import CustomCheckBox2 from "../../../components/CustomCheckBox2.component";
import { getBaseDesignsList, saveBaseDesign } from "../../../../redux/apis";

export const EditBaseDesignPopUp = (props) => {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(true);
    const [baseDesignName, setBaseDesignName] = useState("");
    const [loading, setLoading] = useState(false);
    const isView = props.isView;

    useEffect(() => {
        if (props.isVisible) {
            setBaseDesignName(props.isVisible.baseDesignName);
            setIsActive(props.isVisible.isActive);
        }
    }, [props.isVisible]);

    if (!props.isVisible) {
        return null;
    }

    const onChangeText = (e) => {
        setBaseDesignName(e.target.value);
    };

    const onSave = async () => {
        if (baseDesignName === "" || baseDesignName === undefined || baseDesignName === null) {
            toast.error("Please enter base design name");
            return;
        }
        setLoading(true);
        const baseDesignId = props.isVisible.baseDesignId;
        const response = await dispatch(saveBaseDesign({ baseDesignId, baseDesignName, isActive }));
        setLoading(false);
        console.log("saveBaseDesign response", response);
        if (!response.error) {
            if (response.payload.isSuccess) {
                toast.success(response.payload.message);
                props.onCancel(); // Close PopUp
                dispatch(getBaseDesignsList()); // Refresh base design list
            } else {
                toast.error(response.payload.message);
            }
        } else {
            toast.error(response.payload.message);
        }
    };

    return (
        <PopUp>
            <div className="pb-10 bg-white rounded-lg">
                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                    <h1 className="text-xl font-weight-[300]">
                        {isView ? "View Design Name" : "Edit Design Name"}
                    </h1>
                    <div className="flex items-center text-sm"></div>
                </div>

                <div className="p-2 mx-auto">
                    <table className="max-w-full popup-table">
                        <tbody>
                            <tr>
                                <td>
                                    <CustomTextField2
                                        value={baseDesignName}
                                        label={"Design Name"}
                                        placeholder={"Enter"}
                                        onChange={onChangeText}
                                        disabled={isView}
                                    />
                                </td>
                                <td>
                                    <CustomCheckBox2
                                        label={"Status"}
                                        state={isActive}
                                        setState={setIsActive}
                                        disabled={isView}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-center gap-5">
                    {!isView && (
                        <div>
                            <CustomButton1
                                onClick={onSave}
                                label={"Update"}
                                className="text-white bg-first"
                                loading={loading}
                            />
                        </div>
                    )}
                    <div>
                        <CustomButton1
                            label={"Cancel"}
                            variant="outlined"
                            className="text-first"
                            disabled={loading}
                            onClick={props.onCancel}
                        />
                    </div>
                </div>
            </div>
        </PopUp>
    );
};
