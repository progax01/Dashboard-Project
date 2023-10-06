import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { getBaseDesignsList, getCategoryList, getCollectionMasterList, getSeriesList, getSizesList } from "../redux/apis";

const useAdministrator = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(getProductsList());
		// dispatch(getBrandsList());
		dispatch(getCollectionMasterList());
		dispatch(getCategoryList());
		dispatch(getSizesList());
		// dispatch(getDesignTypesList());
		dispatch(getSeriesList());
		dispatch(getBaseDesignsList());
	}, []);

	return;
};

export default useAdministrator;
