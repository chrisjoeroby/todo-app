export const Cards = (props) => {
    const handleComplete = () => {
        props.onTaskComplete(props.id)
    };
    return(
        <div className="card">
            <p>{props.text}</p>
            <button onClick={handleComplete}>
                Complete
            </button>
        </div>
    );
};