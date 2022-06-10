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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var calldata = '{"abi":{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},"chain":"avax","calls":[{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[0]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[1]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[2]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[3]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[4]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[5]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[6]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[7]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[8]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[9]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[10]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[11]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[12]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[13]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[14]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[15]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[16]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[17]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[18]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[19]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[20]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[21]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[22]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[23]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[24]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[25]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[26]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[27]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[28]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[29]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[30]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[31]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[32]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[33]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[34]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[35]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[36]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[37]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[38]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[39]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[40]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[41]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[42]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[43]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[44]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[45]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[46]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[47]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[48]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[49]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[50]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[51]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[52]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[53]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[54]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[55]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[56]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[57]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[58]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[59]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[60]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[61]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[62]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[63]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[64]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[65]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[66]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[67]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[68]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[69]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[70]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[71]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[72]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[73]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[74]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[75]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[76]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[77]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[78]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[79]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[80]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[81]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[82]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[83]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[84]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[85]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[86]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[87]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[88]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[89]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[90]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[91]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[92]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[93]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[94]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[95]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[96]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[97]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[98]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[99]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[100]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[101]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[102]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[103]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[104]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[105]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[106]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[107]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[108]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[109]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[110]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[111]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[112]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[113]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[114]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[115]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[116]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[117]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[118]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[119]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[120]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[121]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[122]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[123]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[124]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[125]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[126]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[127]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[128]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[129]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[130]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[131]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[132]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[133]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[134]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[135]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[136]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[137]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[138]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[139]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[140]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[141]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[142]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[143]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[144]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[145]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[146]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[147]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[148]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[149]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[150]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[151]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[152]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[153]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[154]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[155]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[156]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[157]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[158]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[159]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[160]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[161]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[162]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[163]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[164]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[165]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[166]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[167]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[168]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[169]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[170]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[171]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[172]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[173]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[174]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[175]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[176]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[177]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[178]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[179]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[180]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[181]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[182]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[183]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[184]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[185]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[186]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[187]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[188]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[189]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[190]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[191]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[192]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[193]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[194]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[195]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[196]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[197]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[198]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[199]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[200]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[201]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[202]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[203]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[204]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[205]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[206]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[207]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[208]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[209]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[210]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[211]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[212]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[213]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[214]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[215]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[216]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[217]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[218]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[219]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[220]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[221]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[222]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[223]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[224]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[225]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[226]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[227]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[228]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[229]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[230]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[231]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[232]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[233]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[234]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[235]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[236]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[237]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[238]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[239]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[240]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[241]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[242]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[243]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[244]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[245]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[246]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[247]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[248]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[249]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[250]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[251]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[252]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[253]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[254]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[255]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[256]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[257]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[258]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[259]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[260]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[261]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[262]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[263]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[264]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[265]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[266]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[267]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[268]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[269]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[270]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[271]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[272]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[273]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[274]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[275]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[276]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[277]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[278]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[279]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[280]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[281]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[282]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[283]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[284]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[285]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[286]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[287]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[288]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[289]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[290]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[291]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[292]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[293]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[294]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[295]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[296]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[297]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[298]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[299]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[300]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[301]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[302]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[303]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[304]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[305]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[306]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[307]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[308]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[309]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[310]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[311]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[312]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[313]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[314]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[315]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[316]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[317]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[318]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[319]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[320]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[321]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[322]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[323]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[324]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[325]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[326]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[327]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[328]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[329]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[330]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[331]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[332]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[333]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[334]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[335]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[336]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[337]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[338]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[339]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[340]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[341]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[342]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[343]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[344]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[345]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[346]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[347]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[348]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[349]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[350]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[351]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[352]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[353]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[354]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[355]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[356]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[357]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[358]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[359]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[360]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[361]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[362]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[363]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[364]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[365]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[366]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[367]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[368]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[369]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[370]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[371]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[372]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[373]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[374]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[375]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[376]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[377]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[378]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[379]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[380]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[381]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[382]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[383]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[384]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[385]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[386]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[387]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[388]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[389]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[390]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[391]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[392]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[393]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[394]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[395]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[396]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[397]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[398]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[399]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[400]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[401]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[402]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[403]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[404]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[405]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[406]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[407]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[408]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[409]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[410]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[411]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[412]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[413]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[414]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[415]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[416]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[417]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[418]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[419]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[420]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[421]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[422]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[423]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[424]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[425]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[426]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[427]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[428]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[429]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[430]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[431]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[432]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[433]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[434]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[435]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[436]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[437]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[438]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[439]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[440]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[441]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[442]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[443]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[444]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[445]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[446]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[447]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[448]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[449]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[450]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[451]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[452]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[453]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[454]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[455]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[456]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[457]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[458]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[459]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[460]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[461]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[462]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[463]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[464]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[465]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[466]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[467]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[468]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[469]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[470]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[471]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[472]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[473]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[474]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[475]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[476]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[477]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[478]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[479]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[480]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[481]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[482]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[483]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[484]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[485]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[486]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[487]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[488]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[489]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[490]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[491]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[492]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[493]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[494]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[495]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[496]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[497]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[498]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[499]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[500]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[501]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[502]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[503]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[504]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[505]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[506]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[507]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[508]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[509]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[510]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[511]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[512]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[513]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[514]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[515]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[516]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[517]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[518]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[519]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[520]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[521]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[522]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[523]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[524]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[525]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[526]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[527]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[528]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[529]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[530]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[531]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[532]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[533]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[534]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[535]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[536]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[537]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[538]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[539]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[540]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[541]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[542]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[543]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[544]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[545]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[546]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[547]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[548]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[549]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[550]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[551]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[552]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[553]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[554]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[555]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[556]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[557]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[558]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[559]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[560]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[561]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[562]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[563]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[564]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[565]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[566]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[567]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[568]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[569]},{"target":"0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10","params":[570]}],"block":4395859}';
test("large muticall", function () { return __awaiter(void 0, void 0, void 0, function () {
    var res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1.multiCall(JSON.parse(calldata))];
            case 1:
                res = _a.sent();
                expect(res.output.filter(function (r) { return r === undefined; }).length).toBe(0);
                return [2 /*return*/];
        }
    });
}); });
test("call", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.call({
                        target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                        params: "0x3FfBa143f5e69Aa671C9f8e3843C88742b1FA2D9",
                        abi: "erc20:balanceOf",
                        block: 9424627,
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: "3914724000000000000",
                });
                return [2 /*return*/];
        }
    });
}); });
test("call with a result of low numerical value", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.call({
                        target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                        abi: "erc20:decimals",
                        block: 9424627,
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: "18",
                });
                return [2 /*return*/];
        }
    });
}); });
test("call doesn't include __length__", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.call({
                        target: "0x3dfd23A6c5E8BbcFc9581d2E864a68feb6a076d3",
                        abi: {
                            constant: true,
                            inputs: [],
                            name: "getReserves",
                            outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: [
                        "0x6B175474E89094C44Da98b954EedeAC495271d0F",
                        "0x0000000000085d4780B73119b644AE5ecd22b376",
                        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                        "0xdAC17F958D2ee523a2206206994597C13D831ec7",
                        "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
                        "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
                        "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
                        "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
                        "0x514910771AF9Ca656af840dff83E8264EcF986CA",
                        "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
                        "0x1985365e9f78359a9B6AD760e32412f4a445E862",
                        "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
                        "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
                        "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
                        "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
                        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                        "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
                        "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
                        "0x408e41876cCCDC0F92210600ef50372656052a38",
                        "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
                        "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
                        "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
test("multiCall", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        calls: [
                            {
                                target: "0x0000000000085d4780B73119b644AE5ecd22b376",
                                params: "0x802275979B020F0ec871c5eC1db6e412b72fF20b",
                            },
                            {
                                target: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
                                params: "0xaf38668f4719ecf9452dc0300be3f6c83cbf3721",
                            },
                        ],
                        abi: "erc20:balanceOf",
                        block: 9424627,
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: [
                        {
                            input: {
                                target: "0x0000000000085d4780B73119b644AE5ecd22b376",
                                params: ["0x802275979B020F0ec871c5eC1db6e412b72fF20b"],
                            },
                            success: true,
                            output: "9075930471597257944363",
                        },
                        {
                            input: {
                                target: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
                                params: ["0xaf38668f4719ecf9452dc0300be3f6c83cbf3721"],
                            },
                            success: true,
                            output: "14182595309792052635843",
                        },
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
test("multiCall with abi", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        calls: [
                            {
                                target: "0x7f1c7aa2ce3cbc533afc7934156d4ae20d313808",
                                params: [],
                            },
                        ],
                        abi: {
                            constant: true,
                            inputs: [],
                            name: "getCurrentTokens",
                            outputs: [
                                { internalType: "address[]", name: "tokens", type: "address[]" },
                            ],
                            payable: false,
                            type: "function",
                        },
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: [
                        {
                            input: {
                                target: "0x7f1c7aa2ce3cbc533afc7934156d4ae20d313808",
                                params: [],
                            },
                            success: true,
                            output: [
                                "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                                "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                                "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
                                "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
                                "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
                                "0xba100000625a3754423978a60c9317c58a424e3D",
                                "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
                                "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE",
                            ],
                        },
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
test("multiCall with bool", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        calls: [
                            {
                                target: "0x7f1c7aa2ce3cbc533afc7934156d4ae20d313808",
                                params: [],
                            },
                        ],
                        abi: {
                            constant: true,
                            inputs: [],
                            name: "isPublicSwap",
                            outputs: [{ internalType: "bool", name: "", type: "bool" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: [
                        {
                            input: {
                                target: "0x7f1c7aa2ce3cbc533afc7934156d4ae20d313808",
                                params: [],
                            },
                            success: true,
                            output: true,
                        },
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
test("multiCall with multiple return values and reverts", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        calls: [
                            {
                                target: "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
                                params: [],
                            },
                            {
                                target: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                params: [],
                            },
                            {
                                target: "0xd3d2e2692501a5c9ca623199d38826e513033a17",
                                params: [],
                            },
                        ],
                        abi: {
                            constant: true,
                            inputs: [],
                            name: "getReserves",
                            outputs: [
                                { internalType: "uint112", name: "_reserve0", type: "uint112" },
                                { internalType: "uint112", name: "_reserve1", type: "uint112" },
                                {
                                    internalType: "uint32",
                                    name: "_blockTimestampLast",
                                    type: "uint32",
                                },
                            ],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        block: 12039078,
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: [
                        {
                            input: {
                                target: "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
                                params: [],
                            },
                            success: true,
                            output: {
                                "0": "301581710380",
                                "1": "96617630042588802146591",
                                "2": "1615756663",
                                __length__: 3,
                                _reserve0: "301581710380",
                                _reserve1: "96617630042588802146591",
                                _blockTimestampLast: "1615756663",
                            },
                        },
                        {
                            input: {
                                target: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                                params: [],
                            },
                            success: false,
                            output: null,
                        },
                        {
                            input: {
                                target: "0xd3d2e2692501a5c9ca623199d38826e513033a17",
                                params: [],
                            },
                            success: true,
                            output: {
                                "0": "2810648354433347009254306",
                                "1": "46717539168935965975147",
                                "2": "1615756663",
                                __length__: 3,
                                _reserve0: "2810648354433347009254306",
                                _reserve1: "46717539168935965975147",
                                _blockTimestampLast: "1615756663",
                            },
                        },
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
test("multiCall with parameters and cached ABI", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        calls: [
                            {
                                target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                                params: ["0x3FfBa143f5e69Aa671C9f8e3843C88742b1FA2D9"],
                            },
                            {
                                target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                                params: "0x3FfBa143f5e69Aa671C9f8e3843C88742b1FA2D9",
                            },
                            {
                                target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                                params: "0xd3d2e2692501a5c9ca623199d38826e513033a17",
                            },
                        ],
                        abi: "erc20:balanceOf",
                        block: 12039078,
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: [
                        {
                            input: {
                                target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                                params: ["0x3FfBa143f5e69Aa671C9f8e3843C88742b1FA2D9"],
                            },
                            success: true,
                            output: "3914724000000000000",
                        },
                        {
                            input: {
                                target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                                params: ["0x3FfBa143f5e69Aa671C9f8e3843C88742b1FA2D9"],
                            },
                            success: true,
                            output: "3914724000000000000",
                        },
                        {
                            input: {
                                target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                                params: ["0xd3d2e2692501a5c9ca623199d38826e513033a17"],
                            },
                            success: true,
                            output: "0",
                        },
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
jest.setTimeout(10000);
test("multiCall with 2000 calls to verify that splitting works", function () { return __awaiter(void 0, void 0, void 0, function () {
    var calls, i, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                calls = [];
                for (i = 0; i < 2000; i++) {
                    calls.push({
                        target: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
                        params: ["0x3FfBa143f5e69Aa671C9f8e3843C88742b1FA2D9"],
                    });
                }
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        calls: calls,
                        abi: "erc20:balanceOf",
                        block: 12039078,
                    })];
            case 1:
                _a.apply(void 0, [(_b.sent()).output.length]).toBe(2000);
                return [2 /*return*/];
        }
    });
}); });
test("maker multicall doesn't throw", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        abi: {
                            constant: true,
                            inputs: [],
                            name: "ilk",
                            outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        calls: JSON.parse('[{"target":"0xbaa65281c2fa2baacb2cb550ba051525a480d3f4"},{"target":"0x65c79fcb50ca1594b025960e539ed7a9a6d434a3"},{"target":"0x19c0976f590d67707e62397c87829d896dc0f1f1"},{"target":"0x197e90f9fad81970ba7976f33cbd77088e5d7cf7"},{"target":"0x78f2c2af65126834c51822f56be0d7469d7a523e"},{"target":"0xab14d3ce3f733cacb76ec2abe7d2fcb00c99f3d5"},{"target":"0xbe8e3e3618f7474f8cb1d074a26affef007e98fb"},{"target":"0x2f0b23f53734252bda2277357e97e1517d6b042a"},{"target":"0x3d0b1912b66114d4096f48a8cee3a56c231772ca"},{"target":"0xad37fd42185ba63009177058208dd1be4b136e6b"},{"target":"0x4d95a049d5b0b7d32058cd3f2163015747522e99"},{"target":"0xa191e578a6736167326d05c119ce0c90849e84b7"},{"target":"0xbf72da2bd84c5170618fbe5914b0eca9638d5eb5"},{"target":"0x2600004fd1585f7270756ddc88ad9cfa10dd0428"},{"target":"0x4454af7c8bb9463203b66c816220d41ed7837f44"},{"target":"0x475f1a89c1ed844a08e8f6c50a00228b5e59e4a9"},{"target":"0xc7e8cd72bdee38865b4f5615956ef47ce1a7e5d0"},{"target":"0xa6ea3b9c04b8a38ff5e224e7c3d6937ca44c0ef9"},{"target":"0xa41b6ef151e06da0e34b009b86e828308986736d"},{"target":"0xa5679c04fc3d9d8b0aab1f0ab83555b301ca70ea"},{"target":"0x0ac6a1d74e84c2df9063bddc31699ff2a2bb22a2"},{"target":"0x7e62b7e279dfc78deb656e34d6a435cc08a44666"},{"target":"0xbea7cdfb4b49ec154ae1c0d731e4dc773a3265aa"},{"target":"0x6c186404a7a238d3d6027c0299d1822c1cf5d8f1"},{"target":"0xdfccaf8fdbd2f4805c174f856a317765b49e4a50"},{"target":"0x08638ef1a205be6762a8b935f5da9b700cf7322c"},{"target":"0x4a03aa7fb3973d8f0221b466eefb53d0ac195f55"},{"target":"0x3ff33d9162ad47660083d7dc4bc02fb231c81677"},{"target":"0xe29a14bcdea40d83675aa43b72df07f649738c8b"},{"target":"0x3bc3a58b4fc1cbe7e98bb4ab7c99535e8ba9b8f1"},{"target":"0xfd5608515a47c37afba68960c1916b79af9491d0"},{"target":"0xc7bdd1f2b16447dcf3de045c4a039a60ec2f0ba3"},{"target":"0x24e459f61ceaa7b1ce70dbaea938940a7c5ad46e"},{"target":"0x2502f65d77ca13f183850b5f9272270454094a08"},{"target":"0x0a59649758aa4d66e25f08dd01271e891fe52199"},{"target":"0x7b3799b30f268ba55f926d7f714a3001af89d359"},{"target":"0xdc26c9b7a8fe4f5df648e314ec3e6dc3694e6dd2"},{"target":"0x03ae53b33feeac1222c3f372f32d37ba95f0f099"},{"target":"0xa81598667ac561986b70ae11bbe2dd5348ed4327"},{"target":"0x4aad139a88d2dd5e7410b408593208523a3a891d"},{"target":"0xdae88bde1fb38cf39b6a02b595930a3449e593a6"},{"target":"0xf11a98339fe1cde648e8d1463310ce3ccc3d7cc1"},{"target":"0xd40798267795cbf3aeea8e9f8dcbdba9b5281fcc"},{"target":"0x42afd448df7d96291551f1efe1a590101afb1dff"},{"target":"0xaf034d882169328caf43b823a4083dabc7eee0f4"},{"target":"0x476b81c12dc71edfad1f64b9e07caa60f4b156e2"},{"target":"0x88f88bb9e66241b73b84f3a6e197fbba487b1e30"}]'),
                        block: 12047406,
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: JSON.parse('[{"input":{"target":"0xbaa65281c2fa2baacb2cb550ba051525a480d3f4","params":[]},"success":false,"output":null},{"input":{"target":"0x65c79fcb50ca1594b025960e539ed7a9a6d434a3","params":[]},"success":false,"output":null},{"input":{"target":"0x19c0976f590d67707e62397c87829d896dc0f1f1","params":[]},"success":false,"output":null},{"input":{"target":"0x197e90f9fad81970ba7976f33cbd77088e5d7cf7","params":[]},"success":false,"output":null},{"input":{"target":"0x78f2c2af65126834c51822f56be0d7469d7a523e","params":[]},"success":false,"output":null},{"input":{"target":"0xab14d3ce3f733cacb76ec2abe7d2fcb00c99f3d5","params":[]},"success":false,"output":null},{"input":{"target":"0xbe8e3e3618f7474f8cb1d074a26affef007e98fb","params":[]},"success":false,"output":null},{"input":{"target":"0x2f0b23f53734252bda2277357e97e1517d6b042a","params":[]},"success":true,"output":"0x4554482d41000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x3d0b1912b66114d4096f48a8cee3a56c231772ca","params":[]},"success":true,"output":"0x4241542d41000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0xad37fd42185ba63009177058208dd1be4b136e6b","params":[]},"success":true,"output":"0x5341490000000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x4d95a049d5b0b7d32058cd3f2163015747522e99","params":[]},"success":false,"output":null},{"input":{"target":"0xa191e578a6736167326d05c119ce0c90849e84b7","params":[]},"success":true,"output":"0x555344432d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0xbf72da2bd84c5170618fbe5914b0eca9638d5eb5","params":[]},"success":true,"output":"0x574254432d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x2600004fd1585f7270756ddc88ad9cfa10dd0428","params":[]},"success":true,"output":"0x555344432d420000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x4454af7c8bb9463203b66c816220d41ed7837f44","params":[]},"success":true,"output":"0x545553442d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x475f1a89c1ed844a08e8f6c50a00228b5e59e4a9","params":[]},"success":true,"output":"0x4b4e432d41000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0xc7e8cd72bdee38865b4f5615956ef47ce1a7e5d0","params":[]},"success":true,"output":"0x5a52582d41000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0xa6ea3b9c04b8a38ff5e224e7c3d6937ca44c0ef9","params":[]},"success":true,"output":"0x4d414e412d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0xa41b6ef151e06da0e34b009b86e828308986736d","params":[]},"success":false,"output":null},{"input":{"target":"0xa5679c04fc3d9d8b0aab1f0ab83555b301ca70ea","params":[]},"success":false,"output":null},{"input":{"target":"0x0ac6a1d74e84c2df9063bddc31699ff2a2bb22a2","params":[]},"success":true,"output":"0x555344542d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x7e62b7e279dfc78deb656e34d6a435cc08a44666","params":[]},"success":true,"output":"0x5041585553442d41000000000000000000000000000000000000000000000000"},{"input":{"target":"0xbea7cdfb4b49ec154ae1c0d731e4dc773a3265aa","params":[]},"success":true,"output":"0x434f4d502d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x6c186404a7a238d3d6027c0299d1822c1cf5d8f1","params":[]},"success":true,"output":"0x4c52432d41000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0xdfccaf8fdbd2f4805c174f856a317765b49e4a50","params":[]},"success":true,"output":"0x4c494e4b2d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x08638ef1a205be6762a8b935f5da9b700cf7322c","params":[]},"success":true,"output":"0x4554482d42000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x4a03aa7fb3973d8f0221b466eefb53d0ac195f55","params":[]},"success":true,"output":"0x42414c2d41000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x3ff33d9162ad47660083d7dc4bc02fb231c81677","params":[]},"success":true,"output":"0x5946492d41000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0xe29a14bcdea40d83675aa43b72df07f649738c8b","params":[]},"success":true,"output":"0x475553442d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x3bc3a58b4fc1cbe7e98bb4ab7c99535e8ba9b8f1","params":[]},"success":true,"output":"0x554e492d41000000000000000000000000000000000000000000000000000000"},{"input":{"target":"0xfd5608515a47c37afba68960c1916b79af9491d0","params":[]},"success":true,"output":"0x52454e4254432d41000000000000000000000000000000000000000000000000"},{"input":{"target":"0xc7bdd1f2b16447dcf3de045c4a039a60ec2f0ba3","params":[]},"success":false,"output":null},{"input":{"target":"0x24e459f61ceaa7b1ce70dbaea938940a7c5ad46e","params":[]},"success":true,"output":"0x414156452d410000000000000000000000000000000000000000000000000000"},{"input":{"target":"0x2502f65d77ca13f183850b5f9272270454094a08","params":[]},"success":true,"output":"0x554e4956324441494554482d4100000000000000000000000000000000000000"},{"input":{"target":"0x0a59649758aa4d66e25f08dd01271e891fe52199","params":[]},"success":true,"output":"0x50534d2d555344432d4100000000000000000000000000000000000000000000"},{"input":{"target":"0x7b3799b30f268ba55f926d7f714a3001af89d359","params":[]},"success":true,"output":"0x50534d2d555344432d4100000000000000000000000000000000000000000000"},{"input":{"target":"0xdc26c9b7a8fe4f5df648e314ec3e6dc3694e6dd2","params":[]},"success":true,"output":"0x554e495632574254434554482d41000000000000000000000000000000000000"},{"input":{"target":"0x03ae53b33feeac1222c3f372f32d37ba95f0f099","params":[]},"success":true,"output":"0x554e495632555344434554482d41000000000000000000000000000000000000"},{"input":{"target":"0xa81598667ac561986b70ae11bbe2dd5348ed4327","params":[]},"success":true,"output":"0x554e495632444149555344432d41000000000000000000000000000000000000"},{"input":{"target":"0x4aad139a88d2dd5e7410b408593208523a3a891d","params":[]},"success":true,"output":"0x554e495632455448555344542d41000000000000000000000000000000000000"},{"input":{"target":"0xdae88bde1fb38cf39b6a02b595930a3449e593a6","params":[]},"success":true,"output":"0x554e4956324c494e4b4554482d41000000000000000000000000000000000000"},{"input":{"target":"0xf11a98339fe1cde648e8d1463310ce3ccc3d7cc1","params":[]},"success":true,"output":"0x554e495632554e494554482d4100000000000000000000000000000000000000"},{"input":{"target":"0xd40798267795cbf3aeea8e9f8dcbdba9b5281fcc","params":[]},"success":true,"output":"0x554e495632574254434441492d41000000000000000000000000000000000000"},{"input":{"target":"0x42afd448df7d96291551f1efe1a590101afb1dff","params":[]},"success":true,"output":"0x554e495632414156454554482d41000000000000000000000000000000000000"},{"input":{"target":"0xaf034d882169328caf43b823a4083dabc7eee0f4","params":[]},"success":true,"output":"0x554e495632444149555344542d41000000000000000000000000000000000000"},{"input":{"target":"0x476b81c12dc71edfad1f64b9e07caa60f4b156e2","params":[]},"success":true,"output":"0x5257413030312d41000000000000000000000000000000000000000000000000"},{"input":{"target":"0x88f88bb9e66241b73b84f3a6e197fbba487b1e30","params":[]},"success":false,"output":null}]'),
                });
                return [2 /*return*/];
        }
    });
}); });
test("maker call doesn't do weird things", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.call({
                        block: 12047406,
                        target: "0x2f0b23f53734252bda2277357e97e1517d6b042a",
                        abi: {
                            constant: true,
                            inputs: [],
                            name: "gem",
                            outputs: [{ internalType: "address", name: "", type: "address" }],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                });
                return [2 /*return*/];
        }
    });
}); });
test("Set protocol multicall", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                // We serialize and unserialize to avoid the test failing because some functions were copied with lodash.deepClone differently
                _a = expect;
                _c = (_b = JSON).parse;
                _e = (_d = JSON).stringify;
                return [4 /*yield*/, index_1.multiCall({
                        abi: {
                            inputs: [],
                            name: "getPositions",
                            outputs: [
                                {
                                    components: [
                                        {
                                            internalType: "address",
                                            name: "component",
                                            type: "address",
                                        },
                                        { internalType: "address", name: "module", type: "address" },
                                        { internalType: "int256", name: "unit", type: "int256" },
                                        {
                                            internalType: "uint8",
                                            name: "positionState",
                                            type: "uint8",
                                        },
                                        { internalType: "bytes", name: "data", type: "bytes" },
                                    ],
                                    internalType: "struct ISetToken.Position[]",
                                    name: "",
                                    type: "tuple[]",
                                },
                            ],
                            stateMutability: "view",
                            type: "function",
                        },
                        block: 12065584,
                        calls: [
                            { target: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b" },
                            { target: "0x90d8C1eE7fE895a780405d1B62839fa1c7796A70" },
                            { target: "0x23687D9d40F9Ecc86E7666DDdB820e700F954526" },
                            { target: "0x532777F415735dAD24eC97FeEAC62EB1F15cf128" },
                            { target: "0x7F8E3f03D84e0aA7488375C85Ed470b4451f0899" },
                        ],
                    })];
            case 1:
                // We serialize and unserialize to avoid the test failing because some functions were copied with lodash.deepClone differently
                _a.apply(void 0, [_c.apply(_b, [_e.apply(_d, [_f.sent()])])]).toEqual(JSON.parse('{"output":[{"input":{"target":"0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b","params":[]},"success":true,"output":[["0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e","0x0000000000000000000000000000000000000000","566681395927559","0","0x"],["0xc00e94Cb662C3520282E6f5717214004A7f26888","0x0000000000000000000000000000000000000000","70318775153048506","0","0x"],["0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F","0x0000000000000000000000000000000000000000","2384736988477651228","0","0x"],["0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2","0x0000000000000000000000000000000000000000","14668017874179484","0","0x"],["0x408e41876cCCDC0F92210600ef50372656052a38","0x0000000000000000000000000000000000000000","14329297278561211120","0","0x"],["0xdd974D5C2e2928deA5F71b9825b8b646686BD200","0x0000000000000000000000000000000000000000","3322796981570831895","0","0x"],["0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD","0x0000000000000000000000000000000000000000","20270507030878218910","0","0x"],["0xba100000625a3754423978a60c9317c58a424e3D","0x0000000000000000000000000000000000000000","175627130233863107","0","0x"],["0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984","0x0000000000000000000000000000000000000000","4871122751163785374","0","0x"],["0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9","0x0000000000000000000000000000000000000000","201801624666571816","0","0x"],["0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2","0x0000000000000000000000000000000000000000","295166852626052623","0","0x"],["0x6B3595068778DD592e39A122f4f5a5cF09C90fE2","0x0000000000000000000000000000000000000000","1969722723891450605","0","0x"]]},{"input":{"target":"0x90d8C1eE7fE895a780405d1B62839fa1c7796A70","params":[]},"success":true,"output":[["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","0x0000000000000000000000000000000000000000","147000000000000000","0","0x"],["0x6B175474E89094C44Da98b954EedeAC495271d0F","0x0000000000000000000000000000000000000000","50000000000000000000","0","0x"]]},{"input":{"target":"0x23687D9d40F9Ecc86E7666DDdB820e700F954526","params":[]},"success":true,"output":[["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","0x0000000000000000000000000000000000000000","130867502281176757","0","0x"],["0x6B175474E89094C44Da98b954EedeAC495271d0F","0x0000000000000000000000000000000000000000","63797945472382022874","0","0x"]]},{"input":{"target":"0x532777F415735dAD24eC97FeEAC62EB1F15cf128","params":[]},"success":true,"output":[["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","0x0000000000000000000000000000000000000000","147000000000000000","0","0x"],["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","0x0000000000000000000000000000000000000000","480000","0","0x"]]},{"input":{"target":"0x7F8E3f03D84e0aA7488375C85Ed470b4451f0899","params":[]},"success":true,"output":[["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2","0x0000000000000000000000000000000000000000","147000000000000000","0","0x"],["0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","0x0000000000000000000000000000000000000000","480000","0","0x"]]}]}'));
                return [2 /*return*/];
        }
    });
}); });
test("multicall with no call.target", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        target: "0xC1bF1B4929DA9303773eCEa5E251fDEc22cC6828",
                        abi: {
                            inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
                            name: "getActiveOrderId",
                            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
                            stateMutability: "view",
                            type: "function",
                        },
                        block: 12066151,
                        calls: [{ params: 0 }, { params: 1 }, { params: 2 }, { params: 3 }],
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: [
                        {
                            input: {
                                target: "0xC1bF1B4929DA9303773eCEa5E251fDEc22cC6828",
                                params: [0],
                            },
                            success: true,
                            output: "967",
                        },
                        {
                            input: {
                                target: "0xC1bF1B4929DA9303773eCEa5E251fDEc22cC6828",
                                params: [1],
                            },
                            success: true,
                            output: "2998",
                        },
                        {
                            input: {
                                target: "0xC1bF1B4929DA9303773eCEa5E251fDEc22cC6828",
                                params: [2],
                            },
                            success: true,
                            output: "2404",
                        },
                        {
                            input: {
                                target: "0xC1bF1B4929DA9303773eCEa5E251fDEc22cC6828",
                                params: [3],
                            },
                            success: true,
                            output: "1805",
                        },
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
test("bsc multicall", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.multiCall({
                        abi: {
                            constant: true,
                            inputs: [],
                            name: "getReserves",
                            outputs: [
                                { internalType: "uint112", name: "_reserve0", type: "uint112" },
                                { internalType: "uint112", name: "_reserve1", type: "uint112" },
                                {
                                    internalType: "uint32",
                                    name: "_blockTimestampLast",
                                    type: "uint32",
                                },
                            ],
                            payable: false,
                            stateMutability: "view",
                            type: "function",
                        },
                        calls: [
                            { target: "0xaeBE45E3a03B734c68e5557AE04BFC76917B4686" },
                            { target: "0x1B96B92314C44b159149f7E0303511fB2Fc4774f" },
                        ],
                        chain: "bsc",
                    })];
            case 1:
                _a.apply(void 0, [
                    // No block provided!
                    (_b.sent()).output.every(function (call) { return call.success; })]).toBe(true);
                return [2 /*return*/];
        }
    });
}); });
var largeMulticall_1 = __importDefault(require("./largeMulticall"));
test("order is maintained in multicall", function () { return __awaiter(void 0, void 0, void 0, function () {
    var result, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1.multiCall(largeMulticall_1.default)];
            case 1:
                result = _a.sent();
                for (i = 0; i < largeMulticall_1.default.calls.length; i++) {
                    expect(result.output[i].input.target).toBe(largeMulticall_1.default.calls[i].target);
                }
                return [2 /*return*/];
        }
    });
}); });
