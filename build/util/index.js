"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.getLogs = exports.toSymbols = exports.kyberTokens = exports.tokenList = exports.lookupBlock = exports.getLatestBlock = void 0;
var general_1 = require("../general");
var node_fetch_1 = __importDefault(require("node-fetch"));
var tokenList_1 = __importDefault(require("./tokenList"));
var ethers_1 = require("ethers");
var erc20_1 = require("../erc20");
var kavaBlockProvider = {
    getBlock: function (height) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, node_fetch_1.default("https://api.data.kava.io/blocks/" + height)
                    .then(function (res) { return res.json(); })
                    .then(function (block) { return ({
                    number: Number(block.block.header.height),
                    timestamp: Math.round(Date.parse(block.block.header.time) / 1000),
                }); })];
        });
    }); },
};
var terraBlockProvider = {
    getBlock: function (height) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, node_fetch_1.default("https://lcd.terra.dev/blocks/" + height)
                    .then(function (res) { return res.json(); })
                    .then(function (block) { return ({
                    number: Number(block.block.header.height),
                    timestamp: Math.round(Date.parse(block.block.header.time) / 1000),
                }); })];
        });
    }); },
};
var terra2BlockProvider = {
    getBlock: function (height) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, node_fetch_1.default("https://phoenix-lcd.terra.dev/blocks/" + height)
                    .then(function (res) { return res.json(); })
                    .then(function (block) { return ({
                    number: Number(block.block.header.height),
                    timestamp: Math.round(Date.parse(block.block.header.time) / 1000),
                }); })];
        });
    }); },
};
function getBlock(provider, height, chain) {
    return __awaiter(this, void 0, void 0, function () {
        var block;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, provider.getBlock(height)];
                case 1:
                    block = _a.sent();
                    if (block === null) {
                        throw new Error("Can't get block of chain " + (chain !== null && chain !== void 0 ? chain : 'ethereum'));
                    }
                    return [2 /*return*/, block];
            }
        });
    });
}
function getExtraProvider(chain) {
    if (chain === "terra") {
        return terraBlockProvider;
    }
    else if (chain === "terra2") {
        return terra2BlockProvider;
    }
    else if (chain === "kava") {
        return kavaBlockProvider;
    }
    return general_1.getProvider(chain);
}
function getLatestBlock(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var provider;
        return __generator(this, function (_a) {
            provider = getExtraProvider(chain);
            return [2 /*return*/, getBlock(provider, "latest", chain)];
        });
    });
}
exports.getLatestBlock = getLatestBlock;
var intialBlocks = {
    terra: 4724001,
    crab: 4969901
};
function lookupBlock(timestamp, extraParams) {
    var _a, _b, _c, _d, _e;
    if (extraParams === void 0) { extraParams = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var provider, lastBlock, high, low, block, mid, e_1;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 6, , 7]);
                    provider = getExtraProvider(extraParams.chain);
                    return [4 /*yield*/, getBlock(provider, "latest", extraParams.chain)];
                case 1:
                    lastBlock = _f.sent();
                    if ((lastBlock.timestamp - timestamp) < -30 * 60) {
                        throw new Error("Last block of chain \"" + extraParams.chain + "\" is further than 30 minutes into the past. Provider is \"" + ((_b = (_a = provider) === null || _a === void 0 ? void 0 : _a.connection) === null || _b === void 0 ? void 0 : _b.url) + "\"");
                    }
                    if (Math.abs(lastBlock.timestamp - timestamp) < 60) {
                        // Short-circuit in case we are trying to get the current block
                        return [2 /*return*/, {
                                block: lastBlock.number,
                                timestamp: lastBlock.timestamp,
                            }];
                    }
                    high = lastBlock.number;
                    low = (_d = intialBlocks[(_c = extraParams === null || extraParams === void 0 ? void 0 : extraParams.chain) !== null && _c !== void 0 ? _c : "ethereum"]) !== null && _d !== void 0 ? _d : 0;
                    block = void 0;
                    _f.label = 2;
                case 2:
                    mid = Math.floor((high + low) / 2);
                    return [4 /*yield*/, getBlock(provider, mid, extraParams.chain)];
                case 3:
                    block = _f.sent();
                    if (block.timestamp < timestamp) {
                        low = mid + 1;
                    }
                    else {
                        high = mid - 1;
                    }
                    _f.label = 4;
                case 4:
                    if (high - low > 4) return [3 /*break*/, 2];
                    _f.label = 5;
                case 5:
                    if (Math.abs(block.timestamp - timestamp) > 3600) {
                        throw new Error("Block selected is more than 1 hour away from the requested timestamp");
                    }
                    return [2 /*return*/, {
                            block: block.number,
                            timestamp: block.timestamp,
                        }];
                case 6:
                    e_1 = _f.sent();
                    console.log(e_1);
                    throw new Error("Couldn't find block height for chain " + ((_e = extraParams.chain) !== null && _e !== void 0 ? _e : 'ethereum') + ", RPC node rugged");
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.lookupBlock = lookupBlock;
// TODO: Pull the data from somewhere like coingecko
function tokenList() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, tokenList_1.default];
        });
    });
}
exports.tokenList = tokenList;
function kyberTokens() {
    return __awaiter(this, void 0, void 0, function () {
        var pairs, tokens;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, node_fetch_1.default("https://api.kyber.network/api/tokens/pairs").then(function (res) { return res.json(); })];
                case 1:
                    pairs = _a.sent();
                    tokens = Object.keys(pairs).reduce(function (acc, pairName) {
                        var pair = pairs[pairName];
                        acc[pair.contractAddress] = {
                            symbol: pair.symbol,
                            decimals: pair.decimals,
                            ethPrice: pair.currentPrice,
                        };
                        return acc;
                    }, {});
                    return [2 /*return*/, {
                            output: tokens,
                        }];
            }
        });
    });
}
exports.kyberTokens = kyberTokens;
function toSymbols(tokenBalances) {
    return __awaiter(this, void 0, void 0, function () {
        var tokens, output;
        var _a;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, tokenList()];
                case 1:
                    tokens = _b.sent();
                    output = Object.entries(tokenBalances).map(function (_a) {
                        var token = _a[0], balance = _a[1];
                        return __awaiter(_this, void 0, void 0, function () {
                            var tokenData, tokenSymbol, tokenDecimals, e_2, decimalBalance, _b, _c, _d, _e, _f, _g;
                            var _h;
                            var _j;
                            return __generator(this, function (_k) {
                                switch (_k.label) {
                                    case 0:
                                        tokenData = tokens.find(function (possibleToken) {
                                            return possibleToken.contract.toLowerCase() === token.toLowerCase();
                                        });
                                        if (token.toLowerCase() === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee") {
                                            tokenData = {
                                                symbol: "ETH",
                                                contract: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                                                decimals: "18",
                                            };
                                        }
                                        if (!(tokenData === undefined)) return [3 /*break*/, 5];
                                        _k.label = 1;
                                    case 1:
                                        _k.trys.push([1, 4, , 5]);
                                        tokenSymbol = erc20_1.symbol(token);
                                        tokenDecimals = erc20_1.decimals(token);
                                        _h = {};
                                        return [4 /*yield*/, tokenDecimals];
                                    case 2:
                                        _h.decimals = (_k.sent()).output,
                                            _h.contract = token.toLowerCase();
                                        return [4 /*yield*/, tokenSymbol];
                                    case 3:
                                        tokenData = (_h.symbol = (_k.sent()).output,
                                            _h);
                                        return [3 /*break*/, 5];
                                    case 4:
                                        e_2 = _k.sent();
                                        throw new Error("Failed to get token data for token at " + token);
                                    case 5:
                                        _b = Number(balance);
                                        _d = (_c = Math).pow;
                                        _e = [10];
                                        _f = Number;
                                        if (!((_j = tokenData === null || tokenData === void 0 ? void 0 : tokenData.decimals) !== null && _j !== void 0)) return [3 /*break*/, 6];
                                        _g = _j;
                                        return [3 /*break*/, 8];
                                    case 6: return [4 /*yield*/, erc20_1.decimals(token)];
                                    case 7:
                                        _g = (_k.sent()).output;
                                        _k.label = 8;
                                    case 8:
                                        decimalBalance = (_b /
                                            _d.apply(_c, _e.concat([_f.apply(void 0, [_g])]))).toFixed(6);
                                        return [2 /*return*/, {
                                                symbol: tokenData.symbol,
                                                address: tokenData.contract,
                                                balance: decimalBalance,
                                            }];
                                }
                            });
                        });
                    });
                    _a = {};
                    return [4 /*yield*/, Promise.all(output)];
                case 2: return [2 /*return*/, (_a.output = _b.sent(),
                        _a)];
            }
        });
    });
}
exports.toSymbols = toSymbols;
// SMALL INCOMPATIBILITY: On the old API we don't return ids but we should
function getLogs(params) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var filter, logs, blockSpread, currentBlock, nextBlock, partLogs, e_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (params.toBlock === undefined || params.fromBlock === undefined) {
                        throw new Error("toBlock and fromBlock need to be defined in all calls to getLogs");
                    }
                    filter = {
                        address: params.target,
                        topics: (_a = params.topics) !== null && _a !== void 0 ? _a : [ethers_1.utils.id(params.topic)],
                        fromBlock: params.fromBlock,
                        toBlock: params.toBlock, // We don't replicate Defipulse's bug because the results end up being the same anyway and hopefully they'll eventually fix it
                    };
                    logs = [];
                    blockSpread = params.toBlock - params.fromBlock;
                    currentBlock = params.fromBlock;
                    _b.label = 1;
                case 1:
                    if (!(currentBlock < params.toBlock)) return [3 /*break*/, 6];
                    nextBlock = Math.min(params.toBlock, currentBlock + blockSpread);
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, general_1.getProvider(params.chain).getLogs(__assign(__assign({}, filter), { fromBlock: currentBlock, toBlock: nextBlock }))];
                case 3:
                    partLogs = _b.sent();
                    logs = logs.concat(partLogs);
                    currentBlock = nextBlock;
                    return [3 /*break*/, 5];
                case 4:
                    e_3 = _b.sent();
                    if (blockSpread >= 2e3) {
                        // We got too many results
                        // We could chop it up into 2K block spreads as that is guaranteed to always return but then we'll have to make a lot of queries (easily >1000), so instead we'll keep dividing the block spread by two until we make it
                        blockSpread = Math.floor(blockSpread / 2);
                    }
                    else {
                        throw e_3;
                    }
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 1];
                case 6:
                    if (params.keys.length > 0) {
                        if (params.keys[0] !== "topics") {
                            throw new Error("Unsupported");
                        }
                        return [2 /*return*/, {
                                output: logs.map(function (log) { return log.topics; }),
                            }];
                    }
                    return [2 /*return*/, {
                            output: logs,
                        }];
            }
        });
    });
}
exports.getLogs = getLogs;
