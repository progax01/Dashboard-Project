function CustomTextArea(props) {
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor="id" className="text-xs font-[400]">
          {props.label}
        </label>
        <textarea
          required
          className="p-2 bg-fldcr border rounded grow min-w-[12rem] text-xs placeholder:text-xs"
          id="id"
          placeholder={props.placeholder}
          {...props}
        />
      </div>
    );
  }
  
  export default CustomTextArea;
  