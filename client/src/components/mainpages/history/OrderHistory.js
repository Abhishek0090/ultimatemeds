import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";
import axios from "axios";
import { AgGridReact, useMemo  } from "ag-grid-react";
import moment from "moment";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

var dateFilterParams = {
  comparator: function (filterLocalDateAtMidnight, cellValue) {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("/");
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0])
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
  },
  browserDatePicker: true,
};

function OrderHistory() {
  const state = useContext(GlobalState);
  const [history, setHistory] = state.userAPI.history;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  const [gridApi, setGridApi] = useState();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [rowData,setRowData] = useState();

  const onGridReady = (params) => {
    setGridApi(params);
   
  };

  // const rowData = [
  //   { make: {paymentID}, date: {Datee}  },
  // ];
 
  

  const columns = [
    { headerName: "Payment ID", field: "paymentID" },
    {
      headerName: "Date",
      field: "createdAt",
      filter: "agDateColumnFilter",
      filterParams: dateFilterParams,
      cellRenderer: (data) => {
        return moment(data.createdAt).format('YYYY/MM/DD')
        }
    },
    { headerName: "Check Details", field: "view" },
  ];
 

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get("/api/payment", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
          setRowData(res.data);
        } else {
          const res = await axios.get("/user/history", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
          setRowData(res.data);
        //   console.log(res.data.createdAt)
        }
      };
      getHistory();
    }
    if (gridApi) {
      if (startDate !== "" && endDate !== "" && startDate > endDate) {
        alert("A Start Date should be greater than enddate");
        setEndDate("");
      } else {
        var dateFilterComponent = gridApi.api.getFilterInstance("date");
        dateFilterComponent.setModel({
          type: getFilterType(),
          dateFrom: startDate ? startDate : endDate,
          dateTo: endDate,
        });
        gridApi.api.onFilterChanged();
      }
    }
  }, [token, isAdmin, setHistory, startDate, endDate]);

  const getFilterType = () => {
    if (startDate !== "" && endDate !== "") return "inRange";
    else if (startDate !== "") return "greaterThan";
    else if (endDate !== "") return "lessThan";
  };

  return (
    <div className="history-page">
      <div className="App">
        <h2 align="center">History</h2>
        <p align="center">You have {history.length} ordered</p>
        <div className="ag-theme-alpine" style={{ height: 400 }}>
          From :{" "}
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          To :{" "}
          <input
            type="date"
            value={endDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <AgGridReact
            rowData={rowData}
            columnDefs={columns}
               defaultColDef={{flex:1}}
            onGridReady={onGridReady}
            
          />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Date of Purchased</th>
            <th>Check Details</th>
          </tr>
        </thead>
        <tbody>
          {history.map((items) => (
            <tr key={items._id}>
              <td>{items.paymentID}</td>
              <td>{new Date(items.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`/history/${items._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderHistory;
