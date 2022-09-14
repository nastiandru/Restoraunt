import {Schema, model, connect} from 'mongoose';
const mongoose = require('mongoose');


import { RestaurantRepository } from "./DataStore/RestaurantRepository";


const restaurantRepository = new RestaurantRepository();

// if restaurant collection is empty, populate it with some data
population();

async function population() 
{
    await mongoose.connect('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority');
    // check if restaurant collection exists
    await mongoose.connection.db.listCollections({ name: 'Restaurant' })
        .next(function (err: any, collinfo: any) 
        {
            if (collinfo) 
            {
                console.log("Restaurant collection exists");
            } 
            else 
            {
                restaurantRepository.populateRestaurants();
            }
        });
}