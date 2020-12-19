import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import './App.css';
import ImageDataLoad from "./Components/ImageDataLoad/ImageDataLoad";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <ImageDataLoad></ImageDataLoad>
    </DndProvider>
  );
}

export default App;
