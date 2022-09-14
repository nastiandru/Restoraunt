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
exports.ReservationRepository = void 0;
var mongoose_1 = require("mongoose");
var ReservationRepository = /** @class */ (function () {
    function ReservationRepository() {
        this.reservationSchema = new mongoose_1.Schema({
            reservationId: { type: Number, required: true },
            tableNumber: { type: Number, required: false },
            startDateTime: { type: Date, required: true },
            endDateTime: { type: Date, required: true },
            customerId: { type: Number, required: true }
        });
        this.ReservationModel = (0, mongoose_1.model)('Reservation', this.reservationSchema);
    }
    ReservationRepository.prototype.populateReservations = function () {
        return __awaiter(this, void 0, void 0, function () {
            var reservations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, mongoose_1.connect)('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority')];
                    case 1:
                        _a.sent();
                        reservations = [
                            {
                                reservationId: 1,
                                tableNumber: 1,
                                startDateTime: new Date(2020, 1, 1, 10, 0, 0, 0),
                                endDateTime: new Date(2020, 1, 1, 11, 0, 0, 0),
                                customerId: 1
                            },
                            {
                                reservationId: 2,
                                tableNumber: 2,
                                startDateTime: new Date(2020, 1, 1, 11, 0, 0, 0),
                                endDateTime: new Date(2020, 1, 1, 12, 0, 0, 0),
                                customerId: 2
                            }
                        ];
                        return [4 /*yield*/, this.ReservationModel
                                .insertMany(reservations)
                                .then(function () {
                                console.log("Reservations have been populated!");
                            })["catch"](function (err) {
                                console.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReservationRepository.prototype.addReservation = function (reservation) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, mongoose_1.connect)('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ReservationModel
                                .create(reservation)
                                .then(function () {
                                console.log("Reservation of ID " + reservation.reservationId + " has been added!");
                            })["catch"](function (err) {
                                console.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReservationRepository.prototype.deleteReservationById = function (reservationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, mongoose_1.connect)('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ReservationModel
                                .deleteOne({ reservationId: reservationId })
                                .then(function () {
                                console.log("Reservation of ID " + reservationId + " has been deleted!");
                            })["catch"](function (err) {
                                console.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReservationRepository.prototype.getReservationById = function (reservationId) {
        return __awaiter(this, void 0, void 0, function () {
            var reservation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, mongoose_1.connect)('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ReservationModel.findOne({ reservationId: reservationId })];
                    case 2:
                        reservation = _a.sent();
                        if (reservation)
                            return [2 /*return*/, reservation];
                        else
                            return [2 /*return*/, null];
                        return [2 /*return*/];
                }
            });
        });
    };
    ReservationRepository.prototype.getReservations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, mongoose_1.connect)('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ReservationModel.find({})];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReservationRepository.prototype.updateReservation = function (reservation) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, mongoose_1.connect)('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ReservationModel
                                .updateOne({ reservationId: reservation.reservationId }, reservation)
                                .then(function () {
                                console.log("Reservation of ID " + reservation.reservationId + " has been updated!");
                            })["catch"](function (err) {
                                console.log(err);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ReservationRepository.prototype.reservationPerCustomer = function (customerId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, mongoose_1.connect)('mongodb+srv://nastia123:nastia070703@cluster0.eyf7qte.mongodb.net/?retryWrites=true&w=majority')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ReservationModel.find({ customerId: customerId })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ReservationRepository;
}());
exports.ReservationRepository = ReservationRepository;