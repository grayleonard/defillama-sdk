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
exports.multiCall = exports.call = void 0;
var cachedABIs_1 = __importDefault(require("./cachedABIs"));
var ethers_1 = require("ethers");
var general_1 = require("../general");
var multicall_1 = __importDefault(require("./multicall"));
var convertResults_1 = __importDefault(require("./convertResults"));
var promise_pool_1 = require("@supercharge/promise-pool");
function resolveABI(providedAbi) {
    var abi = providedAbi;
    if (typeof abi === "string") {
        abi = cachedABIs_1.default[abi];
        if (abi === undefined) {
            throw new Error("ABI method undefined");
        }
    }
    // If type is omitted DP's sdk processes it fine but we don't, so we need to add it
    return __assign({ type: "function" }, abi);
}
function normalizeParams(params) {
    if (params === undefined) {
        return [];
    }
    else if (typeof params === "object") {
        return params;
    }
    else {
        return [params];
    }
}
function call(params) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var abi, callParams, contractInterface, functionABI, callData, result, decodedResult;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    abi = resolveABI(params.abi);
                    callParams = normalizeParams(params.params);
                    contractInterface = new ethers_1.ethers.utils.Interface([abi]);
                    functionABI = ethers_1.ethers.utils.FunctionFragment.from(abi);
                    callData = contractInterface.encodeFunctionData(functionABI, callParams);
                    return [4 /*yield*/, general_1.getProvider(params.chain).call({
                            to: params.target,
                            data: callData,
                        }, (_a = params.block) !== null && _a !== void 0 ? _a : "latest")];
                case 1:
                    result = _b.sent();
                    decodedResult = contractInterface.decodeFunctionResult(functionABI, result);
                    return [2 /*return*/, {
                            output: convertResults_1.default(decodedResult),
                        }];
            }
        });
    });
}
exports.call = call;
function multiCall(params) {
    return __awaiter(this, void 0, void 0, function () {
        var abi, contractCalls, chunkSize, contractChunks, i, _a, results, errors, flatResults, failed, newResults_1;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    abi = resolveABI(params.abi);
                    contractCalls = params.calls.map(function (call, index) {
                        var _a;
                        var callParams = normalizeParams(call.params);
                        return {
                            params: callParams,
                            contract: (_a = call.target) !== null && _a !== void 0 ? _a : params.target,
                        };
                    });
                    chunkSize = 500;
                    contractChunks = [];
                    for (i = 0; i < contractCalls.length; i += chunkSize)
                        contractChunks.push(contractCalls.slice(i, i + chunkSize));
                    return [4 /*yield*/, promise_pool_1.PromisePool
                            .withConcurrency(20)
                            .for(contractChunks)
                            .process(function (calls, i) { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                return [2 /*return*/, multicall_1.default(abi, calls, (_a = params.chain) !== null && _a !== void 0 ? _a : "ethereum", params.block).then(function (calls) { return [calls, i]; })];
                            });
                        }); })];
                case 1:
                    _a = _b.sent(), results = _a.results, errors = _a.errors;
                    if (errors.length)
                        throw errors[0];
                    flatResults = [].concat.apply([], results
                        .sort(function (_a, _b) {
                        var c1 = _a[0], i1 = _a[1];
                        var c2 = _b[0], i2 = _b[1];
                        return i1 - i2;
                    }).map(function (_a) {
                        var c = _a[0], i = _a[1];
                        return c;
                    }));
                    if (!(params.requery === true && flatResults.some(function (r) { return !r.success; }))) return [3 /*break*/, 3];
                    failed = flatResults.map(function (r, i) { return [r, i]; }).filter(function (r) { return !r[0].success; });
                    return [4 /*yield*/, multiCall({
                            abi: params.abi,
                            chain: params.chain,
                            calls: failed.map(function (f) { return f[0].input; }),
                            block: params.block,
                            requery: params.requery,
                        }).then(function (_a) {
                            var output = _a.output;
                            return output;
                        })];
                case 2:
                    newResults_1 = _b.sent();
                    failed.forEach(function (f, i) {
                        flatResults[f[1]] = newResults_1[i];
                    });
                    _b.label = 3;
                case 3: return [2 /*return*/, {
                        output: flatResults, // flatten array
                    }];
            }
        });
    });
}
exports.multiCall = multiCall;
