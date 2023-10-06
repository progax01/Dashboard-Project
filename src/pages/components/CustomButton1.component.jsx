import * as React from "react";

import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import CircularProgress from '@mui/material/CircularProgress';

function CustomButton1(props) {
    return (
		<Box sx={{ m: 1, position: 'relative' }}>
			<Button
				variant={props.variant ?? "contained"}
				size={props.size ?? "medium"}
				className={` ${props.className} flex gap-2 capitalize justify-center items-center relative`}
				disabled={props.loading || props.disabled}
			>
				{props.icon && <span className="text-sm">{props.icon}</span>}
				{props.label && (
					<span className=" whitespace-nowrap font-[500] font-Mitr">
						{props.label}
					</span>
				)}

				<div
					onClick={props.onClick}
					className="absolute top-0 left-0 w-full h-full"
				></div>
			</Button>
			{
				props.loading && (
					<CircularProgress
						size={20}
						sx={{
							color: 'white',
							position: 'absolute',
							top: '50%',
							left: '50%',
							marginTop: '-12px',
							marginLeft: '-12px',
						}}
					/>
				)
			}
		</Box>
    );
}

export default CustomButton1;
