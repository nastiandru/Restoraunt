const mongoose = require('mongoose');
const {Customer} = require('./Models/CustomerModel');
const {Employee} = require('./Models/EmployeeModel');
const {MenuItem} = require ('./Models/MenuItemModel');
const {Order} = require('./Models/OrderModel');
const {Product} = require('./Models/ProductModel');
const {Reservation} = require('./Models/ReservationModel');
const {Restaurant} = require('./Models/RestaurantModel');
const {Table} = require('./Models/TableModel');
import express = require ('express');
import bodyParser = require('body-parser');
import {Request, Response} from 'express';


import { CustomerRepository } from './DataStore/CustomerRepository';
import { EmployeeRepository } from './DataStore/EmployeeRepository';
import { OrderRepository } from './DataStore/OrderRepository';
import { MenuItemRepository } from './DataStore/MenuItemRepository';
import { ProductRepository } from './DataStore/ProductRepository';
import { ReservationRepository } from './DataStore/ReservationRepository';
import { RestaurantRepository } from './DataStore/RestaurantRepository';
import { TableRepository } from './DataStore/TableRepository';
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', router);

const customerRepository = new CustomerRepository();
const employeeRepository = new EmployeeRepository();
const orderRepository = new OrderRepository();
const menuItemRepository = new MenuItemRepository();
const productRepository = new ProductRepository();
const reservationRepository = new ReservationRepository();
const restaurantRepository = new RestaurantRepository();
const tableRepository = new TableRepository();

// REST API for Customer
// get all customers
router.get('/customers', async (req: Request, res: Response) => {
    const customers = await customerRepository.getCustomers();
    if (customers.length > 0) 
        res.status(200).json(customers);
    else if(customers.length === 0)
        res.status(404).json({message: 'Customers list is empty'});
    else
        res.status(404).json({message: 'No customer list found'});
});

// get customer by name
router.get('/customer/:name', async (req: Request, res: Response) => {
    const customer = await customerRepository.getCustomerByName(req.params.name);
    if (customer)
        res.status(200).json(customer);
    else
        res.status(404).json({message: 'Customer ' + req.params.name + ' not found'});
});

// delete customer by name
router.delete('/customer/:name', async (req: Request, res: Response) => {
    const customer = await customerRepository.deleteCustomerByName(req.params.name);
    res.status(200).json('Restaurant ' + req.params.name + ' deleted');
});

// add customer from body
router.post('/customer', async (req: Request, res: Response) => {
    const customer = await customerRepository.addCustomer(req.body);
    res.status(200).json(customer);
});

// update customer from body
router.put('/customer/', async (req: Request, res: Response) => {
    const customer = await customerRepository.updateCustomer(req.body);
    res.status(200).json(customer);
});

// add loyalty points to customer
router.put('/customer/:name/:loyaltyPoints', async (req: Request, res: Response) => {
    const customer = await customerRepository.addLoyaltyPoints(req.params.name, +req.params.points);
    res.status(200).json(customer);
});

// REST API for Employee
// get all employees
router.get('/employees', async (req: Request, res: Response) => {
    const employees = await employeeRepository.getEmployees();
    if (employees.length > 0)
        res.status(200).json(employees);
    else if(employees.length === 0)
        res.status(404).json({message: 'Employees list is empty'});
    else
        res.status(404).json({message: 'No employee list found'});
});

// get employee by id
router.get('/employee/:id', async (req: Request, res: Response) => {
    const employee = await employeeRepository.getEmployeeById(req.params.id);
    if (employee)
        res.status(200).json(employee);
    else
        res.status(404).json({message: 'Employee if id: ' + req.params.id + ' not found'});
});

// get employee by name
router.get('/employee/:name', async (req: Request, res: Response) => {
    const employee = await employeeRepository.getEmployeeByName(req.params.name);
    if (employee)
        res.status(200).json(employee);
    else
        res.status(404).json({message: 'Employee ' + req.params.name + ' not found'});
});

// delete employee by id
router.delete('/employee/:id', async (req: Request, res: Response) => {
    const employee = await employeeRepository.deleteEmployeeById(req.params.id);
    res.status(200).json('Employee ' + req.params.id + ' deleted');
});

// delete employee by name
router.delete('/employee/:name', async (req: Request, res: Response) => {
    const employee = await employeeRepository.deleteEmployeeByName(req.params.name);
    res.status(200).json('Employee ' + req.params.name + ' deleted');
});

// add employee from body
router.post('/employee', async (req: Request, res: Response) => {
    const employee = await employeeRepository.addEmployee(req.body);
    res.status(200).json(employee);
});

// update employee from body
router.put('/employee/', async (req: Request, res: Response) => {
    const employee = await employeeRepository.updateEmployee(req.body);
    res.status(200).json(employee);
});

// get employees by restaurant name
router.get('/employees/:restaurantName', async (req: Request, res: Response) => {
    const employees = await employeeRepository.getEmployeesByRestaurantName(req.params.restaurantName);
    if (employees.length > 0)
        res.status(200).json(employees);
    else if(employees.length === 0)
        res.status(404).json({message: 'Employees list is empty'});
    else
        res.status(404).json({message: 'No employee list found'});
});

// REST API for MenuItem
// get all menu items


// REST API for Product
// get all products
router.get('/products', async (req: Request, res: Response) => {
    const products = await productRepository.getProducts();
    if (products.length > 0)
        res.status(200).json(products);
    else if(products.length === 0)
        res.status(404).json({message: 'Products list is empty'});
    else
        res.status(404).json({message: 'No product list found'});
});

