const connectDB = require("../config/db")
connectDB()

const categoryData = require("./categories")
const productData = require("./products")

const Category = require("../models/CategoryModel")
const Product = require("../models/ProductModel")

const importData = async () => {
    try {
        await Category.collection.dropIndexes()
        await Product.collection.dropIndexes()

        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})

        await Category.insertMany(categoryData)
        await Product.insertMany(productData)

        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while proccessing seeder data", error)
        process.exit(1);
    }
}
importData()
 
