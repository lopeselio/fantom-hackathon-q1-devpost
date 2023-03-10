import React, { Component } from 'react';
// import logo from '../logo.png';
import HeaderNFT from './HeaderNFT'

import './App.css';
import Web3 from 'web3';
// import { Spinner } from 'reactstrap';
import { Image } from 'react-bootstrap'
import ChainlinkLogo from '../assets/chainlink.png'

import TropyChar from '../abis/TrophyChar.json'
import DungeonToken from '../abis/DungeonToken.json'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRewarded: false,
      isMinting: false,
      isLoggedIn: false,
      // items: [], 
      account: '',
      contract: null,
      usersNftCount: 0,
      trophies: [],
      loading: true
    };
    this.loadWeb3();
    this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert("Non ethereum browser detected. You should consider trying Metamask")
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

  //   const networkId = await web3.eth.net.getId()
  //   const networkData = TropyChar.networks[networkId]
  //   if (networkData) {
  //     const abi = TropyChar.abi;
  //     const address = networkData.address
  //     const contract = new web3.eth.Contract(abi, address)
  //     const contract2 = new web3.eth.Contract(DungeonToken.abi, DungeonToken.networks[networkId].address)
  //     //console.log(this.state.account)
  //     this.setState({ contract })
  //     this.setState({ contract2 })


  //     const usersNftCount = await c<div className="dungeon trophy-cabinet row text-center">

            
            
              
            



         

  //     this.setState({ usersNftCount: Number(usersNftCount.toString()) })

  //     console.log(usersNftCount.toString());

  //     for (var i = 1; i <= this.state.usersNftCount; i++) {
  //       const trophy = await contract.methods.usersNft(this.state.account, i).call()
  //       //console.log(trophy);
  //       this.setState({
  //         trophies: [...this.state.trophies, trophy]
  //       })
  //     }

  //     //console.log('users trophies', this.state.usersNftCount, this.state.trophies)
  //   } else {
  //     window.alert('Smart contract not deployed to the detected network')
  //   }
  }


  render() {
    const isLoggedIn = this.state.isLoggedIn
    const isMinting = this.state.isMinting

    const isRewarded = this.state.isRewarded
    return (
      <div className="screen">
        
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0 text-header"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            The Badger Dungeon Hunt
          </a>
          <ul className='navbar-nav px-3'>
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small className='text-white'><span id='account' className='text-header1'>{this.state.account}</span></small>
            </li>
          </ul>
        </nav>
        
        <div className='nft-sec container-fluid mt-5'>
          {/* <HeaderNFT /> */}
          <div className='row'>
            <main role='main' className='col-lg-12 d-flex text-center'>
              <div className="trophy-section-header">
                <h5 className="trophy-title"><span>  </span>Your Trophy Cabinet <span> </span></h5>
                <h6 className="text-header1 white">Powered by <img src={ChainlinkLogo} className='chainlink' /> <a className="hovero" href="https://docs.chain.link/docs/chainlink-vrf"><span className="hovero">Chainlink VRF</span></a>  </h6>
                {/* <h5 className="text col-md-6 col-sm">Your Trophy Cabinet</h5> </div> */}
                {
                  // this.state.loading ? (
                  // <Spinner className='spinner' color="info" />
                  // <Spinner color="info" />
                  // ):
                  <button
                    type="submit"
                    className="btn btn-link btn-block btn-sm mint-btn dispToken"
                    // onClick={(event) => {
                    //   event.preventDefault()
                    //   console.log('triggered');
                    //   this.state.contract.methods.requestNewRandomTrophy(
                    //     1,
                    //     'sagar',
                    //     1,
                    //     // '0x775C72FB1C28c46F5E9976FFa08F348298fBCEC0'
                    //     this.state.account
                    //   ).send({ from: this.state.account }).on('transactionHash', (hash) => {
                    //     //console.log('true');
                    //     this.setState({ loading: false })
                    //   })

                      // this.state.contract2.methods.reward(
                      //   this.state.account
                      // ).send({ from: this.state.account }).on('transactionHash', (hash) => {
                      //   //console.log('true');
                      //   this.setState({ loading: false })
                      // })
                    // }}
                    >
                    Test Mint Random NFT...
                </button>

                }

              </div>
            </main>
          </div>
          <hr /><hr />

          
        </div >
      </div >
    );
  }
}
export default App