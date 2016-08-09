window.addEventListener('keydown', event => {
  if (event.code === 'Backspace' &&
     event.target.tagName !== 'INPUT' &&
     event.target.tagName !== 'TEXTAREA') {
    history.go(-1);
  }
})
