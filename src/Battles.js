import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Header from "./components/Header";
import Battle from "./components/Battle";

const Battles = ({ battles }) => {
    const { property, value } = useParams();
    const navigate = useNavigate();
        return ( 
        <div className="Battles">
            <Header />
            {(property === "all" && value === "battles") && battles.map((battle) => {
                    return <Battle battle={battle} key={ battle.id }/>
                })
            }
            { battles.filter((battle) => {
                return battle.oblast === value || battle.theatre === value || battle.result === value;
            }).map((battle) => {
                return <Battle battle={battle} key={ battle.id }/>
            }) }
            <button onClick={() => navigate(-1)}>Go back</button>
        </div>
     );
}
 
export default Battles;