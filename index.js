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
var Customer = require('./Models/CustomerModel').Customer;
var Employee = require('./Models/EmployeeModel').Employee;
var MenuItem = require('./Models/MenuItemModel').MenuItem;
var Order = require('./Models/OrderModel').Order;
var Product = require('./Models/ProductModel').Product;
var Reservation = require('./Models/ReservationModel').Reservation;
var Restaurant = require('./Models/RestaurantModel').Restaurant;
var Table = require('./Models/TableModel').Table;
var express = require("express");
var bodyParser = require("body-parser");
var CustomerRepository_1 = require("./DataStore/CustomerRepository");
var EmployeeRepository_1 = require("./DataStore/EmployeeRepository");
//import { OrderRepository } from './DataStore/OrderRepository';
var MenuItemRepository_1 = require("./DataStore/MenuItemRepository");
var ProductRepository_1 = require("./DataStore/ProductRepository");
//import { ReservationRepository } from './DataStore/ReservationRepository';
var RestaurantRepository_1 = require("./DataStore/RestaurantRepository");
//import { TableRepository } from './DataStore/TableRepository';
var app = express();
var router = express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
var customerRepository = new CustomerRepository_1.CustomerRepository();
var employeeRepository = new EmployeeRepository_1.EmployeeRepository();
//const orderRepository = new OrderRepository();
var menuItemRepository = new MenuItemRepository_1.MenuItemRepository();
var productRepository = new ProductRepository_1.ProductRepository();
//const reservationRepository = new ReservationRepository();
var restaurantRepository = new RestaurantRepository_1.RestaurantRepository();
//const tableRepository = new TableRepository();
//DATABASE POPULATION:
customerRepository.populateCustomers();
//menuItemRepository.populateMenuItems();
employeeRepository.populateEmployees();
productRepository.populateProducts();
restaurantRepository.populateRestaurants();
// REST API for Customer
// get all customers
router.get('/customers', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.getCustomers()
                    .then(function (customers) {
                    res.send(customers);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// get customer by name
router.get('/customer/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.getCustomerByName(req.params.name)
                    .then(function (customer) {
                    res.send(customer);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// delete customer by name
router["delete"]('/customer/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.deleteCustomerByName(req.params.name)
                    .then(function () {
                    res.send("Customer " + req.params.name + " has been deleted!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// add customer from request body
router.post('/customer', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.addCustomer(req.body)
                    .then(function () {
                    res.send("Customer " + req.body.name + " has been added!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// update customer from request body
router.put('/customer/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.updateCustomer(req.params.name, req.body)
                    .then(function () {
                    res.send("Customer " + req.body.name + " has been updated!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// add loyalty points to customer
router.put('/customer/:name/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, customerRepository.addLoyaltyPoints(req.params.name, req.body.loyaltyPoints)
                    .then(function () {
                    res.send(req.body.loyaltyPoints + " loyalty points for " + req.params.name + "!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// REST API for Employee
// get all employees
router.get('/employees', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, employeeRepository.getEmployees()
                    .then(function (employees) {
                    res.send(employees);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// get employee by surname
router.get('/employee/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, employeeRepository.getEmployeeBySurname(req.params.name)
                    .then(function (employee) {
                    res.send(employee);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// delete employee by surname
router["delete"]('/employee/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, employeeRepository.deleteEmployeeBySurname(req.params.name)
                    .then(function () {
                    res.send("Employee " + req.params.name + " has been deleted!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// add employee from request body
router.post('/employee', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, employeeRepository.addEmployee(req.body)
                    .then(function () {
                    res.send("Employee " + req.body.name + " has been added!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// update employee from request body
router.put('/employee/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, employeeRepository.updateEmployee(req.params.name, req.body)
                    .then(function () {
                    res.send("Employee " + req.body.name + " has been updated!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// REST API for Menu Item
// get all menu items
router.get('/menuItems', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, menuItemRepository.getMenuItems()
                    .then(function (menuItems) {
                    res.send(menuItems);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// get menu item by name
router.get('/menuItem/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, menuItemRepository.getMenuItemByName(req.params.name)
                    .then(function (menuItem) {
                    res.send(menuItem);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// delete menu item by name
router["delete"]('/menuItem/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, menuItemRepository.deleteMenuItemByName(req.params.name)
                    .then(function () {
                    res.send("Menu Item " + req.params.name + " has been deleted!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// add menu item from request body
router.post('/menuItem', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, menuItemRepository.addMenuItem(req.body)
                    .then(function () {
                    res.send("Menu Item " + req.body.name + " has been added!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// update menu item from request body
router.put('/menuItem/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, menuItemRepository.updateMenuItem(req.params.name, req.body)
                    .then(function () {
                    res.send("Menu Item " + req.body.name + " has been updated!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// get menu grouped by type
router.get('/menu', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, menuItemRepository.getMenu()
                    .then(function (menu) {
                    res.send(menu);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// REST API for Product in Storage
// get all products
router.get('/products', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, productRepository.getProducts()
                    .then(function (products) {
                    res.send(products);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// get product by name
router.get('/product/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, productRepository.getProductByName(req.params.name)
                    .then(function (product) {
                    res.send(product);
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// delete product by name
router["delete"]('/product/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, productRepository.deleteProductByName(req.params.name)
                    .then(function () {
                    res.send("Product " + req.params.name + " has been deleted!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// add product from request body
router.post('/product', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, productRepository.addProduct(req.body)
                    .then(function () {
                    res.send("Product " + req.body.name + " has been added!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
// update product from request body
router.put('/product/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, productRepository.updateProduct(req.params.name, req.body)
                    .then(function () {
                    res.send("Product " + req.body.name + " has been updated!");
                })["catch"](function (err) {
                    res.send(err);
                })];
            case 1:
                _a.sent();
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
                    res.send(restaurant);
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
// add a restaurant from request body    
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
// update restaurant from request body
router.put('/restaurant/:name', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var restaurant;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, restaurantRepository.updateRestaurant(req.params.name, req.body)];
            case 1:
                restaurant = _a.sent();
                res.status(200).send(restaurant);
                return [2 /*return*/];
        }
    });
}); });
app.listen(3004);
