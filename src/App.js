import Header from "./components/Header/index";
import Categories from "./components/Categories/index";
import Cards from "./components/Cards";
import Popup from "./components/Popup";
import DB from "./assets/fly.json";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Overlay from "./components/Overlay/index";
export const SearchContext = React.createContext();

function App() {
  const [item, setItem] = useState([]);
  const [booking, setBooking] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortType, setSortType] = useState({
    name: "пересадки (по возрастанию)",
    sortProperty: "stops",
  });
  const [visible, setVisible] = useState({ isModal: false, item: null });
  const [openCard, setOpenCard] = useState(false);
  const order = sortType.sortProperty.includes("-") ? "asc" : "desc ";

  React.useEffect(() => {
    axios
      .get(
        `http://localhost:3001/flights?_sort=${sortType.sortProperty.replace(
          "-",
          ""
        )}&_order=${order}`
      )
      .then((arr) => setItem(arr.data));
  }, [sortType]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/booking")
      .then((data) => setBooking(data.data));
  }, [booking]);

  function onAdd() {
    axios
      .post("http://localhost:3001/booking", {
        id: visible.item.id,
        origin: visible.item.origin,
        destination: visible.item.destination,
        price: visible.item.price,
        stops: visible.item.stops,
      })
      .then((response) => {
        setBooking([...booking, response.data]);
      })
      .catch((err) => console.log(err.response.data));
  }

  const onRemove = (id) => {
    const newBooking = booking.filter((item) => item.id !== id);
    setBooking(newBooking);
  };

  const onRemoveBook = (item) => {
    if (
      window.confirm(`"Вы действительно хотите удалить билет №${item.id}?"`)
    ) {
      axios
        .delete("http://localhost:3001/booking/" + item.id)
        .then(() => {
          onRemove(item.id);
        })
        .catch(() => {
          alert("Не удалось удалить билет");
        });
    }
  };

  return (
    <SearchContext.Provider
      value={{
        sortType,
        setSortType,
        setSearchValue,
        searchValue,
        setOpenCard,
        booking,
        setBooking,
        onAdd,
        onRemoveBook,
      }}
    >
      <div className="App">
        <Header setVisible={setVisible}></Header>
        <Categories></Categories>
        <Cards item={item} setVisible={setVisible}></Cards>
        {visible.isModal && (
          <Popup item={visible.item} setVisible={setVisible}></Popup>
        )}
      </div>
      {openCard && <Overlay setOpenCard={{ setOpenCard }}></Overlay>}
    </SearchContext.Provider>
  );
}

export default App;
