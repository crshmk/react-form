const scrollToInvalidField = () => {
  setTimeout(() => {
    document.querySelectorAll("label[class]:not([style])")
    const firstInvalidField = document.querySelector('.invalid:not(.no-invalid)')
    if(!firstInvalidField) return 
    firstInvalidField.scrollIntoView({behavior: 'smooth', block: 'center'})
  }, 200)
}

export default scrollToInvalidField
