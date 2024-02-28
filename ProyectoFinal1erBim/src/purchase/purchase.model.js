'use strict'

import { Schema, model } from 'mongoose'

const purchaseSchema = Schema({
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['CREATED', 'ACCEPTED', 'CANCELLED', 'COMPLETED'],
        default: 'CREATED',
        required: true
    },
    product: {
        type: Schema.ObjectId,
        ref: 'product',
        required: true
       
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user',
        required: true
        
    },
    
}, {
    versionKey: false
}

)

export default model('purchase', purchaseSchema)