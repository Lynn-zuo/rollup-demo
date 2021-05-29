function util1 () {
  const a = 1
  const b = 222
  window.c = 'c'
  console.log('util1')
  return b
}
let get = () => {
  util1()
  let a = 1
  console.log(a)
  function util3 () {
    return 'util3'
  }

  const getName = new Mixer1()

  console.log(getName.show())

  return a
}
get()