export const Card = ({ name, id, url, object, ...props }) => {
  console.log(props);
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>ID:{id}</p>
      <p>Object type: {object}</p>
      {url && <p>URL: {url}</p>}
    </div>
  );
};
