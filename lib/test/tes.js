"use strict";
// const {sub, sum} = require("../index.js")
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(sum(1, 2))
// console.log(sub(1, 2))
// console.log(sum(3, 4))
// console.log("develop")
const lc_1 = require("../src/lc");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(yield (0, lc_1.getJoke)("duck"));
}))();
