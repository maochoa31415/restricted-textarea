(() => {
  window.addEventListener('load', function() {
    const MAX_LENGTH = 250
    const formEl = document.querySelector('#form-container')

    if (formEl) {
      const messageEl = formEl.elements['message']

      messageEl.addEventListener('input', function(event) {
        const messageLength = event.target.value.length

        if(messageLength >= MAX_LENGTH) {
          formEl.classList.add('error')
          formEl.elements['counter'].value = `${MAX_LENGTH} / ${MAX_LENGTH}`
        } else {
          formEl.classList.remove('error')
          formEl.elements['counter'].value = `${messageLength} / ${MAX_LENGTH}`
        }
      })
    }
  })
})()
