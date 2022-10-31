import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Greet from './Greet';
import Home from './Home';
import News from './News';
import Article from './Article';
import Battles from './Battles';
import Report from './Report';

const App = () => {
    let [news, setNews] = useState(null);
    let [battles, setBattles] = useState(null);
    const showGreet = localStorage.getItem("showGreet");
    useEffect(() => {
        fetch("http://192.168.0.106:8000/news").then(response => response.json()).then((news) => {
            setNews(news);
        })
        fetch("http://192.168.0.106:8001/battles").then(response => response.json()).then((battles) => {
            setBattles(battles);
        })
  }, []);
    return ( 
        <Router>
            <>
            <Routes >
                { (showGreet === "true" || showGreet === null) && <Route path='/' exact element={ <Greet /> } />}
                { (showGreet === "false" && news && battles) && <Route path='/' exact element={ <Home news = { news } battles = { battles } />} /> }
                { (news && battles) && <Route path='/home' element={ <Home news = { news } battles = { battles } /> } /> }
                { news && (
                    <>
                        <Route path='/news/:category' element={ <News news = { news } />} />
                        <Route path='/news/article/:article' element={ <Article news = { news } />} />
                    </>
                )}
                { battles && (
                    <>
                        <Route path='/battles/:property/:value' element={<Battles battles = { battles }/>} />
                        <Route path='/battles/battle/:battleId' element={<Report battles = { battles }/>} />
                    </>
                )} 
            </Routes>
            </>
        </Router>
     );
}
 
export default App;