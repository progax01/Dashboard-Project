import { useRef } from "react";
import { FormHelperText } from "@mui/material";

function CustomDate1(props) {
	const dateRef = useRef();

	const handleDateClick = () => {
		dateRef.current?.showPicker();
	};

    return (
        <div className="flex flex-col gap-1" onClick={handleDateClick}>
            <label htmlFor="id" className="text-xs font-[400]">
                {props.label}
            </label>
            <input
                type="date"
                className="p-2 bg-fldcr border rounded min-w-[12rem] text-xs placeholder:text-xs"
                id="id"
				ref={dateRef}
				{...props}
            />
			{props.error && <FormHelperText error>{props.error}</FormHelperText>}
        </div>
    );
}

export default CustomDate1;
