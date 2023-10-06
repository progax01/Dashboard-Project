import { FormHelperText } from "@mui/material";

function PrimaryInput(props) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="id" className="text-xs font-[400]">
                {props.label}
            </label>
            <input
                type="text"
                className="p-2 bg-fldcr border rounded min-w-[12rem] text-xs placeholder:text-xs"
                id="id"
				{...props}
            />
			{props.error && <FormHelperText error>{props.error}</FormHelperText>}
        </div>
    );
}

export default PrimaryInput;
