function CustomSelect1(props) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="id" className="text-xs font-400 ">
                {props.label}
            </label>
            <select
                type="text"
                // className="px-1.5 py-2 border rounded grow min-w-[12rem] text-gray-400 text-xs outline-none bg-fldcr"
                className="px-1.5 py-2 border rounded grow min-w-[12rem] text-xs outline-none bg-fldcr"
                id="id"
				{...props}
            >
                <option value="">Select</option>
                {props.children}
            </select>
        </div>
    );
}

export default CustomSelect1;
