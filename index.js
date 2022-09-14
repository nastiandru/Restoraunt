"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var mongoose = require('mongoose');
var Customer = require('./CoreBusiness/CustomerModel').Customer;
var Employee = require('./CoreBusiness/EmployeeModel').Employee;
var MenuItem = require('./CoreBusiness/MenuItemModel').MenuItem;
var Order = require('./CoreBusiness/OrderModel').Order;
var OrderItem = require('./CoreBusiness/OrderItemModel').OrderItem;
var Product = require('./CoreBusiness/ProductModel').Product;
var Reservation = require('./CoreBusiness/ReservationModel').Reservation;
var Restaurant = require('./Models/RestaurantModel').Restaurant;
var Table = require('./CoreBusiness/TableModel').Table;
var express = require("express");
var bodyParser = require("body-parser");
var CustomerRepository_1 = require("./DataStore/CustomerRepository");
var EmployeeRepository_1 = require("./DataStore/EmployeeRepository");
var MenuItemRepository_1 = require("./DataStore/MenuItemRepository");
var ProductRepository_1 = require("./DataStore/ProductRepository");
var ReservationRepository_1 = require("./DataStore/ReservationRepository");
var RestaurantRepository_1 = require("./DataStore/RestaurantRepository");
var TableRepository_1 = require("./DataStore/TableRepository");
var app = express();
var router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
var customerRepository = new CustomerRepository_1.CustomerRepository();
var employeeRepository = new EmployeeRepository_1.EmployeeRepository();
var menuItemRepository = new MenuItemRepository_1.MenuItemRepository();
var productRepository = new ProductRepository_1.ProductRepository();
var reservationRepository = new ReservationRepository_1.ReservationRepository();
var restaurantRepository = new RestaurantRepository_1.RestaurantRepository();
var tableRepository = new TableRepository_1.TableRepository();
// REST API for Customer
// get all customers
router.get('/customers', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.getCustomers()];
            case 1:
                customers = _a.sent();
                if (customers.length > 0)
                    res.status(200).json(customers);
                else if (customers.length === 0)
                    res.status(404).json({ message: 'Customers list is empty' });
                else
                    res.status(404).json({ message: 'No customer list found' });
                return [2 /*return*/];
        }
    });
}); });
// get customer by name
router.get('/customers/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.getCustomerByName(req.params.name)];
            case 1:
                customer = _a.sent();
                if (customer)
                    res.status(200).json(customer);
                else
                    res.status(404).json({ message: 'Customer ' + req.params.name + ' not found' });
                return [2 /*return*/];
        }
    });
}); });
// delete customer by name
router["delete"]('/customers/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.deleteCustomerByName(req.params.name)];
            case 1:
                customer = _a.sent();
                res.status(200).json('Restaurant ' + req.params.name + ' deleted');
                return [2 /*return*/];
        }
    });
}); });
// add customer from body
router.post('/customers', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.addCustomer(req.body)];
            case 1:
                customer = _a.sent();
                res.status(200).json(customer);
                return [2 /*return*/];
        }
    });
}); });
// update customer from body
router.put('/customers/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.updateCustomer(req.body)];
            case 1:
                customer = _a.sent();
                res.status(200).json(customer);
                return [2 /*return*/];
        }
    });
}); });
// add loyalty points to customer
router.put('/customers/:name/loyaltyPoints', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var customer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.addLoyaltyPoints(req.params.name, req.body.points)];
            case 1:
                customer = _a.sent();
                res.status(200).json(customer);
                return [2 /*return*/];
        }
    });
}); });
// REST API for Restaurant
// get all restaurants
router.get('/restaurants', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurants;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, restaurantRepository.getRestaurants()];
            case 1:
                restaurants = _a.sent();
                if (restaurants.length > 0)
                    res.json(restaurants);
                else if (restaurants.length == 0)
                    res.status(200).send('Restaurant list is empty');
                else
                    res.status(404).send('No restaurants found');
                return [2 /*return*/];
        }
    });
}); });
// get restaurant by name
router.get('/restaurant/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, restaurantRepository.getRestaurantByName(req.params.name)];
            case 1:
                restaurant = _a.sent();
                if (restaurant)
                    res.json(restaurant);
                else
                    res.status(404).send('Restaurant not found');
                return [2 /*return*/];
        }
    });
}); });
//delete restaurant by name
router["delete"]('/restaurant/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, restaurantRepository.deleteRestaurantByName(req.params.name)];
            case 1:
                _a.sent();
                res.status(200).send('Restaurant deleted');
                return [2 /*return*/];
        }
    });
}); });
// add a restaurant from body    
router.post('/restaurant', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                restaurant = req.body;
                return [4 /*yield*/, restaurantRepository.addRestaurant(restaurant)];
            case 1:
                _a.sent();
                res.status(200).send('Restaurant added');
                return [2 /*return*/];
        }
    });
}); });
// update restaurant from body
router.put('/restaurant/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, restaurantRepository.updateRestaurant(req.body)];
            case 1:
                restaurant = _a.sent();
                res.status(200).json(restaurant);
                return [2 /*return*/];
        }
    });
}); });
app.listen(3004);
