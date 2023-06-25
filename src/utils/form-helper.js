import {navigate} from 'gatsby'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const handleSubmitContactForm = async (values, actions) => {
  actions.setSubmitting(true)
  fetch('/', {
    method: 'POST',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    body: encode({'form-name': 'contact-form', ...values})
  })
    .then(() => {
      console.log('success')
      actions.resetForm()
    })

    .catch((error) => console.log(error))
    .finally(() => {
      actions.setSubmitting(false)
      navigate('/success')
    })
}

export {handleSubmitContactForm}
