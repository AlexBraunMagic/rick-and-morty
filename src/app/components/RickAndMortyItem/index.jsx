import './style.css';
import { NavLink } from 'react-router-dom';

export function RickAndMortyItem(props) {
    const { name, image, id } = props.item;
    return (
        <div className="characters-item">
            <div className="character__img-box">
                <img className="character__img" src={image} alt="Картинка персонажа" />
            </div>
            <div className="character__info-box">
                <h2 className="character__title">{name}</h2>
            </div>
            <div className="link-box">
                <NavLink to={`/one_character/${id}`} className="one-character-btn">
                    Open
                </NavLink>
            </div>
        </div>
    )
}