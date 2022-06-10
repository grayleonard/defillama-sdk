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
exports.chainToCoingeckoId = void 0;
var abi_1 = require("../abi");
var humanizeNumber_1 = require("./humanizeNumber");
var prices_1 = require("./prices");
var node_fetch_1 = __importDefault(require("node-fetch"));
var generalUtil_1 = require("../generalUtil");
function tokenMulticall(addresses, abi, chain) {
    return abi_1.multiCall({
        abi: abi,
        calls: addresses.map(function (address) { return ({
            target: address,
            params: [],
        }); }),
        chain: chain,
    });
}
function addTokenBalance(balances, symbol, amount) {
    balances[symbol] = (balances[symbol] || 0) + amount;
}
function historicalCoingeckoUrls(chain) {
    if (chain === 'coingecko') {
        return "https://api.coingecko.com/api/v3/coins";
    }
    var platformId = exports.chainToCoingeckoId[chain];
    if (platformId !== undefined) {
        return "https://api.coingecko.com/api/v3/coins/" + platformId + "/contract";
    }
    throw new Error("Chain not supported");
}
exports.chainToCoingeckoId = {
    bsc: "binance-smart-chain",
    ethereum: "ethereum",
    polygon: "polygon-pos",
    avax: "avalanche",
    fantom: "fantom",
    xdai: "xdai",
    heco: "huobi-token",
    okexchain: "okex-chain",
    harmony: "harmony-shard-0",
    kcc: "kucoin-community-chain",
    celo: "celo",
    arbitrum: "arbitrum-one",
    iotex: "iotex",
    moonriver: "moonriver",
    solana: "solana",
    terra: "terra",
    tron: "tron",
    waves: "waves",
    klaytn: "klay-token",
    osmosis: "osmosis",
    kava: "kava",
    icon: "icon",
    optimism: "optimistic-ethereum",
    eos: "eos",
    secret: "secret",
    rsk: "rootstock",
    neo: "neo",
    tezos: "tezos",
    wan: "wanchain",
    ontology: "ontology",
    algorand: "algorand",
    zilliqa: "zilliqa",
    kardia: "kardiachain",
    cronos: "cronos",
    aurora: "aurora",
    boba: "boba",
    metis: "metis-andromeda",
    telos: "telos",
    moonbeam: "moonbeam",
    velas: "velas",
    milkomeda: "milkomeda-cardano",
};
var chains = Object.keys(exports.chainToCoingeckoId);
function getHistoricalChainPrices(ids, timestamp, knownTokenPrices, getCoingeckoLock, coingeckoMaxRetries) {
    return __awaiter(this, void 0, void 0, function () {
        var chainPrices, _i, _a, chain, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    chainPrices = {};
                    _i = 0, _a = chains.concat(["coingecko"]);
                    _d.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 5];
                    chain = _a[_i];
                    if (!(ids[chain].length === 0)) return [3 /*break*/, 2];
                    chainPrices[chain] = {};
                    return [3 /*break*/, 4];
                case 2:
                    _b = chainPrices;
                    _c = chain;
                    return [4 /*yield*/, prices_1.getHistoricalTokenPrices(ids[chain], historicalCoingeckoUrls(chain), timestamp, getCoingeckoLock, coingeckoMaxRetries)];
                case 3:
                    _b[_c] = _d.sent();
                    _d.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/, chainPrices];
            }
        });
    });
}
function getChainSymbolsAndDecimals(ids, maxRetries) {
    return __awaiter(this, void 0, void 0, function () {
        var allCoins, i, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    allCoins = Object.entries(ids).map(function (chain) {
                        return chain[1].map(function (coin) { return chain[0] === "coingecko" ? coin.toLowerCase() : chain[0] + ":" + coin.toLowerCase(); });
                    })
                        .reduce(function (acc, coins) {
                        coins.forEach(function (coin) {
                            acc.add(coin);
                        });
                        return acc;
                    }, new Set([]));
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < maxRetries)) return [3 /*break*/, 4];
                    return [4 /*yield*/, node_fetch_1.default('https://api.llama.fi/coins', {
                            method: 'POST',
                            body: JSON.stringify({
                                coins: Array.from(allCoins)
                            })
                        }).then(function (response) { return response.json(); })];
                case 2:
                    response = _a.sent();
                    if (Array.isArray(response)) {
                        return [2 /*return*/, response];
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: throw new Error("api.llama.fi/coins failed");
            }
        });
    });
}
function default_1(rawBalances, timestamp, verbose, knownTokenPrices, getCoingeckoLock, coingeckoMaxRetries) {
    if (verbose === void 0) { verbose = false; }
    if (knownTokenPrices === void 0) { knownTokenPrices = {}; }
    if (getCoingeckoLock === void 0) { getCoingeckoLock = function () { return Promise.resolve(); }; }
    if (coingeckoMaxRetries === void 0) { coingeckoMaxRetries = 3; }
    return __awaiter(this, void 0, void 0, function () {
        var balances, callTokenDecimals_1, chainIds, _i, chains_1, chain, normalizedBalances, _a, _b, tokenAddressOrName, normalizedAddressOrName, normalizedBalance, chain, symbolsAndDecimals, allChainTokenPrices, usdTokenBalances, tokenBalances, usdAmounts, usdTvl;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!(rawBalances instanceof Array)) return [3 /*break*/, 2];
                    return [4 /*yield*/, abi_1.multiCall({
                            abi: "erc20:decimals",
                            calls: rawBalances.map(function (token) { return ({
                                target: token.address,
                                params: [],
                            }); }),
                        })];
                case 1:
                    callTokenDecimals_1 = (_c.sent()).output;
                    balances = rawBalances.reduce(function (acc, token, index) {
                        var dec;
                        if (callTokenDecimals_1[index].success) {
                            dec = Number(callTokenDecimals_1[index].output);
                        }
                        else {
                            if (token.address === "0x0000000000000000000000000000000000000000") {
                                dec = 18;
                            }
                            else {
                                dec = NaN;
                            }
                        }
                        acc[token.address] = (Number(token.balance) * Math.pow(10, dec)).toString();
                        return acc;
                    }, {});
                    return [3 /*break*/, 3];
                case 2:
                    balances = rawBalances;
                    _c.label = 3;
                case 3:
                    chainIds = {
                        coingecko: [],
                    };
                    for (_i = 0, chains_1 = chains; _i < chains_1.length; _i++) {
                        chain = chains_1[_i];
                        chainIds[chain] = [];
                    }
                    normalizedBalances = {};
                    for (_a = 0, _b = Object.keys(balances); _a < _b.length; _a++) {
                        tokenAddressOrName = _b[_a];
                        normalizedAddressOrName = tokenAddressOrName;
                        normalizedBalance = balances[tokenAddressOrName];
                        if (tokenAddressOrName === "0x0000000000000000000000000000000000000000") {
                            normalizedAddressOrName = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"; // Normalize ETH to WETH
                        }
                        if (typeof normalizedBalance === "object") {
                            normalizedBalances[normalizedAddressOrName] = normalizedBalance.toFixed(); // Some adapters return a BigNumber from bignumber.js so the results must be normalized
                        }
                        else {
                            generalUtil_1.sumSingleBalance(normalizedBalances, normalizedAddressOrName, normalizedBalance);
                        }
                        if (normalizedAddressOrName.startsWith("0x")) {
                            chainIds.ethereum.push(normalizedAddressOrName);
                        }
                        else if (normalizedAddressOrName.includes(":")) {
                            chain = normalizedAddressOrName.split(':')[0];
                            chainIds[chain].push(normalizedAddressOrName.slice(chain.length + 1));
                        }
                        else {
                            chainIds.coingecko.push(normalizedAddressOrName);
                        }
                    }
                    return [4 /*yield*/, getChainSymbolsAndDecimals(chainIds, coingeckoMaxRetries)];
                case 4:
                    symbolsAndDecimals = _c.sent();
                    if (!(timestamp === "now")) return [3 /*break*/, 5];
                    allChainTokenPrices = symbolsAndDecimals.reduce(function (prices, item) {
                        var chain, address;
                        if (item.coin.includes(":")) {
                            chain = item.coin.split(':')[0];
                            address = item.coin.split(':')[1];
                        }
                        else {
                            chain = "coingecko";
                            address = item.coin;
                        }
                        if (prices[chain] === undefined) {
                            prices[chain] = {};
                        }
                        prices[chain][address] = { usd: item.price };
                        return prices;
                    }, {});
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, getHistoricalChainPrices(chainIds, timestamp, knownTokenPrices, getCoingeckoLock, coingeckoMaxRetries)];
                case 6:
                    allChainTokenPrices = _c.sent();
                    _c.label = 7;
                case 7:
                    usdTokenBalances = {};
                    tokenBalances = {};
                    usdAmounts = Object.entries(normalizedBalances).map(function (_a) {
                        var address = _a[0], balance = _a[1];
                        return __awaiter(_this, void 0, void 0, function () {
                            var amount, price, tokenSymbol, normalizedAddress_1, chainSelector_1, chainTokenPrices, chainAddress_1, coinData, tokenDecimals, usdAmount;
                            var _b, _c, _d, _e;
                            return __generator(this, function (_f) {
                                try {
                                    if (address.startsWith("0x") || address.includes(":")) {
                                        normalizedAddress_1 = address;
                                        chainSelector_1 = "ethereum";
                                        chains.forEach(function (chain) {
                                            if (address.startsWith(chain)) {
                                                chainSelector_1 = chain;
                                                normalizedAddress_1 = address.slice(chain.length + 1);
                                            }
                                        });
                                        chainTokenPrices = (_b = allChainTokenPrices[chainSelector_1]) !== null && _b !== void 0 ? _b : {};
                                        chainAddress_1 = chainSelector_1 + ":" + normalizedAddress_1.toLowerCase();
                                        coinData = symbolsAndDecimals.find(function (coin) { return coin.coin === chainAddress_1; });
                                        tokenSymbol = (_c = coinData === null || coinData === void 0 ? void 0 : coinData.symbol) === null || _c === void 0 ? void 0 : _c.toUpperCase();
                                        if (tokenSymbol === undefined || tokenSymbol === null) {
                                            tokenSymbol = "UNKNOWN (" + address + ")";
                                        }
                                        tokenDecimals = coinData === null || coinData === void 0 ? void 0 : coinData.decimals;
                                        if (tokenDecimals === undefined) {
                                            amount = 0;
                                        }
                                        else {
                                            amount = Number(balance) / Math.pow(10, Number(tokenDecimals));
                                        }
                                        price = (_d = chainTokenPrices[normalizedAddress_1.toLowerCase()]) === null || _d === void 0 ? void 0 : _d.usd;
                                    }
                                    else {
                                        tokenSymbol = address;
                                        price = (_e = allChainTokenPrices["coingecko"][address.toLowerCase()]) === null || _e === void 0 ? void 0 : _e.usd;
                                        amount = Number(balance);
                                    }
                                    if (price === undefined) {
                                        if (verbose) {
                                            console.log("Token " + address + " is not on coingecko, it'll be ignored");
                                        }
                                        price = 0;
                                    }
                                    addTokenBalance(tokenBalances, tokenSymbol, amount);
                                    usdAmount = amount * price;
                                    addTokenBalance(usdTokenBalances, tokenSymbol, usdAmount);
                                    return [2 /*return*/, { usdAmount: usdAmount, tokenSymbol: tokenSymbol }];
                                }
                                catch (e) {
                                    console.error("Error on token " + address + ", we'll just assume it's price is 0...", e);
                                    return [2 /*return*/, {
                                            usdAmount: 0,
                                            tokenSymbol: "ERROR " + address,
                                        }];
                                }
                                return [2 /*return*/];
                            });
                        });
                    });
                    if (!verbose) return [3 /*break*/, 9];
                    return [4 /*yield*/, Promise.all(usdAmounts)];
                case 8:
                    (_c.sent())
                        .sort(function (a, b) { return b.usdAmount - a.usdAmount; })
                        .map(function (token) {
                        console.log(token.tokenSymbol.padEnd(25, " "), humanizeNumber_1.humanizeNumber(token.usdAmount));
                    });
                    _c.label = 9;
                case 9: return [4 /*yield*/, Promise.all(usdAmounts)];
                case 10:
                    usdTvl = (_c.sent()).reduce(function (sum, token) {
                        return sum + token.usdAmount;
                    }, 0);
                    return [2 /*return*/, {
                            usdTvl: usdTvl,
                            usdTokenBalances: usdTokenBalances,
                            tokenBalances: tokenBalances,
                        }];
            }
        });
    });
}
exports.default = default_1;
