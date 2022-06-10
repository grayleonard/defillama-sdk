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
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
test("compound", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.compound.getAssetsLocked({
                        block: 12034664,
                        targets: [
                            "0x5D4a945271Fb3E16481BF6ce0BAd5f6b2E9d13dB",
                            "0x219c15508383577F8ADBa451C2f2367bc6cEB817",
                            "0x5212F225f58B8Cd4C1Cf2A10DCF047449DCB5d86",
                            "0xc8BEF1A50119389ae31D2E426F7C71BF8cC10deF",
                            "0xb5936e90cdCd34A5b588760db43284a3eBe7c936",
                            "0x7066d8B410D59A9f73126A258Cfd7a417C68aE7D",
                            "0xE93C6a13784bcb1d781f09f68F30b0293e36f270",
                            "0xfE211dA6dcf2DC14218Ab7ED59E5565ddCCd72c9",
                            "0x7ab83b5E9a93F55cbA6776FEE1B6B8a73F78dc5b",
                            "0x26055Afbd1f3050b4c4F6dBc50069709B3247cC8",
                            "0x44FCd007fDb7785B33E528902F27489a5a2Ac3a5",
                            "0x175ADC6a6d8C4Dc71aE1B7f15cf8EFf7E782790d",
                            "0x99503D47aDCA9dB57cc6841d960352b4105aeeF9",
                            "0xa3fD36F92B5fC6Bb2a17ea662232C11cD770a5d8",
                            "0x22613c2a7c378868e3beb6657d0853c397c0C744",
                            "0x93D7F98293FD28cd9a647Bfe54444260e575907E",
                            "0x9dF06D2E25378F01A405c93310e289e8D06C9841",
                            "0x2C510E42A84F7dc85e45b8311f3a949299716c5D",
                            "0x2c2770658ad59452b283EC9e5c43093837C498e8",
                            "0x3B608b4bE09fc6cfc67DA79d7d4F13395aA47896",
                        ],
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: {
                        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2": "200376837.981758500384302323",
                        "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359": "10316401718820506.119037349306243906",
                        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": "103225.001504811096617576",
                    },
                });
                return [2 /*return*/];
        }
    });
}); });
