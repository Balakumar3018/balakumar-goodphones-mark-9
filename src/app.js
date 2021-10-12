import { useState } from "react";
import "./styles.css";

export default function App() {
  const PhoneObjects = {
    Iphone: [
      { name: "IPhone 13 pro ", Description : "Pro. Buy now. A dramatically more powerful camera system. Learn more. Ultra Wide camera. A15 Bionic chip. Cinematic mode. Adaptive 120Hz display. Super Retina XDR display.",rating: "5/5" },
      { name: "IPhone 13 ",Description : "Your new superpower. Buy now. Our most advanced dual-camera system ever", rating: "5/5" },
      { name: "IPhone 13 mini",Description : "13 cm (5.4-inch) Super Retina XDR display · Cinematic mode adds shallow depth of field and shifts focus automatically in your videos ", rating: "5/5" },
      
    ],
    Samsung: [
      { name: "Samsung S21 ",Description : "Never miss that perfect shot again. Meet Galaxy S21 5G ", rating: "4.7/5" },
      { name: "Samsung S20 ",Description : "Samsung Galaxy S20 · Released 2020, March 06 · 163g, 7.9mm thickness · Android 10, up to Android 11, One UI 3.0 · 128GB storage, microSDXC ...", rating: "4.5/5" },
      { name: "Samsung Z series",Description : "Galaxy Z Series Mobiles - Discover Samsung Z Series mobile models online. ", rating: "4/5" }
    ],
    Oneplus: [
      { name: "Oneplus 9 ",Description : "This festive season , capture your best shot with OnePlus 9 Series 5G starting from 34,999 ", rating: "4.3/5" },
      { name: "Oneplus 8T ",Description : "OnePlus 8T 5G is equipped with Qualcomm® Snapdragon™ 865 and 5G, 48 MP Quad Camera", rating: "4.2/5" },
      { name: "Oneplus nord 2", Description : "Check pricing and color options for OnePlus Nord 2 5G, review product info, and purchase a new Nord 2 phone.",rating: "3.8/5" }
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
              <div style={{ fontSize: "small" }}> {phone.Description} </div>
              <div style={{ fontSize: "smaller" }}> {phone.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
