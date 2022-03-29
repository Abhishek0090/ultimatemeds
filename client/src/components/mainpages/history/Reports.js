import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import { Link } from "react-router-dom";
import axios from "axios";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const Reports = () => {
  const state = useContext(GlobalState);
  const [history, setHistory] = state.userAPI.history;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get("/api/payment", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
        } else {
          const res = await axios.get("/user/history", {
            headers: { Authorization: token },
          });
          setHistory(res.data);
          //   console.log(res.data.createdAt)
        }
      };
      getHistory();
    }
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });

    //datepicker on change
    $(".dateadded").on("change", function (ret) {
      var v = ret.target.value; // getting search input value

      $("#example").DataTable().columns(3).search(v).draw();
    });
  }, [[token, isAdmin, setHistory]]);

  return (
    <div className="history-page">
      <div className="App">
        <h2 align="center">History</h2>
        <p align="center">You have {history.length} ordered</p>
        <div class="form-group">
          <label for="sel1" class="form-label">
            Date Filter:
          </label>
          <input
            class="form-control"
            type="date"
            className="dateadded form-control"
          />
        </div>
        <table id="example" class="display">
          <thead>
            <tr>
              <th>paymentID</th>
              <th>Date</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {history.map((result) => {
              return (
                <tr class="table-success">
                  {/* <td>{result._id}</td> */}
                  <td>{result.paymentID}</td>
                  <td>{new Date(result.createdAt).toLocaleDateString()}</td>
                  <td>
                    <Link to={`/history/${result._id}`}>View</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
