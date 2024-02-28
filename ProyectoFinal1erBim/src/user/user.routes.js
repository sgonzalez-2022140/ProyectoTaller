import express from 'express'
import {
    validateJwt,
    isAdmin,
    isClient
} from '../middlewares/validate-jwt.js'

import {
    register,
    login,
    deleteUser,
    updateUser
} from './user.controller.js'

const api = express.Router()

//rutas publicas
api.post('/register', register)
api.post('/login', login)

//Rutas privadas
api.get('/test', [validateJwt, isAdmin])
api.put('/updateUser/:id', [validateJwt, isAdmin], updateUser) //El validate es para validar con token
api.delete('/deleteUser/:id', deleteUser)

export default api