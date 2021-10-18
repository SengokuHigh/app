export const Features = (props) => {
  return (
    <div  id={props.data ? props.data.id : "features"} className='features text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>{props.data ? props.data.title : "Features"}</h2>
          
          <p>{props.data ? props.data.description : ""}
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.features.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3 features-section'>
                  {' '}
                  <img src={d.image ? d.image : ""} className="img-responsive" alt="" />
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
