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
exports.AGGREGATE_SELECTOR = exports.MULTICALL_ADDRESS_OPTIMISM = exports.MULTICALL_ADDRESS_AURORA = exports.MULTICALL_ADDRESS_MOONRIVER = exports.MULTICALL_ADDRESS_AVAX = exports.MULTICALL_ADDRESS_ARBITRUM = exports.MULTICALL_ADDRESS_HARMONY = exports.MULTICALL_ADDRESS_HECO = exports.MULTICALL_ADDRESS_XDAI = exports.MULTICALL_ADDRESS_FANTOM = exports.MULTICALL_ADDRESS_BSC = exports.MULTICALL_ADDRESS_POLYGON = exports.MULTICALL_ADDRESS_GOERLI = exports.MULTICALL_ADDRESS_RINKEBY = exports.MULTICALL_ADDRESS_KOVAN = exports.MULTICALL_ADDRESS_MAINNET = void 0;
var ethers_1 = require("ethers");
var utils_1 = require("ethers/lib/utils");
var general_1 = require("../general");
var convertResults_1 = __importDefault(require("./convertResults"));
var rpcCall_1 = require("./rpcCall");
exports.MULTICALL_ADDRESS_MAINNET = "0xeefba1e63905ef1d7acba5a8513c70307c1ce441";
exports.MULTICALL_ADDRESS_KOVAN = "0x2cc8688c5f75e365aaeeb4ea8d6a480405a48d2a";
exports.MULTICALL_ADDRESS_RINKEBY = "0x42ad527de7d4e9d9d011ac45b31d8551f8fe9821";
exports.MULTICALL_ADDRESS_GOERLI = "0x77dca2c955b15e9de4dbbcf1246b4b85b651e50e";
exports.MULTICALL_ADDRESS_POLYGON = "0x95028E5B8a734bb7E2071F96De89BABe75be9C8E";
exports.MULTICALL_ADDRESS_BSC = "0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb";
exports.MULTICALL_ADDRESS_FANTOM = "0xb828C456600857abd4ed6C32FAcc607bD0464F4F";
exports.MULTICALL_ADDRESS_XDAI = "0xb5b692a88BDFc81ca69dcB1d924f59f0413A602a";
exports.MULTICALL_ADDRESS_HECO = "0xc9a9F768ebD123A00B52e7A0E590df2e9E998707";
exports.MULTICALL_ADDRESS_HARMONY = "0xFE4980f62D708c2A84D3929859Ea226340759320";
exports.MULTICALL_ADDRESS_ARBITRUM = "0x842eC2c7D803033Edf55E478F461FC547Bc54EB2";
exports.MULTICALL_ADDRESS_AVAX = "0xdf2122931FEb939FB8Cf4e67Ea752D1125e18858";
exports.MULTICALL_ADDRESS_MOONRIVER = "0xe05349d6fE12602F6084550995B247a5C80C0E2C";
exports.MULTICALL_ADDRESS_AURORA = "0xe0e3887b158F7F9c80c835a61ED809389BC08d1b";
exports.MULTICALL_ADDRESS_OPTIMISM = "0xD0E99f15B24F265074747B2A1444eB02b9E30422";
exports.AGGREGATE_SELECTOR = "0x252dba42";
function makeMultiCall(functionABI, calls, chain, block) {
    return __awaiter(this, void 0, void 0, function () {
        var contractInterface, fd, contractCalls, returnValues;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contractInterface = new ethers_1.ethers.utils.Interface([functionABI]);
                    fd = Object.values(contractInterface.functions)[0];
                    contractCalls = calls.map(function (call) {
                        var data = contractInterface.encodeFunctionData(fd, call.params);
                        return {
                            to: call.contract,
                            data: data,
                        };
                    });
                    return [4 /*yield*/, executeCalls(contractCalls, chain, block)];
                case 1:
                    returnValues = _a.sent();
                    return [2 /*return*/, returnValues.map(function (values, index) {
                            var output;
                            try {
                                output = convertResults_1.default(contractInterface.decodeFunctionResult(fd, values));
                            }
                            catch (e) {
                                output = null;
                            }
                            return {
                                input: {
                                    params: calls[index].params,
                                    target: calls[index].contract,
                                },
                                success: output !== null,
                                output: output,
                            };
                        })];
            }
        });
    });
}
exports.default = makeMultiCall;
function executeCalls(contractCalls, chain, block) {
    return __awaiter(this, void 0, void 0, function () {
        var multicallData, address, callData, tx, returnData, _a, blockNumber, returnValues, e_1, values;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, networkSupportsMulticall(chain)];
                case 1:
                    if (!_b.sent()) return [3 /*break*/, 6];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 5, , 6]);
                    multicallData = ethers_1.ethers.utils.defaultAbiCoder.encode([
                        utils_1.ParamType.fromObject({
                            components: [
                                { name: "target", type: "address" },
                                { name: "callData", type: "bytes" },
                            ],
                            name: "data",
                            type: "tuple[]",
                        }),
                    ], [contractCalls.map(function (call) { return [call.to, call.data]; })]);
                    return [4 /*yield*/, multicallAddressOrThrow(chain)];
                case 3:
                    address = _b.sent();
                    callData = exports.AGGREGATE_SELECTOR + multicallData.substr(2);
                    tx = {
                        to: address,
                        data: callData,
                    };
                    return [4 /*yield*/, rpcCall_1.call(general_1.getProvider(chain), tx, block !== null && block !== void 0 ? block : "latest", chain)];
                case 4:
                    returnData = _b.sent();
                    _a = ethers_1.ethers.utils.defaultAbiCoder.decode(["uint256", "bytes[]"], returnData), blockNumber = _a[0], returnValues = _a[1];
                    return [2 /*return*/, returnValues];
                case 5:
                    e_1 = _b.sent();
                    if (!process.env.DEFILLAMA_SDK_MUTED) {
                        console.log("Multicall failed, defaulting to single transactions...");
                    }
                    return [3 /*break*/, 6];
                case 6: return [4 /*yield*/, Promise.all(contractCalls.map(function (_a) {
                        var to = _a.to, data = _a.data;
                        return __awaiter(_this, void 0, void 0, function () {
                            var e_2;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        _b.trys.push([0, 2, , 3]);
                                        return [4 /*yield*/, rpcCall_1.call(general_1.getProvider(chain), { to: to, data: data }, block !== null && block !== void 0 ? block : "latest", chain)];
                                    case 1: return [2 /*return*/, _b.sent()];
                                    case 2:
                                        e_2 = _b.sent();
                                        return [2 /*return*/, null];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        });
                    }))];
                case 7:
                    values = _b.sent();
                    return [2 /*return*/, values];
            }
        });
    });
}
function multicallAddressOrThrow(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var network, address, msg;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, general_1.getProvider(chain).getNetwork()];
                case 1:
                    network = _a.sent();
                    address = multicallAddress(network.chainId);
                    if (address === null) {
                        msg = "multicall is not available on the network " + network.chainId;
                        console.error(msg);
                        throw new Error(msg);
                    }
                    return [2 /*return*/, address];
            }
        });
    });
}
function networkSupportsMulticall(chain) {
    return __awaiter(this, void 0, void 0, function () {
        var network, address;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, general_1.getProvider(chain).network];
                case 1:
                    network = _a.sent();
                    address = multicallAddress(network.chainId);
                    return [2 /*return*/, address !== null];
            }
        });
    });
}
function multicallAddress(chainId) {
    switch (chainId) {
        case 1:
            return exports.MULTICALL_ADDRESS_MAINNET;
        case 42:
            return exports.MULTICALL_ADDRESS_KOVAN;
        case 4:
            return exports.MULTICALL_ADDRESS_RINKEBY;
        case 5:
            return exports.MULTICALL_ADDRESS_GOERLI;
        case 137:
            return exports.MULTICALL_ADDRESS_POLYGON;
        case 56:
            return exports.MULTICALL_ADDRESS_BSC;
        case 250:
            return exports.MULTICALL_ADDRESS_FANTOM;
        case 100:
            return exports.MULTICALL_ADDRESS_XDAI;
        case 128:
            return exports.MULTICALL_ADDRESS_HECO;
        case 1666600000:
            return exports.MULTICALL_ADDRESS_HARMONY;
        case 42161:
            return exports.MULTICALL_ADDRESS_ARBITRUM;
        case 43114:
            return exports.MULTICALL_ADDRESS_AVAX;
        case 1285:
            return exports.MULTICALL_ADDRESS_MOONRIVER;
        case 1313161554:
            return exports.MULTICALL_ADDRESS_AURORA;
        case 10:
            return exports.MULTICALL_ADDRESS_OPTIMISM;
        case 25:
            return "0x5e954f5972EC6BFc7dECd75779F10d848230345F"; // cronos
        case 246:
            return "0x18fA376d92511Dd04090566AB6144847c03557d8"; // energy web chain
        case 336:
            return "0x18fA376d92511Dd04090566AB6144847c03557d8"; // shiden
        case 592:
            return "0x18fA376d92511Dd04090566AB6144847c03557d8"; // astar
        case 269:
            return "0x18fA376d92511Dd04090566AB6144847c03557d8"; // High performance blockchain
        case 2222:
            return "0x30A62aA52Fa099C4B227869EB6aeaDEda054d121"; // kava
        default:
            return null;
    }
}
