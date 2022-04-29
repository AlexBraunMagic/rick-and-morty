import './style.css';


export function EpisodeItem(props) {

    const { name, episode, air_date } = props.item;

    return (
        <div className="one-character__episodes-item">
            <p className="one-character__episodes-item-text">
                {episode}
            </p>
            <p className="one-character__episodes-item-text">
                {air_date}
            </p>
            <p className="one-character__episodes-item-text">
                {name}
            </p>
        </div>
    )
}