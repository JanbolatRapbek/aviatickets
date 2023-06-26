import React, { useEffect } from "react";
import axios from "axios";
import "./Cards.scss";
import { SearchContext } from "../../App";

const Cards = ({ setVisible, item }) => {
  const { searchValue, setBooking, booking } = React.useContext(SearchContext);

  return (
    <SearchContext.Provider>
      <div className="content">
        {item
          .filter((obj) => {
            if (obj.origin?.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }
            if (
              obj.destination?.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return true;
            }
            return false;
          })
          .map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => {
                setVisible({ isModal: true, item: item });
              }}
            >
              <h5>Билет №{item.id}</h5>
              <div className="card_header">
                <h2>{item.origin}</h2>
                <svg
                  width="80px"
                  height="30px"
                  viewBox="0 0 17 17"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8.972h-12.793l6.146 6.146-0.707 0.707-7.353-7.353 7.354-7.354 0.707 0.707-6.147 6.147h12.793v1z"
                    fill="#000000"
                  />
                </svg>
                <b>{item.totalFlightTime}.в пути</b>
                <svg
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
                <h2 className="title">{item.destination}</h2>
                <div className="splite">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Interface / Line_Xl">
                      <path
                        id="Vector"
                        d="M12 21V3"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </div>
                <div className="card_content">
                  <b>Цена:{item.price}$</b>
                  <b>Пересадки:{item.stops}</b>
                </div>
              </div>
            </div>
          ))}
      </div>
    </SearchContext.Provider>
  );
};

export default Cards;
