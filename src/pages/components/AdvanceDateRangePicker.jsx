import React from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
// import "flatpickr/dist/themes/dark.css"
import moment from 'moment';
import { Box, Grid } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";

const AdvanceDateRangePicker = (props) => {
    const {
        date,
        setDate
      } = props;

    return (
        <Box>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid item xs={6}>
					<Flatpickr
						value={date}
						id="range-picker"
						placeholder="Select Date Range"
						className="capitalize max-w-[200px]"
						onChange={(date) => setDate(date)}
						options={{
							mode: "range",
							maxDate: new Date(),
							formatDate: (date) => moment(date).format("DD-MM-YYYY"),
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<div className="flex items-center gap-1 p-2 border rounded bg-bglyt">
						<input
							type="text"
							className="w-full text-xs capitalize bg-transparent  max-w-[200px]"
							placeholder="Search"
						/>
						<AiOutlineSearch className="" />
					</div>
				</Grid>
			</Grid>
		</Box>
    );
};

export default AdvanceDateRangePicker;
