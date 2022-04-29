import './style.css';

export function SearchBox(props) {
    
    const { setFormState, formState } = props;


    function statusFilter(e) {
        const status = e.target.value;
        setFormState({ ...formState, status });
    }

    function statusGender(e) {
        const gender = e.target.value;
        setFormState({ ...formState, gender });
    }

    function statusType(e) {
        const type = e.target.value;
        setFormState({ ...formState, type });
    }

    function statusSpecies(e) {
        const species = e.target.value;
        setFormState({ ...formState, species });
    }




    return (
        <div className="character-filter">
            <input onChange={statusFilter} value={formState.status} placeholder="Status" className="filter-input" type="text" />
            <input onChange={statusGender} value={formState.gender} placeholder="Gender" className="filter-input" type="text" />
            <input onChange={statusType} value={formState.type} placeholder="Type" className="filter-input" type="text" />
            <input onChange={statusSpecies} value={formState.species} placeholder="Species" className="filter-input" type="text" />
        </div>
    )
}