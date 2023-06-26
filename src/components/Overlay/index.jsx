import React from "react";
import "./Overlay.scss";
import { SearchContext } from "../../App";
function Overlay() {
  const { setOpenCard, booking, onRemoveBook, setSelectedId } =
    React.useContext(SearchContext);

  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer_header">
          <h2>Корзина </h2>
          <svg
            className="close"
            onClick={() => setOpenCard(false)}
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
        </div>
        <div className="drawer_content">
          {booking.map((item) => (
            <div key={item.id} className="drawer_content_info">
              <div className="drawer_content_info_haeder">
                <h5>Билет №{item.id} </h5>
                <svg
                  className="close"
                  onClick={() => {
                    onRemoveBook(item);
                  }}
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
              </div>

              <div className="drawer_content_header">
                {item.origin}
                <svg
                  width="17px"
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
                {item.destination}
              </div>
              <div className="drawer_content_footer">
                <li>Цена:{item.price}$ </li>
                <li>Пересадки:{item.stops}</li>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="submitBtn">Оформить </button>
        </div>
      </div>
    </div>
  );
}
export default Overlay;
