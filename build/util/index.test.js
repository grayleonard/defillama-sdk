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
jest.setTimeout(20000);
test("lookupBlock", function () { return __awaiter(void 0, void 0, void 0, function () {
    var block;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1.lookupBlock(1594115200)];
            case 1:
                block = _a.sent();
                // Approximation, DP's sdk returns { timestamp: 1594112400, block: 10411348 }
                expect(block.block).toBeCloseTo(10411539, -1.5);
                expect(block.timestamp).toBeCloseTo(1594115202, -2.5);
                return [2 /*return*/];
        }
    });
}); });
test("lookupBlock on xdai and terra", function () { return __awaiter(void 0, void 0, void 0, function () {
    var calls, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                calls = [];
                for (i = 0; i < 10; i++) {
                    calls.push(index_1.lookupBlock(1594115200, {
                        chain: "xdai",
                    }), index_1.lookupBlock(1594115200, {
                        chain: "terra",
                    }));
                }
                return [4 /*yield*/, Promise.all(calls)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
test("tokenList", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.tokenList()];
            case 1:
                _a.apply(void 0, [(_b.sent()).length]).toMatchInlineSnapshot("811");
                return [2 /*return*/];
        }
    });
}); });
test("kyberTokens", function () { return __awaiter(void 0, void 0, void 0, function () {
    var tokens, keys, i, key;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1.kyberTokens()];
            case 1:
                tokens = _a.sent();
                keys = Object.keys(tokens.output);
                for (i = 0; i < keys.length; i++) {
                    key = keys[i];
                    if (i < 3) {
                        tokens.output[key].ethPrice = 0.002; // To avoid constant changes that break the snapshot
                    }
                    else {
                        delete tokens.output[key];
                    }
                }
                expect(tokens).toEqual({
                    output: {
                        "0x111111111117dc0aa78b770fa6a738034120c302": {
                            symbol: "1INCH",
                            decimals: 18,
                            ethPrice: 0.002,
                        },
                        "0xe48972fcd82a274411c01834e2f031d4377fa2c0": {
                            symbol: "2KEY",
                            decimals: 18,
                            ethPrice: 0.002,
                        },
                        "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9": {
                            symbol: "AAVE",
                            decimals: 18,
                            ethPrice: 0.002,
                        },
                    },
                });
                return [2 /*return*/];
        }
    });
}); });
var sortSymbols = function (a, b) { return (a.address > b.address ? 1 : -1); };
test("toSymbols", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.toSymbols({
                        "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE": "2.363644408933851e+23",
                        "0x6B175474E89094C44Da98b954EedeAC495271d0F": "2.3462351944349785e+26",
                        "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48": "370186290673080",
                        "0xdAC17F958D2ee523a2206206994597C13D831ec7": "411511818650054",
                        "0xC2cB1040220768554cf699b0d863A3cd4324ce32": "1.232581672477717e+25",
                    })];
            case 1:
                _a.apply(void 0, [(_b.sent()).output.sort(sortSymbols)]).toEqual(JSON.parse('[{"symbol":"ETH","address":"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","balance":"236364.440893"},{"symbol":"DAI","address":"0x6b175474e89094c44da98b954eedeac495271d0f","balance":"234623519.443498"},{"symbol":"USDC","address":"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48","balance":"370186290.673080"},{"symbol":"USDT","address":"0xdac17f958d2ee523a2206206994597c13d831ec7","balance":"411511818.650054"},{"symbol":"yDAI","address":"0xc2cb1040220768554cf699b0d863a3cd4324ce32","balance":"12325816.724777"}]').sort(sortSymbols));
                return [2 /*return*/];
        }
    });
}); });
test("toSymbols works well with 0x0 as an ETH address", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.toSymbols({
                        "0x0000000000000000000000000000000000000000": "2100000000000000000", // ETH
                    })];
            case 1:
                _a.apply(void 0, [_b.sent()]).toEqual({
                    output: [
                        {
                            symbol: "ETH",
                            address: "0x0000000000000000000000000000000000000000",
                            balance: "2.100000",
                        },
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
test("getLogs", function () { return __awaiter(void 0, void 0, void 0, function () {
    var poolLogs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, index_1.getLogs({
                    target: "0x9424B1412450D0f8Fc2255FAf6046b98213B76Bd",
                    topic: "LOG_NEW_POOL(address,address)",
                    keys: ["topics"],
                    fromBlock: 9562480,
                    toBlock: 9575480,
                })];
            case 1:
                poolLogs = _a.sent();
                expect(poolLogs).toEqual({
                    output: [
                        [
                            "0x8ccec77b0cb63ac2cafd0f5de8cdfadab91ce656d262240ba8a6343bccc5f945",
                            "0x00000000000000000000000018fa2ac3c88112e36eff15370346f9aff3161fd1",
                            "0x000000000000000000000000165a50bc092f6870dc111c349bae5fc35147ac86",
                        ],
                        [
                            "0x8ccec77b0cb63ac2cafd0f5de8cdfadab91ce656d262240ba8a6343bccc5f945",
                            "0x00000000000000000000000018fa2ac3c88112e36eff15370346f9aff3161fd1",
                            "0x00000000000000000000000057755f7dec33320bca83159c26e93751bfd30fbe",
                        ],
                        [
                            "0x8ccec77b0cb63ac2cafd0f5de8cdfadab91ce656d262240ba8a6343bccc5f945",
                            "0x00000000000000000000000018fa2ac3c88112e36eff15370346f9aff3161fd1",
                            "0x000000000000000000000000e5d1fab0c5596ef846dcc0958d6d0b20e1ec4498",
                        ],
                    ],
                });
                return [2 /*return*/];
        }
    });
}); });
test("getLogs supports it's old API", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.getLogs({
                        keys: [],
                        toBlock: 12047406,
                        target: "0x35d1b3f3d7966a1dfe207aa4514c12a259a0492b",
                        fromBlock: 8928152,
                        topics: [
                            "0x65fae35e00000000000000000000000000000000000000000000000000000000",
                        ],
                    })];
            case 1:
                _a.apply(void 0, [(_b.sent()).output.slice(0, 2)]).toEqual([
                    {
                        address: "0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B",
                        blockHash: "0x4e0c6d0ceaade9476d0798a44452117c42300389f43ad8397e91092827019fed",
                        blockNumber: 8928152,
                        data: "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e065fae35e000000000000000000000000baa65281c2fa2baacb2cb550ba051525a480d3f40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                        logIndex: 64,
                        removed: false,
                        topics: [
                            "0x65fae35e00000000000000000000000000000000000000000000000000000000",
                            "0x000000000000000000000000baa65281c2fa2baacb2cb550ba051525a480d3f4",
                            "0x0000000000000000000000000000000000000000000000000000000000000000",
                            "0x0000000000000000000000000000000000000000000000000000000000000000",
                        ],
                        transactionHash: "0xa39edcdeb7310150d7be44b8da94e5043d1cf8600d59f855a65c7a9c035b06a7",
                        transactionIndex: 66,
                        //id: 'log_4301d412' // SHOULD BE SUPPORTED BUT HEH
                    },
                    {
                        address: "0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B",
                        blockHash: "0x4e0c6d0ceaade9476d0798a44452117c42300389f43ad8397e91092827019fed",
                        blockNumber: 8928152,
                        data: "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000e065fae35e00000000000000000000000065c79fcb50ca1594b025960e539ed7a9a6d434a30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
                        logIndex: 68,
                        removed: false,
                        topics: [
                            "0x65fae35e00000000000000000000000000000000000000000000000000000000",
                            "0x00000000000000000000000065c79fcb50ca1594b025960e539ed7a9a6d434a3",
                            "0x0000000000000000000000000000000000000000000000000000000000000000",
                            "0x0000000000000000000000000000000000000000000000000000000000000000",
                        ],
                        transactionHash: "0xa39edcdeb7310150d7be44b8da94e5043d1cf8600d59f855a65c7a9c035b06a7",
                        transactionIndex: 66,
                        //id: 'log_eaa6bc34' // SHOULD BE SUPPORTED BUT HEH
                    },
                ]);
                return [2 /*return*/];
        }
    });
}); });
test("sushiswap getLogs follow the old API", function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = expect;
                return [4 /*yield*/, index_1.getLogs({
                        keys: [],
                        toBlock: 12052813,
                        target: "0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac",
                        fromBlock: 10794229,
                        topic: "PairCreated(address,address,address,uint256)",
                    })];
            case 1:
                _a.apply(void 0, [(_b.sent()).output.slice(0, 2)]).toEqual([
                    {
                        address: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
                        blockHash: "0xf59ff7fcf1443e7e61582224359a030bb7178871182cc543acb16627e81ec1a8",
                        blockNumber: 10794352,
                        data: "0x000000000000000000000000680a025da7b1be2c204d7745e809919bce0740260000000000000000000000000000000000000000000000000000000000000001",
                        logIndex: 81,
                        removed: false,
                        topics: [
                            "0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9",
                            "0x0000000000000000000000006b3595068778dd592e39a122f4f5a5cf09c90fe2",
                            "0x000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7",
                        ],
                        transactionHash: "0x64318dfffc6544cb4782715ad914e335039cda02f5e8d3e47f0dac47f53565d2",
                        transactionIndex: 56,
                        //id: 'log_20f0cd7e'
                    },
                    {
                        address: "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac",
                        blockHash: "0x25c6da25c999e1c668d60a5068128eb521ef121e4b46fb24575ed6fb037ede67",
                        blockNumber: 10822038,
                        data: "0x00000000000000000000000006da0fd433c1a5d7a4faa01111c044910a1845530000000000000000000000000000000000000000000000000000000000000002",
                        logIndex: 202,
                        removed: false,
                        topics: [
                            "0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9",
                            "0x000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                            "0x000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7",
                        ],
                        transactionHash: "0xaf215158cef8da66b2f6addc48d8683199468560599ac568b8981d9d67dc04b6",
                        transactionIndex: 89,
                        //id: 'log_2758f079'
                    },
                ]);
                return [2 /*return*/];
        }
    });
}); });
