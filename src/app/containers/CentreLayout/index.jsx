import './style.css';


export function CentreLayout(props) {
    const { children } = props;
    return (
        <div className='container'>
            { children }
        </div>
    )
}