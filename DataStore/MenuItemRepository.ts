import {Schema, model, connect} from 'mongoose';
import MenuItem from '../Models/EmployeeModel';
import Product from '../Models/ProductModel';

export class MenuItemRepository
{
    MenuItemSchema = new Schema<MenuItem>(
        {
            menuItemId: {type: Number, required: true},
            name: {type: String, required: true},
            price: {type: Number, required: true},
            type: {type: Number, required: true},
            description: {type: String, required: true},
            products: 
        });
}