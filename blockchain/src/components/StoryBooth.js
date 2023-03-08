import React,{useState, useEffect} from 'react'
import '../styles/booth.css'
import Header from './StoryHeader'
import Box from './Box'





export default function App() {
    // let [story, setStory] = useState([]);
    // useEffect(() => {
    //   loadData();
    // }, []);
    // const loadData = async () => {
    //   const response = await fetch(
    //     "https://dungeon-crawler-1.herokuapp.com/v1/character/find/all"
    //   );
    //   const data = await response.json();
    //   setStory(data.character);
    //   console.log(data);
    // };
  return (
    <div className="main screen">
      <Header title={"Shop Items and Upgrade"} />
      <div className="body">
        <div class="flex-container">
          {/* {story
            ? story.map((item) => (
              item.isStory?
                <Box
                  img={`https://gateway.pinata.cloud/ipfs/${item.image}`}
                  name={item.name}
                  walletAddress={item.walletAddress}
                />:null
              ))
            : null} */}
            <Box
                  img="https://ipfs.io/ipfs/QmQaK4v8vJNGqQsGW2SgQBMoWBkgH6xKEdcUiDNnUxFC92?filename=dagger1.jpg"
                  name="Dagger"
                  level="1"
                  price="BUY 200 BADGER"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmPW8c7YkxPXd1vfxN3gQweqNE9ZrJfCm71QY6UTbGXkBZ?filename=axe.png"
                  name="Power Axe"
                  level="3"
                  price="BUY 400 BADGER"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmbWoyozndwSU6XSVKSqZTNoXJ5asprJsQ1x1KvDn9dXvN?filename=chestasset.png"
                  name="Epic Chest"
                  level="2"
                  price="BUY 300 BADGER"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmZyz8xdnEr61Le1AAht9Vs9qRWbw96rZbx3y9944vAom8?filename=shield.png"
                  name="Power Shield"
                  level="3"
                  price="BUY 600 BADGER"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmZ8caFHAyDfEt2JwjQm812jZ37Z2NTmHhKqxhwVmXkdiG?filename=hammer.jpg"
                  name="Power Hammer"
                  level="4"
                  price="BUY 800 BADGER"
            />
            <Box
                  img="https://ipfs.io/ipfs/QmZgYzvCZ4GujsnpDpA2LEdybZKWrzJ23nrtEdEigbhLcS?filename=arrow.jpeg"
                  name="Power Hammer"
                  level="2"
                  price="BUY 250 BADGER"
            />
        </div>
      </div>
    </div>
  );
}