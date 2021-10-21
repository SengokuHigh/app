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
                    <img src={props.data ? props.data.logo : ""} className="img-responsive logo" alt="" />
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
                          href={d ? d.link : 'Loading'}
                          className='btn btn-custom btn-lg page-scroll'
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
