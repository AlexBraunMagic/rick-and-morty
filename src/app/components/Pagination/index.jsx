import './style.css';

export function Pagination(props) {
    const { currentPage, data, pageChange } = props;
    const { next, pages, prev } = data || {};
    return (
        <div className="pagination">
            <button disabled={!prev} onClick={() => pageChange(prev)} className="pagination__btn">
                Prev
            </button>
            <p className="pagination__page">{currentPage}</p>
            <span className="pagination__page">-</span>
            <p className="pagination__page">{pages || ''}</p>
            <button disabled={!next} onClick={() => pageChange(next)} className="pagination__btn">
                Next
            </button>
        </div>
    )
}

