const express = require('express')
const axios = require('axios')
const app = express()
const puerto = 3001
const path = require('path')

app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor Express!')
})

app.get('/search/:query', async (req, res) => {
  const query = req.params.query
  try {
    const apiUrl = 'https://api.mercadolibre.com/sites/MLA/search?q='+query
    const response = await axios.get(apiUrl)
    res.json(response.data);
  } catch (error) {
    console.error('Error al hacer la llamada a la API:', error)
    res.status(500).json({ error: 'Error en la llamada a la API' })
  }
})

app.get('/item/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const apiUrl = 'https://api.mercadolibre.com/items/'+userId
    const response = await axios.get(apiUrl)
    res.json(response.data);
  } catch (error) {
    console.error('Error al hacer la llamada a la API:', error)
    res.status(500).json({ error: 'Error en la llamada a la API' })
  }
})

app.get('/description/:id', async (req, res) => {
  const userId = req.params.id
  try {
    const apiUrl = 'https://api.mercadolibre.com/items/'+userId+'/description'
    const response = await axios.get(apiUrl)
    res.json(response.data);
  } catch (error) {
    console.error('Error al hacer la llamada a la API:', error)
    res.status(500).json({ error: 'Error en la llamada a la API' })
  }
})

app.listen(puerto, () => {
  console.log(`Servidor Express escuchando en el puerto ${puerto}`)
})

app.use(express.static(path.join(__dirname, 'client-react/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client-react/build', 'index.html'))
});