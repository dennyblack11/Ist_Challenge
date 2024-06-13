"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = require("./utils/dbConfig");
const mainApp_1 = require("./mainApp");
const app = (0, express_1.default)();
const port = 4000;
app.use((0, cors_1.default)());
app.use((0, express_1.json)());
(0, mainApp_1.mainApp)(app);
const server = app.listen(port, () => {
    console.clear();
    (0, dbConfig_1.dbConfig)();
});
process
    .on("unhandledRejection", (reason) => {
    (0, console_1.log)(reason);
    server.close(() => {
        process.exit(1);
    });
})
    .on("uncaughtException", (error) => {
    (0, console_1.log)(error);
    process.exit(1);
});
