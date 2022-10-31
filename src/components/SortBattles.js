import { useState } from "react";
import { Link } from "react-router-dom";
import './../css/SortBattles.css';

const SortBattles = () => {
    const [showSort, setShowSort] = useState({
        showOblast: false,
        showTheatre: false,
        showResult: false,
        });
        const revertValues = () => {
            Object.keys(showSort).forEach((key) => {
                showSort[key] = false;
            })
        }
    return ( 
        <div className="SortBattles">
            <p>Read battle reports: </p>
            <button onClick={() => { revertValues(); setShowSort({...showSort, showOblast: !showSort.showOblast})}} className='sort__button'>Oblast</button>
            <button onClick={() => { revertValues(); setShowSort({...showSort, showTheatre: !showSort.showTheatre})}} className='sort__button'>Theatre</button>
            <button onClick={() => { revertValues(); setShowSort({...showSort, showResult: !showSort.showResult})}} className='sort__button'>Result</button>
            <Link to={'/battles/all/battles'} className='sort__button'>All Battles</Link>
            <div className='selection'>
            { showSort.showOblast && 
                <>
                    <Link to={'/battles/oblast/Donetsk'} className='sort__button'>Donetsk</Link>
                    <Link to={'/battles/oblast/Luhansk'} className='sort__button'>Luhansk</Link>
                </>
            }
            { showSort.showTheatre && 
                <>
                    <Link to={'/battles/theatre/Eastern'} className='sort__button'>Eastern</Link>
                    <Link to={'/battles/theatre/Kyiv%20offensive'} className='sort__button'>Kyiv Offensive</Link>
                </>
            }
            {
            showSort.showResult && 
                <>
                    <Link to={'/battles/result/Ukrainian%20victory'} className='sort__button'>Ukrainian</Link>
                    <Link to={'/battles/result/Russian%20victory'} className='sort__button'>Russian</Link>
                </>
            }
        </div>
        </div>
     );
}
 
export default SortBattles;