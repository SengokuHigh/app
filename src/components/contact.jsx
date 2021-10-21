import { useState } from 'react'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  return (
    <div>
      <div id='contact'>
        <div className='container'>
            <div className='row'>
                <h2>Get In Touch</h2>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fab fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.instagram : '/'}>
                      <i className='fab fa-instagram'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.discord : '/'}>
                      <i className='fab fa-discord'></i>
                    </a>
                  </li>
                </ul>
            &copy; 2021 Sengoku High
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
