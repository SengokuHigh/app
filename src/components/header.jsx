export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
        <div className='overlay2'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-md-6 intro-text'>
              <div className='intro-text-overlay'>
              {(props.data && props.data.logo) ? <img src={props.data.logo} className="img-responsive logo" alt="" /> : ""}  


                    
                <h1 className ="logo-text">
                  {props.data ? props.data.logoText : 'Loading'}
                  <span></span>
                </h1>
                <h2 className ="logo-subtext">
                  {props.data ? props.data.logoSubText : 'Loading'}
                  <span></span>
                </h2>
                <h2>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h2>
                  {props.data
                        ? props.data.paragraph.map((d, i) => (
                          <p>{d ? d.text : 'Loading'}</p>
                          ))
                        : 'Loading...'}

                    {props.data
                        ? props.data.links.map((d, i) => (
                          <a 
                          id={(d && d.link) ? d.id : "intro-button-id"} 
                          href={d ? d.link : 'Loading'}
                          className='btn btn-custom btn-lg page-scroll intro-button'
                        >
                          {d ? d.linkeName : 'Loading'}
                        </a>
                          ))
                        : 'Loading...'}
                        </div>
              </div>
              <div className='col-xs-12 col-md-6'>
                <img src={props.data ? props.data.image : ""} className="img-responsive intro-image" alt="" />{" "}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
