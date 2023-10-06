function CheckBox(props) {
    return (
        <div className="flex" >
            <input type="checkbox" id="checkbox1" />
            <label className="ml-2 text-xs text-gray-700" for={'checkbox1'} >
                {props.label}
            </label>
        </div>
    );
}

export default CheckBox;
