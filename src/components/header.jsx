export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text slide'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>

                    <img src={props.data ? props.data.image : ""} className="img-responsive" alt="" />{" "}
                
                {
                  (props.data && props.data.link)?
                <a
                  href={props.data ? props.data.link : 'Loading'}
                  className='btn btn-custom btn-lg page-scroll'
                >
                  {props.data ? props.data.linkeName : 'Loading'}
                </a>
                :
                <span></span>
                }
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
