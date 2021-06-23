import React from 'react'
import './App.css';
import {useFormik} from 'formik';
import InfoForm from './components/InfoForm';
import PaymentDataForm from './components/PaymentDataForm';


function App() {
  const formik = useFormik({
    initialValues: {
      duration: 12,
      gigabyte: 5,
      payment: false,
    },
    onSubmit: value => {},
    validate: value => {
      
    }
  });
  return (
    <div className="App">
      <form>
        <div>
          <div className="form-info">
            <label className="form-label" htmlFor="duration">
              Duration˚
            </label>
            <div className="input-group mb-3">
              <select
                className="form-select"
                id="duration"
                name="duration"
                value={formik.values.duration}
              >
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
              </select>
              <span class="input-group-text" id="basic-addon2">
                Months
              </span>
            </div>
            <br />
            <label className="form-label" htmlFor="gigabytes">
              Amount of gigabytes in a cloud˚
            </label>
            <select
              name="gigabyte"
              className="form-select"
              id="gigabytes"
              value={formik.values.gigabyte}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
            </select>
            <br />
            <label className="form-label">upform payment˚</label>
            <br />
            <input
              className="form-check-input"
              id="radioYes"
              type="radio"
              name="payment"
              value="yes"
            />
            <label htmlFor="radioYes">Yes</label>
            &nbsp;
            <input
              className="form-check-input"
              id="radioNo"
              type="radio"
              name="payment"
              value="no"
            />
            <label htmlFor="radioNo">No</label>
          </div>
        </div>
        <PaymentDataForm />
      </form>
    </div>
  );
}

export default App;
