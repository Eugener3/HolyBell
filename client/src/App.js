import React from "react"
import Header from "./Components/Elements/Header/Header"
import Navigation from "./Components/Elements/Navigation/Navigation"
import BottomNavBar from "./Components/Elements/BottomNavBar/BottomNavBar"
import Title from "./Components/UI/Title/Title"
import CardWrapper from "./Components/Elements/CardWrapper/CardWrapper"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import RegisterModal from "./Components/Elements/RegisterModal/RegisterModal"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <BottomNavBar language="РУС" currency="RUB" cartValue="100" />
      <Routes>
      <Route path='/registration/' component={RegisterModal}/>
      </Routes>
      <Title title="Футболки" />
      <CardWrapper />
      <div
        style={{ backgroundColor: "green", height: "1em", width: "100%" }}
      ></div>
    </BrowserRouter>
  )
}

export default App
