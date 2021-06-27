
function Project(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong><a href={props.link}>{props.name}</a></strong> 
            </li>
            <li>
              <strong><a href={props.repo}>Git Repository</a></strong>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Project;
  