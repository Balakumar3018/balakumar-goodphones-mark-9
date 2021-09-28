import { useState } from "react";
import "./styles.css";

export default function App() {
  const PhoneObjects = {
    Iphone: [
      { name: "IPhone 13 ", rating: "5/5" },
      { name: "IPhone 13 mini", rating: "5/5" }
    ],
    Samsung: [
      { name: "Samsung S20 ", rating: "4.5/5" },
      { name: "Samsung Z series", rating: "4/5" }
    ],
    Oneplus: [
      { name: "Oneplus 9 ", rating: "4.2/5" },
      { name: "Oneplus nord 2", rating: "3.8/5" }
    ]
  };
  let [PhoneModel, SetphoneModel] = useState("Iphone");
  function phoneClickHandler(PhoneName) {
    SetphoneModel(PhoneName);
  }

  return (
    <div className="App">
      <h1>☎️ Good phones</h1>
      <p style={{ textAlign: "center", maxWidth: "20%", margin: "auto" }}>
        Checkout my favorite phones. You can click each phone to know the rating
      </p>
      <div>
        {Object.keys(PhoneObjects).map((PhoneName) => (
          <button
            onClick={() => phoneClickHandler(PhoneName)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {PhoneName}
          </button>
        ))}
      </div>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {PhoneObjects[PhoneModel].map((phone) => (
            <li
              key={phone.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                maxWidth: "400px",
                width: "70%",
                margin: "7px auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {phone.name} </div>
              <div style={{ fontSize: "smaller" }}> {phone.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
