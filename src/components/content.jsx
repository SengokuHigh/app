
export const Content = (props) => {
  if(props.data){
    if(props.data.position  === 'right'){
      return (
        <div id={props.data ? props.data.id : "content"} className="content">
        <div className='overlay'>
          <div className="container">
            <div className="row">
                  <div className="col-xs-12 col-md-6 left">
                    <img src={props.data ? props.data.image : ""} className="img-responsive" alt="" />
                  </div>
                  <div className="col-xs-12 col-md-6 right">
                    <div>
                      <h2 className="title">{props.data ? props.data.title : "loading..."}</h2>
                      <h2 className="subtitle">{props.data ? props.data.subtitle : "loading..."}</h2>

                      {props.data
                        ? props.data.paragraph.map((d, i) => (
                          <p className='para'>
                            <h3>title</h3>
                          <h3>{`${d.title}`}</h3>{`${d.text}`}</p>
                          ))
                        : 'Loading...'}
                      
                    </div>
                  </div>
            </div>
          </div>
          </div>
        </div>
      );
    }else{
      if(props.data.position  === 'left'){
        return (
          <div id={props.data ? props.data.id : "content"} className="content">
          <div className='overlay'>
            <div className="container">
            <div className="row">
                      <div className="col-xs-12 col-md-6 left">
                        <div className="title-text">
                      <h2 className="title">{props.data ? props.data.title : "loading..."}</h2>
                      <h2 className="subtitle">{props.data ? props.data.subtitle : "loading..."}</h2>
                      {props.data
                        ? props.data.paragraph.map((d, i) => (
                          <p className='para'>
                          <h3>{`${d.title}`}</h3>{`${d.text}`}</p>
                          ))
                        : 'Loading...'}
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-6 right">
                        <img src={props.data ? props.data.image : ""} className="img-responsive" alt="" />
                      </div>
                    </div>
            </div>
            </div>
          </div>
        );
      }else{  
        return (
          <div id={props.data ? props.data.id : "content"} className="content"> 
          <div className='overlay'>
            <div className="container">
            <div className="row">
                      <div className="col-xs-12 col-md-12 center">
                        <div className="title-text-centered">
                      <h2 className="title">{props.data ? props.data.title : "loading..."}</h2>
                      <h2 className="subtitle">{props.data ? props.data.subtitle : "loading..."}</h2>
                      {props.data
                        ? props.data.paragraph.map((d, i) => (
                          <p className='para'>
                          <h3>{`${d.title}`}</h3>{`${d.text}`}</p>
                          ))
                        : 'Loading...'}
                        </div>
                      </div>
              </div>
            <div className="row">
                      <div className="col-xs-12 col-md-12">
                        <img src={props.data ? props.data.image : ""} className="img-responsive" alt="" />
                      </div>
              </div>
              </div></div>
          </div>
        );
        
      }
    }
  }else{
    return (   
    <div id={props.data ? props.data.id : "content"} className="content">
    <div className='overlay'>
    <div className="container">
    <div className="row">
              <div className="col-xs-12 col-md-6">
                <div className="title-text">
                      <h2 className="title">{props.data ? props.data.title : "loading..."}</h2>
                      <h2 className="subtitle">{props.data ? props.data.subtitle : "loading..."}</h2>
                </div>
              </div>
            </div>
            </div>
    </div>
  </div>)
  }

};
