import { useParams, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import './css/Report.css';

const Report = ({ battles }) => {
    const { battleId } = useParams();
    return ( 
        <div className="Report">
            <Header />
            { battles.filter((_battle) => {
                return _battle.id === Number(battleId);
            }).map((_battle) => {
                return (
                    <div className="battle__report" key={_battle.id}>
                        <small className="result">{ _battle.result }</small>
                        <h2>{ _battle.name }</h2>
                        <small className="location">{_battle.oblast} oblast. Part of {_battle.theatre} theatre.</small>
                        {/* <img src={ require(`./img/${ _battle.image }`) }></img> */}
                        <small className="subtitle">{ _battle.subtitle }</small>
                        <p>{ _battle.content }</p>
                    </div>
                )
            }) }
        </div>
     );
}
 
export default Report;