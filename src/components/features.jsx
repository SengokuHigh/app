export const Features = (props) => {
  return (
    <div  id={props.data ? props.data.id : "features"} className='features text-center'>
    <div className='overlay'>
      <div className='container'>

        <div className='col-md-10 col-md-offset-1 section-title'>

        <h2 className="title">{props.data ? props.data.title : "Features"}</h2>
        <h2 className="subtitle">{props.data ? props.data.subtitle : "loading..."}</h2>
          <p>{props.data ? props.data.description1 : ""}</p>
          <div className='row'>
            {props.data
            ? props.data.features.map((d, i) => (
              <div className='col-xs-6 col-md-1 features-section-wrapper'>
                <div key={`${d.title}-${i}`} className='features-section'>
                  {' '}
                  <img src={d.image ? d.image : ""} className="img-responsive" alt="" />
                  <h3 className="title">{d.title}</h3>
                  <h3 className="subtitle">{d.subtitle}</h3>
                  <p>{d.text}</p>
                </div>
                </div>
              ))
            : 'Loading...'}
          </div>

           <p>{props.data ? props.data.description2 : ""} </p>

           </div>
        </div>


      </div>
    </div>
  )
}
