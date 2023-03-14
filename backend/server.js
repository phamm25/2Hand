const e = require('express')
const express = require('express')
const app = express()
const port = 3001

const apiRoutes = require("./routes/apiRoutes")

app.get('/', (req, res,next) => {
  const Product = require('./models/productModel')
  try{
    const product = new Product
    product.name = "new named product"
    // const productSave
  }catch(error){
    console.log(error)
  }
  res.json({message: 'API running'})
})

// mongodb connection
const connectDB = require('./config/db')
connectDB()

app.use('/api',apiRoutes)

app.use((error, req, res, next) => {
  console.log(error)
  next(error)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})