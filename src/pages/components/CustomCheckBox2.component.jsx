import { BsCheck } from "react-icons/bs"



function CustomCheckBox2(props) {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor="id" className="text-xs font-400">
                {props.label}
            </label>
            <div
                className={`${
                    props.state ? " bg-first " : " bg-white "
                } border flex justify-center items-center rounded h-[34px] w-[34px]`}
                onClick={() => {
					!props.disabled && props.setState(!props.state)
				}}
            >
                {props.state && <BsCheck className="text-2xl text-white" />}
            </div>
            
        </div>
    );
}

export default CustomCheckBox2;
