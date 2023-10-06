import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getCollectionMasterList, getSeriesList, getSizesList } from "../../../redux/apis";
import { getDesignesList, saveDesignDetails } from "../../../redux/apis/design";
import CustomButton1 from "../../components/CustomButton1.component";
import CustomCheckBox2 from "../../components/CustomCheckBox2.component";
import CustomSelect1 from "../../components/CustomSelect1.component";
import CustomTextField2 from "../../components/CustomTextField2.component";
import PopUp from "../../components/PopUp.componenet";

export const AddDesignPopUp = (props) => {
    const dispatch = useDispatch();
    const sizes = useSelector((state) => state.administrator?.sizes);
    const series = useSelector((state) => state.administrator?.series);
    const collections = useSelector((state) => state.administrator?.collections);
    const [isActive, setIsActive] = useState(true);
    const [collectionId, setCollectionId] = useState("");
    const [sizeId, setSizeId] = useState("");
    const [seriesId, setSeriesId] = useState("");
    const [designName, setDesignName] = useState("");
    const [loading, setLoading] = useState(false);
	const [selectedImage, setSelectedImage] = useState(null);

	
    const [imageName, setImageName] = useState("");
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageName(file.name);
            setSelectedImage(file);
        } else {
            setImageName("");
            setSelectedImage("Prifile ");
        }
    };

    useEffect(() => {
        dispatch(getCollectionMasterList());
        dispatch(getSizesList());
        dispatch(getSeriesList());
    }, []);

    const onChangeText = (e) => {
        setDesignName(e.target.value);
    };

    const onChangeCollection = (e) => {
        setCollectionId(e.target.value);
    };

    const onChangeSize = (e) => {
        setSizeId(e.target.value);
    };

    const onChangeSeries = (e) => {
        setSeriesId(e.target.value);
    };

    const onSave = async () => {
        if (collectionId === "" || collectionId === undefined || collectionId === null) {
            toast.error("Please select collection");
            return;
        }
        if (sizeId === "" || sizeId === undefined || sizeId === null) {
            toast.error("Please select size");
            return;
        }
        if (seriesId === "" || seriesId === undefined || seriesId === null) {
            toast.error("Please select series");
            return;
        }
        if (designName === "" || designName === undefined || designName === null) {
            toast.error("Please enter design name");
            return;
        }
        setLoading(true);
        const response = await dispatch(
            saveDesignDetails({ collectionId, sizeId, seriesId, designName, designCode: "NA", isActive })
        );
        setLoading(false);
        if (!response.error) {
            if (response.payload.isSuccess) {
                toast.success(response.payload.message);
                props.onCancel(); // Close PopUp
                dispatch(getDesignesList()); // Refresh areas list
            } else {
                toast.error(response.payload.message);
            }
        } else {
            toast.error(response.payload.message);
        }
    };

    if (!props.isVisible) {
        return null;
    }

    return (
        <PopUp>
            <div className="pb-10 bg-white rounded-lg">
                <div className="flex bg-first p-4 text-white justify-between rounded-t-lg">
                    <h1 className="text-xl font-weight-[300]">Add Design Master</h1>
                    <div className="flex items-center text-sm"></div>
                </div>

                <div className="p-4 mx-auto">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                        <div className="py-2">
                            <CustomTextField2 label={"Design Code"} placeholder="Enter" />
                        </div>
                        <div className="py-2">
                            <CustomTextField2 label={"Sub Design Code"} placeholder="Enter" />
                        </div>
                        <div className="py-2">
                            <CustomSelect1 label={"Collection"} onChange={onChangeCollection}>
                                {collections?.map((item) => (
                                    <option key={item.collectionId} value={item.collectionId}>
                                        {item.collectionName}
                                    </option>
                                ))}
                            </CustomSelect1>
                        </div>
                        <div className="py-2">
                            <CustomSelect1 label={"Size "} onChange={onChangeSize}>
                                {sizes?.map((item) => (
                                    <option key={item.sizeId} value={item.sizeId}>
                                        {item.sizeName}
                                    </option>
                                ))}
                            </CustomSelect1>
                        </div>
                        <div className="py-2">
                            <CustomSelect1 label={"Series"} onChange={onChangeSeries}>
                                {series?.map((item) => (
                                    <option key={item.seriesId} value={item.seriesId}>
                                        {item.seriesName}
                                    </option>
                                ))}
                            </CustomSelect1>
                        </div>
                        <div className="py-2">
                            <CustomSelect1
                                value={designName}
                                label={"Design Name"}
                                placeholder={"Enter"}
                                onChange={onChangeText}
                            />
                        </div>
                        <div className="flex flex-col items-start justify-center py-2 ">
                            <label htmlFor="image-upload" className="text-xs font-small">
                                Image Upload
                            </label>
                            <div className="flex items-center gap-2">
                                <label
                                    htmlFor="image-upload"
                                    className="cursor-pointer text-xs bg-sixt text-white p-2 rounded-md"
                                >
                                    Upload
                                </label>
                                {imageName && <p className="flex items-center text-xs ">{imageName}</p>}
                                <input type="file" id="image-upload" className="hidden" onChange={handleImageChange} />
                                <div
                                    className={`flex w-16 h-16 rounded-full border border-[#3D3D3D66] ${
                                        selectedImage ? "hidden" : ""
                                    }`}
                                >
                                    <span className="text-[#3D3D3D66] flex items-center justify-center w-full h-full">
                                        No Image
                                    </span>
                                </div>
                                {selectedImage && (
                                    <img
                                        src={URL.createObjectURL(selectedImage)}
                                        alt="Profile"
                                        className="w-16 h-16 rounded-full border border-[#3D3D3D66]"
                                    />
                                )}
                            </div>
                        </div>

                        <div className="py-2">
                            <CustomCheckBox2 label={"Is Active"} state={isActive} setState={setIsActive} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-5">
                    <div>
                        <CustomButton1
                            label={"Submit"}
                            className="text-white bg-first"
                            onClick={onSave}
                            loading={loading}
                        />
                    </div>
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
