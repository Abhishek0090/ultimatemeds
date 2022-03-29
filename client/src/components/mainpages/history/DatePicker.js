// import { useState } from "react";
// import React, { Component }  from 'react';

// const DatePicker = ({ onDateFilter }) => {
//   const [filters, setFilters] = useState({
//     from: "",
//     to: "",
//   });

//   const handleInput = (field) => (event) => {
//     const { value } = event.target;

//     setFilters({
//       ...filters,
//       [field]: value,
//     });

//     switch (field) {
//       case "from":
//         onDateFilter(value, "from");
//         break;
//       case "to":
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//       <>
//       <div className="col-sm-12 my-2">
//         <label htmlFor="startDate">From</label>
//         <input
//           type="date"
//           className="form-control"
//           id="startDate"
//           onChange={handleInput("from")}
//         />
//       </div>
//       <div className="col-sm-12 my-2">
//         <label htmlFor="endDate">To</label>
//         <input
//           type="date"
//           className="form-control"
//           id="endDate"
//           onChange={handleInput("to")}
//           />
//       </div>
//     </>
//   )
// };


// export default DatePicker;