// get product by id
router.get('/product/:id', async (req: Request, res: Response) => {
    const product = await productRepository.getProductById(req.params.id);
    if (product)
        res.status(200).json(product);
    else
        res.status(404).json({message: 'Product if id: ' + req.params.id + ' not found'});
});

// delete product by id
router.delete('/product/:id', async (req: Request, res: Response) => {
    const product = await productRepository.deleteProductById(req.params.id);
    res.status(200).json('Product ' + req.params.id + ' deleted');
});

// add product from body
router.post('/product', async (req: Request, res: Response) => {
    const product = await productRepository.addProduct(req.body);
    res.status(200).json(product);
});

// update product from body
router.put('/product/', async (req: Request, res: Response) => {
    const product = await productRepository.updateProduct(req.body);
    res.status(200).json(product);
});

// REST API for Reservation
// get all reservations
router.get('/reservations', async (req: Request, res: Response) => {
    const reservations = await reservationRepository.getReservations();
    if (reservations.length > 0)
        res.status(200).json(reservations);
    else if(reservations.length === 0)
        res.status(404).json({message: 'Reservations list is empty'});
    else
        res.status(404).json({message: 'No reservation list found'});
});

// get reservation by id
router.get('/reservation/:id', async (req: Request, res: Response) => {
    const reservation = await reservationRepository.getReservationById(req.params.id);
    if (reservation)
        res.status(200).json(reservation);
    else
        res.status(404).json({message: 'Reservation if id: ' + req.params.id + ' not found'});
});

// delete reservation by id
router.delete('/reservation/:id', async (req: Request, res: Response) => {
    const reservation = await reservationRepository.deleteReservationById(req.params.id);
    res.status(200).json('Reservation ' + req.params.id + ' deleted');
});

// add reservation from body
router.post('/reservation', async (req: Request, res: Response) => {
    const reservation = await reservationRepository.addReservation(req.body);
    res.status(200).json(reservation);
});

// update reservation from body
router.put('/reservation/', async (req: Request, res: Response) => {
    const reservation = await reservationRepository.updateReservation(req.body);
    res.status(200).json(reservation);
});

// get reservations by customer ID
router.get('/reservations/:customerId', async (req: Request, res: Response) => {
    const reservations = await reservationRepository.getReservationsPerCustomer(req.params.customerId);
    if (reservations.length > 0)
        res.status(200).json(reservations);
    else if(reservations.length === 0)
        res.status(404).json({message: 'Reservations list is empty'});
    else
        res.status(404).json({message: 'No reservation list found'});
});


// REST API for Restaurant
// get all restaurants

router.get('/restaurants', async (req: Request, res: Response) => {
    let restaurants = await restaurantRepository.getRestaurants();
    if (restaurants.length > 0)
        res.json(restaurants);
    else if (restaurants.length == 0)
        res.status(200).json('Restaurant list is empty');
    else
        res.status(404).json('No restaurants found');
    }
);

// get restaurant by name
router.get('/restaurant/:name', async (req: Request, res: Response) => {
    const restaurant = await restaurantRepository.getRestaurantByName(req.params.name);
    if (restaurant)
    res.json(restaurant);
    else
    res.status(404).json('Restaurant not found');

});
//delete restaurant by name
router.delete('/restaurant/:name', async (req: Request, res: Response) => {
        await restaurantRepository.deleteRestaurantByName(req.params.name);
        res.status(200).json('Restaurant deleted');
    });
    
// add a restaurant from body    
router.post('/restaurant', async (req: Request, res: Response) => {
        const restaurant = req.body;
        await restaurantRepository.addRestaurant(restaurant);
        res.status(200).json('Restaurant added');
    });

// update restaurant from body
router.put('/restaurant/', async (req: Request, res: Response) => {
    const restaurant = await restaurantRepository.updateRestaurant(req.body);
    res.status(200).json(restaurant);
});

// REST API for Table
// get all tables
router.get('/tables', async (req: Request, res: Response) => {
    const tables = await tableRepository.getTables();
    if (tables.length > 0)
        res.status(200).json(tables);
    else if(tables.length === 0)
        res.status(404).json({message: 'Tables list is empty'});
    else
        res.status(404).json({message: 'No table list found'});
});

// get table by number
router.get('/table/:number', async (req: Request, res: Response) => {
    const table = await tableRepository.getTableByNumber(+req.params.number);
    if (table)
        res.status(200).json(table);
    else
        res.status(404).json({message: 'Table number: ' + req.params.number + ' not found'});
});

// delete table by number
router.delete('/table/:number', async (req: Request, res: Response) => {
    const table = await tableRepository.deleteTableByNumber(+req.params.number);
    res.status(200).json('Table ' + req.params.number + ' deleted');
});

// add table from body
router.post('/table', async (req: Request, res: Response) => {
    const table = await tableRepository.addTable(req.body);
    res.status(200).json(table);
});

// update table from body
router.put('/table/', async (req: Request, res: Response) => {
    const table = await tableRepository.updateTable(req.body);
    res.status(200).json(table);
});

// get free tables by start date, end date, number of people
router.get('/tables/:startDate/:endDate/:people', async (req: Request, res: Response) => {
    const tables = await tableRepository.getFreeTables(new Date(req.params.startDate), new Date(req.params.endDate), +req.params.people);
    if (tables.length > 0)
        res.status(200).json(tables);
    else if(tables.length === 0)
        res.status(404).json({message: 'Tables list is empty'});
    else
        res.status(404).json({message: 'No table list found'});
});

   

app.listen(3004);