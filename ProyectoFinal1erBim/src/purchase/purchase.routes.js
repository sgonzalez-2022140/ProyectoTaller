'use strict'

import { Router } from 'express'
import {
    purchaseAdd, getPurchases
} from './purchase.controller.js'
import { isClient, validateJwt } from '../middlewares/validate-jwt.js'

const api = Router()

//Rutas privadas para cliente
api.post('/purchaseAdd', [validateJwt], isClient, purchaseAdd)
api.get('/getPurchases', [validateJwt], isClient, getPurchases)

export default api