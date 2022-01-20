"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailhelper_1 = require("@suzieq/emailhelper");
const products_1 = require("@suzieq/products");
const validatorhelper_1 = require("@suzieq/validatorhelper");
console.log("This is index.ts");
console.log((0, products_1.List)());
console.log("ValidateUserName says:");
console.log((0, validatorhelper_1.ValidateUserName)("Hop"));
(0, emailhelper_1.SendMailToUser)("Hop");
//# sourceMappingURL=index.js.map