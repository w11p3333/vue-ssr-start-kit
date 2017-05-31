export function fetchMockData () {
  return new Promise(resolve => {
    setTimeout(_ => {
      resolve({
        'result': 1,
        'data': 'Hello World From Server Side'
      })
    }, 1000)
  })
}
