'use client';

import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import id from 'date-fns/locale/id';
import { LuCalendarDays } from "react-icons/lu";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function DatePicker() {
  const [selectionRange, setSelectionRange] = useState({
    startDate: new Date(),
    endDate: addDays(new Date(), 4),
    key: 'selection'
  });

  const handleSelect = (ranges) => {
    setSelectionRange(ranges.selection);
  };

  return (
    <div className="flex flex-col items-center mb-6">
      <DateRange
        locale={id}
        ranges={[selectionRange]}
        onChange={handleSelect}
        minDate={new Date()}
        rangeColors={['#009933']}
        showDateDisplay={false}  // Hides the default date display
        weekdayDisplayFormat="E" // Shows weekdays as single letter
        monthDisplayFormat="MMMM yyyy" // Custom format for month display
      />
      <div className='flex justify-between w-full'>
        <p className="text-sm font-bold w-full">Check in</p>
        <div className='flex items-center px-4'> 
          <HiArrowNarrowRight color='#fff' />
        </div>
        <div className='w-full'>
          <p className="text-sm font-bold text-start">Check out</p>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex items-center mt-2 bg-[#f7f7f7] px-6 py-4 rounded-lg justify-between w-full">
          <span className="text-xs font-semibold">
            {selectionRange.startDate.toLocaleDateString('id-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
          <LuCalendarDays size={20} />
        </div>
        <div className='flex items-center px-4'> 
          <HiArrowNarrowRight />
        </div>
        <div className="flex items-center mt-2 bg-[#f7f7f7] px-6 py-4 rounded-lg justify-between w-full">
          <span className="text-xs font-semibold">
            {selectionRange.endDate.toLocaleDateString('id-US', {
              month: 'short',
              day: 'numeric'
            })}
          </span>
          <LuCalendarDays size={20} />
        </div>
      </div>
    </div>
  );
}
