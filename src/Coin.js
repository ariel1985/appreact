import React, {useState, useEffect} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import cryptoImage from './../assets/crypto-icon.png'

export default function Coin(props) {

  const [limit, setLimit] = useState(150)
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(limit)
  console.log('at first', 'start', startIndex, 'end', endIndex, 'limit', limit)

  cryptos = []
  props.data.slice([startIndex], [endIndex]).map((item, i) => {
    cryptos.push(item);
  })
  console.log('props', props.data.length, props.userInput)

  console.log(cryptos.length, cryptos)

  function parseTimestamp(timestamp) {
      const dateTime = new Date(timestamp);
      return dateTime.getHours() + ':' + dateTime.getMinutes()
  }
  
  function getPrevious() {
    start = startIndex-limit < 0 ? 0 : startIndex-limit;
    end = start + limit

    console.log('start', start, 'end', end, 'limit', limit)

    setStartIndex(start)
    setEndIndex(end)
  }
  function getNext() {
    arrlimit = props.data.length-1
    start = startIndex+limit > arrlimit ? arrlimit : startIndex+limit;
    end = start + limit > arrlimit ? arrlimit : start + limit
    setStartIndex(start)
    setEndIndex(end)
  }
  return <div className="container">
      <h1> Coins Data</h1>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {/* <li class="page-item disabled"> */}
          <li className="page-item">
            <a className="page-link" href="#" tabIndex="-1" onClick={getPrevious}>Previous</a>
          </li>
          <li className="page-item" style={{marginLeft: '1%', marginRight: '1%' }}><h3 className="title">{startIndex}-{endIndex} / {props.data.length-1} </h3></li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={getNext}>Next</a>
          </li>
        </ul>
      </nav>
      {cryptos.map((val, id) => {
            return (
              <Flippy
                key={id}
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                ref={(r) => this.flippy = r} 
                className='flipper'
              >
                <FrontSide className="cardBg">
                <div className="card" style={{width: '13rem'}}>
                  <div className="card-header">
                      <h4 className="heading">{val.symbol}</h4>
                    </div>
                  <img className="card-img-top appimg" src={cryptoImage} alt="Card image cap"></img> 
                </div>
                </FrontSide>
                <BackSide className="cardBg">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="heading">{val.symbol}</h4>
                    </div>
                    <div className="card-body">
                      <dl>
                        <dt>Open</dt>
                          <dd>Time:  {parseTimestamp(val.openTime)} </dd>
                          <dd>Price: {parseInt(val.openPrice)}</dd>
                        <dt>Close</dt>
                          <dd>Time:  {parseTimestamp(val.closeTime)} </dd>
                          <dd>Price: {parseInt(val.openPrice)}</dd>
                        <dt>General:</dt>
                        <dd>Volum: {parseInt(val.volume)}</dd>
                        <dd>Chagne: {parseInt(val.priceChange)}</dd>
                      </dl>
                    </div>
                  </div>
                </BackSide>
              </Flippy>
            );
          }
        )
      }
  </div>;
}
