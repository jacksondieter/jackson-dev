import React, { useState,useEffect,useRef } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

function Newsletter(props) {
  const { state, onSubmit } = useNewsletter()

  return (
    <div className="subscribe">
      <h5 className="info-text">
        Join to the newsletter list. We keep you posted.
      </h5>
      <div className="row ">
        <div className="col">
          <form
            className="form-inline justify-content-md-center"
            onSubmit={onSubmit}
          >
            <div className="input-group">
              <label className="sr-only" htmlFor="inputEmail">
                Email address
              </label>
              <input
                type="email"
                className="form-control transparent"
                placeholder="Your email here..."
                aria-label="Your email here..."
                name="yourmail"
              />
              <div className="input-group-append">
                <button className="btn btn-secondary btn-fill" type="submit">
                  Notify Me!
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      {state.showSuccess ? (
        <div className={"alert alert-success"}>{state.successMsg}</div>
      ) : null}
      {state.showError ? (
        <div className={"alert alert-danger"}>{state.errorMsg}</div>
      ) : null}
    </div>
  )
}

export default Newsletter

function useNewsletter() {
  const initialState = {
    showSuccess: false,
    showError: false,
    successMsg: "",
    errorMsg: "",
  }
  const [state, setState] = useState(initialState)
  const [email, setEmail] = useState('')
  const isInitalMount = useRef(true)


  const onSubmit = async event => {
    event.preventDefault()
    const emailVal = event.target.yourmail.value || null
    console.log(emailVal)
    if (!emailVal) {
      return
    }
    setEmail(emailVal)
  }

  useEffect(() => {
    async function delay(time) {
      return new Promise(function (resolve) {
        setTimeout(resolve, time)
      })
    }
    async function sendEmail() {
      try {
        const result = await addToMailchimp(email, {})
        const msg = result.msg.split('<')[0]
        setState({
          showSuccess: true,
          successMsg: msg,
          showError: false,
          errorMsg: "",
        })
      } catch (err) {
        setState({
          showSuccess: false,
          successMsg: "",
          showError: true,
          errorMsg: err,
        })
      }finally{
        delay(4000).then(()=>setState(initialState))
      }
    }
    if(isInitalMount.current){
      isInitalMount.current = false
    }else{
      sendEmail()
    }
    
  }, [email])

  return { state, onSubmit }
}
