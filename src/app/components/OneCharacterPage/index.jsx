import './style.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import getCharacter from '../../graphQuery/oneCharacterQuery';
import { EpisodeItem } from '../EpisodeItem/index';
import Loader from "../../picture/loader.gif";

export function OneCharacterPage() {
    const { id } = useParams();




    const { data, loading } = useQuery(getCharacter, {
        variables: { id }
    });

    const [characterState, setCharacterState] = useState(data?.character);


    useEffect(() => {
        setCharacterState(data?.character || []);
    }, [data]);


    return (
        <div className="one-character__wrapper">
            {loading ?
                <div className="loading-box">
                    <img src={Loader} alt="Loader" />
                    <h2 className="loader-title">Loading...</h2>
                </div>
                :
                <div>
                    <div className="one-character__box">
                        <div className="one-character__img">
                            <img src={characterState?.image} alt="Картинка персонажа" />
                        </div>
                        <div className="one-character__info-box">
                            <h2 className="one-character__character-title">
                                Character info
                            </h2>
                            <div className="one-character__description">
                                <h2 className="one-character__info">Name</h2>
                                <h2 className="one-character__info">{characterState?.name}</h2>
                            </div>
                            <div className="one-character__description">
                                <h2 className="one-character__info">Gender</h2>
                                <h2 className="one-character__info">{characterState?.gender}</h2>
                            </div>
                            <div className="one-character__description">
                                <h2 className="one-character__info">Species</h2>
                                <h2 className="one-character__info">{characterState?.species}</h2>
                            </div>
                            <div className="one-character__description">
                                <h2 className="one-character__info">Status</h2>
                                <h2 className="one-character__info">{characterState?.status}</h2>
                            </div>
                            <div className="one-character__description">
                                <h2 className="one-character__info">Type</h2>
                                <h2 className="one-character__info">{characterState?.type}</h2>
                            </div>
                            <div className="one-character__location">
                                <h2 className="one-character__location-title">
                                    Location
                                </h2>
                                <div className="one-character__location-info">
                                    <div className="one-character__location-item">
                                        <p className="one-character__location-item-text">
                                            Dimension
                                        </p>
                                        <p className="one-character__location-item-text">
                                            {characterState?.location?.dimension}
                                        </p>
                                    </div>
                                    <div className="one-character__location-item">
                                        <p className="one-character__location-item-text">
                                            Name
                                        </p>
                                        <p className="one-character__location-item-text">
                                            {characterState?.location?.name}
                                        </p>
                                    </div>
                                    <div className="one-character__location-item">
                                        <p className="one-character__location-item-text">
                                            Type
                                        </p>
                                        <p className="one-character__location-item-text">
                                            {characterState?.location?.type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="one-character__origin">
                                <h2 className="one-character__origin-title">
                                    Origin
                                </h2>
                                <div className="one-character__origin-info">
                                    <div className="one-character__origin-item">
                                        <p className="one-character__origin-item-text">
                                            Dimension
                                        </p>
                                        <p className="one-character__origin-item-text">
                                            {characterState?.origin?.dimension}
                                        </p>
                                    </div>
                                    <div className="one-character__origin-item">
                                        <p className="one-character__origin-item-text">
                                            Name
                                        </p>
                                        <p className="one-character__origin-item-text">
                                            {characterState?.origin?.name}
                                        </p>
                                    </div>
                                    <div className="one-character__origin-item">
                                        <p className="one-character__origin-item-text">
                                            Type
                                        </p>
                                        <p className="one-character__origin-item-text">
                                            {characterState?.origin?.type}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="one-character__episodes">
                        <h2 className="one-character__episodes-title">Episodes</h2>
                        <div className="one-character__episodes-info">
                            {characterState?.episode?.map((item) => <EpisodeItem item={item} />)}
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}

