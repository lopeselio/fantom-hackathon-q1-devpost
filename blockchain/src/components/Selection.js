import React from "react";
import "../styles/App.css";
import history from "../history";
import Carousel from "./Carousel";

export default function App() {
  return (
    <div className="main screen">
      <Carousel />
      <div className="carousel-padding header">Welcome to the Badger Dungeon Hunt</div>
      <div className="selection">
        <div
          className="select-story"
          onClick={() => {
            history.push("/TheExchange");
            history.go(0);
          }}
        >
          <h4 className="text-header">Swap ETH/BADGER</h4>
          <img className="dashboard-card-image" src="https://ipfs.io/ipfs/QmSraKiNmctuShFEqgGmLVamKuwZC6TFs26R27959ugExn?filename=badger-logo.png"
            alt="Angel" />
        </div>
        <div
          className="select-story"
          onClick={() => {
            history.push("/StoryBooth");
            history.go(0);
          }}
        >
          <h4 className="text-header">Shop Items</h4>
          <img className="dashboard-card-image" src="https://ipfs.io/ipfs/QmemTF7ziTVBFFpZzqYvSF3hdK5q6J2bZ85FYUr4mG2CUw?filename=Castle.png" 
          alt="Castel"  />
        </div>
        <div
          className="select-story"
          onClick={() => {
            history.push("/App");
            history.go(0);
          }}
        >
          <h4 className="text-header">Go to NFT Inventory</h4>
          <img className="dashboard-card-image" src="https://ipfs.io/ipfs/QmccVpftx3x3W7GxTQGkJjXS6VyJCpgDgHagkAoJCsLnXM?filename=home.png"
            alt="home" />
        </div>
      </div>
    </div>
  );
}