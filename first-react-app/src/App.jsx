import React from "react";
import "./App.css";
import Greeting from "../Components/Greeting";
import Exercise from "../Components/Exercise";
import BigCats from "../Components/BigCats";
import Emoji from "../Components/Emoji";
import ExtendedBigCats from "../Components/ExtendedBigCats";
import ExtendedBigCats2 from "../Components/ExtendedBigCats2";
import Calculator from "../Components/Calculator";

const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image: "fakelink.com/fakeimage.jpg",
  },
  {
    id: 2,
    name: "Cougar",
    latinName: "Puma concolor",
    image: "fakelink.com/fakeimage.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image: "fakelink.com/fakeimage.jpg",
  },
  {
    id: 4,
    name: "Leopard",
    latinName: "Panthera pardus",
    image: "fakelink.com/fakeimage.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image: "fakelink.com/fakeimage.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image: "fakelink.com/fakeimage.jpg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image: "fakelink.com/fakeimage.jpg",
  },
];

function Bomb() {
  throw new Error(" KABOOM ");
}

function ExplodingBomb() {
  const [exploded, setExploded] = React.useState(false);

  return (
    <div className="ExplodingBomb componentBox">
      <button onClick={() => setExploded(!exploded)}>
        DANGER: Click to explode bomb!
      </button>

      {/* Renders the Bomb conditionally, depending on state */}
      {exploded ? <Bomb /> : null}
    </div>
  );
}

function App() {
  return (
    <>
      <Exercise number="1" />
      <Greeting name="John">
        <p>this is a child</p>
      </Greeting>
      <Exercise number="2"/>
      <BigCats cats = {cats}/>
      <Exercise number ="3"/>
      <Emoji/>
      <Exercise number="4"/>
      <ExtendedBigCats cats={cats}/>
      <Exercise number="5"/>
      <ExtendedBigCats2 cats={cats}/>
      <Exercise number="6"/>
      <Calculator/>
      <Exercise number="Error Testing"/>
      <ExplodingBomb/>
    </>
  );
}

export default App;
