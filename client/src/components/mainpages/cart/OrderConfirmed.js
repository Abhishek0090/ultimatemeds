import React from "react";
import { Link } from "react-router-dom";
import "./orderConfirmed.css";

const OrderConfirmed = () => {
  return (
    <>
      <div className="orderplaced">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Name
            </label>
            <input type="text" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Surname
            </label>
            <input type="text" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Address"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Uttarpradesh</option>
              <option>Madhya Pradesh</option>
              <option>Karnataka</option>
              <option>Kerala</option>
              <option>Andhra Pradesh</option>
              <option>Tamil Nadu</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>

          <div class="col-12">
            <Link to="/orderPlaced">
              <button type="submit" class="btn btn-primary " style={{textDecoration:'none'}}>
                Confirm Now
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default OrderConfirmed;
