function TextField(props) {
    return (
        <div className="flex items-center justify-start w-full px-5 py-3 bg-white border rounded">
            {/* ICON */}
            <span>{props.icon}</span>
         
            <input
          
                type={ props.type || "text" }
                className="ml-3 text-gray-700 grow focus:outline-none ${props.focusedClassName}"
                placeholder={props.placeholder}
				{...props}
            />
        </div>
    );
}

export default TextField;
