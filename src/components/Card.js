export const Card = ({ id, url, object, ...props }) => {
  //   console.log(props);
  const name =
    props.name || props.properties?.Name.title[0].plain_text || "[no name]";
  return (
    <div className="card">
      <h2>
        {object}: {name}
      </h2>
      <p>ID:{id}</p>
      <p>Object type: {object}</p>
      {url && <p>URL: {url}</p>}
    </div>
  );
};
