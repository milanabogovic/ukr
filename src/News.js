import { useParams, Link } from "react-router-dom";
import ArticleSmall from "./components/ArticleSmall";
import Header from "./components/Header";
import './css/News.css';

const News = ({ news }) => {
    const { category } = useParams();
    return ( 
        <div className="News">
            <Header />
            <h2><span>{ category }</span> news</h2>
            { news.filter((article) => {
                if (category === "all") {
                    return article;
                } else {
                    return article.category === category;
                }}).map((article) => {
                    return (
                        <ArticleSmall article = { article } key = { article.id }/>
                    )
                })
            }
        </div>
     );
}
 
export default News;