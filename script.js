// Get Quote From API
async function getQuote() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  const apiUrl =
    'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

  try {
    const res = await fetch(proxyUrl + apiUrl)
    const data = await res.json()

    console.log(data)
  } catch (err) {
    // getQuote()
    console.log(JSON.stringify(err))
  }
}

// On Load
getQuote()
