'use strict'

import { Router } from 'express'
import {
    addProduct, getAllProducts, getAProduct, updateProduct, getNoProducts, 
    deleteProducts, search, viewProductbyCategory
} from './product.controller.js'

import { validateJwt, isAdmin, isClient } from '../middlewares/validate-jwt.js'

const api = Router()

//GET
//ver productos sin unidades
api.get('/getNoProducts', getNoProducts)
//Ver todo el catalogo de productos
api.get('/getAllProducts', getAllProducts)
//Encontrar 1 producto
api.get('/getAProduct/:id', getAProduct)

api.get('/viewProductbyCategory/:id', viewProductbyCategory)

//POST
//Buscar por nombre
api.post('/search', search)
//Agregar productos
api.post('/addProduct', addProduct)


//actualizar producto
api.put('/updateProduct/:id', updateProduct)

//Eliminar
api.delete('/deleteProducts/:id', deleteProducts)





export default api