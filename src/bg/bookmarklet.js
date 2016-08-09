window.addEventListener('keydown', event => {
  if (event.code === 'Backspace') history.go(-1)
}, false)