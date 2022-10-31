import { Link } from "react-router-dom";
import './../css/ArticleSmall.css';

const ArticleSmall = ({ article }) => {
    const { title, subtitle, category, id } = article;
    return ( 
        <>
            <div className="ArticleSmall">
                <div className="details">
                    <small className='description'>{ category }</small>
                    <h3 className="title">{ title }</h3>
                    <small className='subtitle'>{ subtitle }</small>
                </div>
                <div className="button">
                <Link to={`/news/article/${id}`} className='Button'>Read more</Link>
                </div>
            </div>
        </>
    );
}
 
export default ArticleSmall;