import './style.css';
import RickMortyHeaderJpg from '../../picture/RickMortyHeader1.png';
import { RickAndMortyAppWrapper } from '../../components/RickAndMortyAppWrapper/index';
import { RickAndMortyStartPage } from '../../components/RickAndMortyStartPage/index';
import { Route, Routes } from "react-router-dom";
import { OneCharacterPage } from '../../components/OneCharacterPage';

export function RickAndMortyApp() {
    return (
        <div className="wrapper">
            <header className="header">
                <img className="header-bg" src={RickMortyHeaderJpg} alt="Фон header" />
            </header>
            <Routes>
                <Route path="/" element={<RickAndMortyStartPage />} />
                <Route path="/characters" element={<RickAndMortyAppWrapper />}/>
                <Route path="/one_character/:id" element={<OneCharacterPage />}/>
            </Routes>
        </div>

    )
}