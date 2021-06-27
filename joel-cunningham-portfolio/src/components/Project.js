function Project(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong href={props.link}>{props.name}</strong> 
            </li>
            <li>
              <strong href={props.repo}>Git Repository:</strong>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Project;
  