"use strict";
exports.__esModule = true;
exports.MenuItemRepository = void 0;
var mongoose_1 = require("mongoose");
var MenuItemRepository = /** @class */ (function () {
    function MenuItemRepository() {
        this.MenuItemSchema = new mongoose_1.Schema({
            menuItemId: { type: Number, required: true },
            name: { type: String, required: true },
            price: { type: Number, required: true },
            type: { type: Number, required: true },
            description: { type: String, required: true }
        });
    }
    return MenuItemRepository;
}());
exports.MenuItemRepository = MenuItemRepository;
