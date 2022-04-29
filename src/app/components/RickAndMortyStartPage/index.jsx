import './style.css';
import BgGif from '../../picture/start-page.gif';
import { NavLink } from 'react-router-dom';

export function RickAndMortyStartPage() {
    return (
        <div className="inner">
            <div className="bg-box">
                <div className="start-page__img">
                    <img className="bg" src={BgGif} alt="Фон" />
                </div>
                <div className="link-box">
                    <NavLink to="/characters" className="start-link">
                        START
                    </NavLink>
                </div>                
            </div>
        </div>
    )
}