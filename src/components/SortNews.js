import { Link } from 'react-router-dom';
import './../css/SortNews.css'

const SortNews = ({ news }) => {
    return ( 
        <div className='SortNews'>
            <p>Read more news:</p>
            <Link to='/news/military' news = {news} className='sort__button'>Military</Link>
            <Link to='/news/economy' news = {news} className='sort__button'>Economy</Link>
            <Link to='/news/all' news = {news} className='sort__button'>All News</Link>
        </div>
     );
}
 
export default SortNews;