import { Link } from "react-router-dom";
import ukraineFlag from './../img/ukraine_flag.png';
import russiaFlag from './../img/russia_flag.png';
import './../css/Battle.css';

const Battle = ({ battle }) => {
    return (
            <div className='battle__item'>
                <div className="battle__details">
                    <h2>{battle.name}</h2>
                    { (battle.result.includes("Russian")) && <img src={russiaFlag} style={{width: '1rem'}}></img> }
                    { (battle.result.includes("Ukrainian")) && <img src={ukraineFlag} style={{width: '1rem'}}></img> }
                    { (battle.result.includes("Ongoing")) && <small className="result">Ongoing</small> }
                    <p><strong>{ battle.oblast }</strong> oblast.</p>
                    <p>Part of the <strong>{ battle.theatre } theatre</strong>.</p>
                    <small className="date">{ battle.startDate } - { battle.endDate }</small>
                </div>
                <div className="read__details">
                    <Link to={`/battles/battle/${battle.id}`} className='Button'>Read details</Link>
                </div>
            </div>
     );
}
 
export default Battle;