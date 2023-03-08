
import React, { Component } from 'react'
import tokenLogo from '../../assets/badger_dao_logo.jpg'
import ethLogo from '../../assets/eth-logo.png'
import history from '../../history'
import './SwapExchange.css'

const backArrowStyle = {
  fill: "white",
  position: "absolute",
  top: "1em",
  left: "2em",
  fontSize: "2em"
}

class SwapExchange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }

  render() {
    return (
      <article id="SwapExchange">
        {/* <ArrowBackIcon style={backArrowStyle} /> */}
        <h3 id="back" onClick={() => {
          history.go(-1)
        }}>Back to selection menu</h3>
        <div className="swapInfo">
          <h1 className="mb-3">Swap Ether with Badger</h1>
        </div>
        <section id="WidgetContainer">
          <div className="card mb-4" >

            <div className="card-body">

              <form className="mb-3" onSubmit={(event) => {
                event.preventDefault()
                // let etherAmount
                // etherAmount = this.input.value.toString()
                // etherAmount = window.web3.utils.toWei(etherAmount, 'Ether')
                // this.props.buyTokens(etherAmount)
              }}>
                <div>
                  <label className="float-left"><b>Input</b></label>
                  <span className="float-right text-muted">
                    {/* Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')} */}
                      Balance:10,000
                    </span>
                </div>
                <div className="input-group mb-4">
                  <input
                    type="text"
                    onChange={(event) => {
                      const etherAmount = this.input.value.toString()
                      this.setState({
                        output: etherAmount * 100
                      })
                    }}
                    ref={(input) => { this.input = input }}
                    className="form-control form-control-lg"
                    placeholder="0"
                    required />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <img src={ethLogo} height='32' alt="" />
                      &nbsp;&nbsp;&nbsp; ETH
                    </div>
                  </div>
                </div>
                <div>
                  <label className="float-left"><b>Output</b></label>
                  <span className="float-right text-muted">
                    {/* Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')} */}
                      Balance:10
                    </span>
                </div>
                <div className="input-group mb-2">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="0"
                    value={this.state.output}
                    disabled
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <img src={tokenLogo} height='32' alt="" style={{ borderRadius: "50px" }} />
                      &nbsp; Badger
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <span className="float-left text-muted">Exchange Rate</span>
                  <span className="float-right text-muted">1 ETH = 100 Badger</span>
                </div>
                <button type="submit" className="btn btn-primary btn-block btn-lg">SWAP!</button>
              </form>

            </div>

          </div>

        </section>
      </article >
    );
  }
}

export default SwapExchange;