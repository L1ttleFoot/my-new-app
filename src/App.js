import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CurrencyRate from './pages/СurrencyRate';
import Layout from './components/Layout';
import DateSelector from './pages/DateSelector';

function App() {

  const [episodes, setState] = useState([])
  const [currency, setRate] = useState([])

  const rateDate='2014-12-20'
    
  useEffect(() => {
    fetch(`https://www.breakingbadapi.com/api/episodes`)
      .then(res => res.json())
      .then(data => setState(data))
  }, [])

  useEffect(() => {
    fetch(`https://openexchangerates.org/api/historical/${rateDate}.json?app_id=30e644beed944cf5991a3f8264fffd35`)
      .then(res => res.json())
      .then(data => setRate(data))
  }, [])

  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<DateSelector episodes={episodes} />}></Route>
            <Route path='/rate' element={<CurrencyRate currency={currency}/>}></Route>
          </Routes>
          </Layout>
      </Router>
    </div>
  );
}

export default App;