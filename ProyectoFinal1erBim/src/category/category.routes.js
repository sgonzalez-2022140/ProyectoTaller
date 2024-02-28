import express from 'express'
import { test, saveCategory, getAllCategories, deleteCategory, updateCategory} from "./category.controller.js"

const api = express.Router();

//Rutas de declaraciones
api.get('/test', test)
api.post('/saveCategory', saveCategory)
api.get('/getAllCategories', getAllCategories)

api.delete('/deleteCategory/:id', deleteCategory)

api.put('/updateCategory/:id', updateCategory)

export default api