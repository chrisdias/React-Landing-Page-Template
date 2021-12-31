// import { useState } from 'react'
// import emailjs from 'emailjs-com'

// const initialState = {
//   name: '',
//   email: '',
//   message: '',
// }
export const Contact = (props) => {
  // const [{ name, email, message }, setState] = useState(initialState)

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setState((prevState) => ({ ...prevState, [name]: value }))
  // }
  // const clearState = () => setState({ ...initialState })

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log(name, email, message)
  //   emailjs
  //     .sendForm(
  //       'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text)
  //         clearState()
  //       },
  //       (error) => {
  //         console.log(error.text)
  //       }
  //     )
  // }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contact Info</h2>
              
              
                  <div className='col-md-3 contact-info'>
                    <div className='contact-item'>
                      {/* <h3>Contact Info</h3> */}
                      <p>
                        <span>
                          <i className='fa fa-map-marker'></i> Address
                        </span>
                        {props.data ? props.data.address : 'loading'}
                      </p>
                    </div>
                    {/* <div className='contact-item'>
                      <p>
                        <span>
                          <i className='fa fa-phone'></i> Phone
                        </span>{' '}
                        {props.data ? props.data.phone : 'loading'}
                      </p>
                    </div> */}
                    <div className='contact-item'>
                      <p>
                        <span>
                          <i className='fa fa-envelope-o'></i> Email
                        </span>{' '}
                        {props.data ? props.data.email : 'loading'}
                      </p>
                    </div>
                  </div>
                  {/* <div className='col-md-12'>
                    <div className='row'>
                      <div className='social'>
                        <ul>
                          <li>
                            <a href={props.data ? props.data.facebook : '/'}>
                              <i className='fa fa-facebook'></i>
                            </a>
                          </li>
                          <li>
                            <a href={props.data ? props.data.twitter : '/'}>
                              <i className='fa fa-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a href={props.data ? props.data.youtube : '/'}>
                              <i className='fa fa-youtube'></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
              </div>

            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
          <p>
            Thank you Issaaf Kattan for the <a href='https://github.com/issaafalkattan/React-Landing-Page-Template'>site template</a> (<a href="https://www.buymeacoffee.com/issaaf">buy Issaaf a ☕️</a>!) 
            My fork of Issaaf's repo is <a href='https://github.com/chrisdias/React-Landing-Page-Template'> here</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
