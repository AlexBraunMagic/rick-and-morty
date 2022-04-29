import './style.css';
import { useState, useEffect, useCallback } from 'react';
import { RickAndMortyItem } from '../RickAndMortyItem/index';
import { Pagination } from '../Pagination/index';
import fetchCharacters from '../../graphQuery/graphQuery';
import { useLazyQuery } from '@apollo/react-hooks';
import { useSearchParams } from 'react-router-dom';
import { SearchBox } from '../SearchBox/index';
import { debounce } from 'lodash';
import Loader from '../../picture/loader.gif';



export function RickAndMortyAppWrapper() {



    const [getCharacters, { data, loading }] = useLazyQuery(fetchCharacters);

    const [allCharacters, setAllCharacters] = useState([]);

    useEffect(() => {
        if (!loading) {
            setAllCharacters(data?.characters?.results || []);
        }
    }, [data]);

    const [searchParams, setSearchParams] = useSearchParams();


    const [formState, setFormState] = useState({
        page: parseInt(searchParams.get('page')) || 1,
        status: searchParams.get('status') || '',
        species: searchParams.get('species') || '',
        gender: searchParams.get('gender') || '',
        type: searchParams.get('type') || '',
    });

    function syncQuery(formData) {
        const obj = { ...formData };

        for (const key in obj) {
            if (obj[key] === '' || obj[key] == null) {
                delete obj[key];
            }
        }
        setSearchParams(obj);
    }

    function pageChange(page) {
        setFormState({ ...formState, page });
    }


    const getSearchCharacters = useCallback(
        debounce((formState) => {
            syncQuery(formState);

            return getCharacters({
                variables: formState,
            });
        }, 1000)
        , []);




    useEffect(() => {
        getSearchCharacters(formState);
    }, [formState]);






    return (
        <div className="character-wrapper">
           { loading ? <div className="loading-box">
                <img src={Loader} alt="Loader" />
                <h2 className="loader-title">Loading...</h2>
            </div>
            : 
            <div>
                <SearchBox formState={formState} setFormState={setFormState} />
                <div className="character-list">
                    {allCharacters.map(item => <RickAndMortyItem loading={loading} key={item.id} item={item} />)}
                </div>
                <Pagination pageChange={pageChange} data={data?.characters?.info} currentPage={formState.page} />
            </div>}
        </div>
    )
}