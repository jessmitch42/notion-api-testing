export const Card = ({name, id, url}) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>ID:{id}</p>
            <p>URL: {url}</p>
        </div>
    )
}