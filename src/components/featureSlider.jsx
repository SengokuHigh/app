
import Slider from 'infinite-react-carousel';

export const FeatureSlider = (props) => {
  return (
    <div  id={props.data ? props.data.id : "features"} className='features text-center'>
      <div className='container'>
          <h2>{props.data ? props.data.title : "Features"}</h2>
          
          <p>{props.data ? props.data.description1 : ""}</p>
          {props.data?
            <Slider slidesPerRow="3" autoplay="true" autoplaySpeed	="3000" dots>
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
          </Slider>
          : ""}
          <p>{props.data ? props.data.description2 : ""}
          </p>
      </div>


      
    </div>




  )
}
