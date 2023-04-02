import React from "react"
import Header from "./Components/Elements/Header/Header"
import Navigation from "./Components/Elements/Navigation/Navigation"
import BottomNavBar from "./Components/Elements/BottomNavBar/BottomNavBar"
import Title from "./Components/UI/Title/Title"
import CardWrapper from "./Components/Elements/CardWrapper/CardWrapper"

const App = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <BottomNavBar language="РУС" currency="RUB" cartValue="100" />
      <Title title="Футболки" />
      <CardWrapper />
      <div
        style={{ backgroundColor: "green", height: "1em", width: "100%" }}
      ></div>
    </div>
  )
}

export default App
