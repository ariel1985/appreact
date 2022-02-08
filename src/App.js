import React, {useState} from 'react';
import Coin from './Coin';
import useFetch from './useFetch'

export default function App() {
  
  // initial hook setup  (must be at the top of the function)
  // TODO - loginState - update it ...
  const [stateLogin, setStateLogin] = useState(false)
  const [stateUserInput, setUserInput] = useState('')
  const [searchState, setSearchState] = useState('hideme')
  const [msgState, setMsgState] = useState('hideme')
  const [msg2State, setMsg2State] = useState('hideme')
  
  const [searchBtnState, setSearchBtnState] = useState('btn btn-primary appbtn')
  const [coinsDataState, setCoinsData] = useState({})
  
  
  const {fetchCoin} = useFetch()

  /**
   * Fetches data from given url
   * if input value is in json - login - go to home page
   */
  function handleButtonClick(e) {
    e.preventDefault();

    setMsgState('hideme')

    if(stateUserInput && stateUserInput.length > 3) { // there are no valid coins under 3 letters..
      //TODO - better logic for toggle !!
      setSearchState('alert alert-primary appbtn')
      setSearchBtnState('hideme')
      setMsg2State('hideme')
      setMsgState('hideme')
      
      let url = 'https://api2.binance.com/api/v3/ticker/24hr';
      fetch(url)
      .then(res => {return res.json()})
      .then(data => {return fetchCoin(data, stateUserInput)})
      .then(validCoin => {
        if (validCoin) { // move to coin page
          setCoinsData(validCoin)
          setUserInput(stateUserInput)
          setStateLogin(true)
        } else {// show error msg to user
          setSearchState('hideme')
          setSearchBtnState('btn btn-primary appbtn')   
          setMsgState('alert alert-danger')
        }
      })
      .catch(err => {
        setSearchBtnState('btn btn-primary appbtn')
        setSearchState('hideme')
        setMsgState('hideme')
        setMsg2State('alert alert-danger appbtn')
        console.error('Error!!!', err)
      });
    } else {
      setMsgState('alert alert-danger appbtn')
    }

  }

  function handleInputChange(e) {
    setUserInput(e.target.value)
  }

  if (stateLogin) {
    return (<Coin data={coinsDataState} userInput={stateUserInput} />)
  }

  return (
  <div className="container-fluid">
    <div className="form-signin form-horizontal">
      
      <form>
        <h1 className="header">Welcome!</h1>
        <div className='form-group'>
          <label htmlFor='coin' className="form-label">Please Enter a Valid Coin to Login: </label>
          <input id='coin' className='form-control' type="text" value={stateUserInput} onChange={handleInputChange} placeholder='Enter Coin Code'></input>
        </div>
        <button className={searchBtnState} onClick={handleButtonClick}>Login</button>
        <div className={searchState}>Searching for coin. <br></br> Thank you for waiting...</div>
        <div className={msgState}>Error - Please type a valid coin</div>
        <div className={msg2State}>Error - please check internet</div>
      </form>
    </div>
  </div>);
}



