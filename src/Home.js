import Header from "./components/Header";
import ArticleBig from "./components/ArticleBig";
import SortNews from "./components/SortNews";
import Battle from "./components/Battle";
import SortBattles from "./components/SortBattles";
import './css/Home.css';

const Home = ({ news, battles }) => {
    return ( 
        <>
            <div className="Home">
                <Header />
                <h2>Latest news</h2>
                <ArticleBig article = { news[0] } />
                <SortNews news = { news } />
                <h2>Ongoing battles</h2>
                { battles.filter((battle) => battle.result === "Ongoing").map((battle) => (<Battle battle = { battle } key={battle.id} />) )}
                <SortBattles />
            </div>
        </>
     );
}
 
export default Home;