import React, {useState} from 'react'
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

function PaymentDataForm() {
const [number, setNumber] = useState("");
const [expiry, setExpiry] = useState("");
const [cvc, setCvc] = useState("");
const [focus, setFocuse] = useState("");

return (
  <div className="App">
    <form>
      
      <br />
      <Cards number={number} expiry={expiry} cvc={cvc} focused={focus} />
      <input
        type="tel"
        name="number"
        placeholder="Card Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        onFocus={(e) => setFocuse(e.target.name)}
      />
      <input
        type="text"
        name="expiry"
        placeholder="MM/YY Expiry"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        onFocus={(e) => setFocuse(e.target.name)}
      />
      <input
        type="tel"
        name="cvc"
        placeholder="CVC"
        value={cvc}
        onChange={(e) => setCvc(e.target.value)}
        onFocus={(e) => setFocuse(e.target.name)}
      />
      <br />
      <button className="btn btn-primary" type="submit">
        Confirm
      </button>
    </form>
  </div>
);
}

export default PaymentDataForm
