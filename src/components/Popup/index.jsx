import React from "react";
import "./Popup.scss";
import fly from "../../assets/fly.png";
import { SearchContext } from "../../App";

const Popup = ({ item, setVisible }) => {
  const { onAdd } = React.useContext(SearchContext);
  return (
    <div className="popup_wrapper">
      <div className="popup_book">
        <svg
          onClick={() =>
            setVisible((prevState) => ({ ...prevState, isModal: false }))
          }
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Menu / Close_SM">
            <path
              id="Vector"
              d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
        <>
          <div className="title">
            <h3>{item.origin}</h3>
            <svg
              className="next"
              width="80px"
              height="30px"
              viewBox="0 0 17 17"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"
                fill="#000000"
              />
            </svg>
            <h3>{item.destination} </h3>
          </div>
        </>
        <div className="popup_content">
          {item.layovers.map((item) => (
            <div key={item.id} className="popup_info">
              <ul>
                <li>Аэропорт:{item.airport}</li>
                <li>Продолжительность:{item.duration}</li>
                <li>Время полета:{item.flightTime}</li>
              </ul>
            </div>
          ))}
        </div>
        <img alt="fly" src={fly}></img>
      </div>
      <button onClick={() => onAdd()}>Бронировать</button>
    </div>
  );
};
export default Popup;
