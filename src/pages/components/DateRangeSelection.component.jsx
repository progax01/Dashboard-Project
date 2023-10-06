import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the styles
import 'react-date-range/dist/theme/default.css'; // Import the theme

function DateRangeSelection() {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleDateChange = (ranges) => {
    setDateRange([ranges.selection]);
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <DateRangePicker
       // ranges={dateRange}
        onChange={handleDateChange}
      />
    </div>
  );
}

export default DateRangeSelection;
