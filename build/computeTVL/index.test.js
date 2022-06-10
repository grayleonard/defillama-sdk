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
var _1 = __importDefault(require("."));
jest.setTimeout(10000);
test("compute tvl of ethereum and bsc tokens", function () { return __awaiter(void 0, void 0, void 0, function () {
    var knownPrices, _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                knownPrices = {};
                _a = expect;
                return [4 /*yield*/, _1.default({
                        "0x6f259637dcd74c767781e37bc6133cd6a68aa161": "3193525665566784275723138",
                        "heco:0xecb56cf772B5c9A6907FB7d32387Da2fCbfB63b4": "1047556118646987925068",
                        "heco:0xA2c49cEe16a5E5bDEFDe931107dc1fae9f7773E3": "236654328014720960482935",
                        "heco:0xae3a768f9aB104c69A7CD6041fE16fFa235d1810": "16569632182924952096418",
                        "heco:0x9e004545c59D359F6B7BFB06a26390b087717b42": "961004175478694236526",
                        "binance-eth": 27.06634107102854,
                        "heco:0xa71EdC38d189767582C38A3145b5873052c3e47a": "31268806605177889114148968",
                        "heco:0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c": "192506692195331535945631",
                        "heco:0x0298c2b32eaE4da002a15f36fdf7615BEa3DA047": "2158672533322793",
                        "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "11093082876512",
                        "heco:0x66a79D23E58475D2738179Ca52cd0b41d73f0BEa": "996379172178921963142",
                        "heco:0x22C54cE8321A4015740eE1109D9cBc25815C46E6": "23914657385695466323057",
                        "0x6b175474e89094c44da98b954eedeac495271d0f": "7107526494042094908468667",
                        "heco:0xE499Ef4616993730CEd0f31FA2703B92B50bB536": "137205675925769131064013486",
                        "heco:0xB4F019bEAc758AbBEe2F906033AAa2f0F6Dacb35": "364494623629203573",
                        "heco:0xeF3CEBD77E0C52cb6f60875d9306397B5Caca375": "3129531295952878112773",
                        "heco:0x64FF637fB478863B7468bc97D30a5bF3A428a1fD": "9192054317393320446391",
                        "heco:0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c": "148911552859786953196071",
                        "heco:0x64ff637fb478863b7468bc97d30a5bf3a428a1fd": "5894279017068474040638",
                        "heco:0x66a79d23e58475d2738179ca52cd0b41d73f0bea": "612867016701208550102",
                        "heco:0x0298c2b32eae4da002a15f36fdf7615bea3da047": "322847070254",
                        "heco:0xa71edc38d189767582c38a3145b5873052c3e47a": "27261644010709722098844276",
                    }, "now", true, knownPrices)];
            case 1:
                _a.apply(void 0, [_g.sent()]).toMatchInlineSnapshot("\n    Object {\n      \"tokenBalances\": Object {\n        \"DAI\": 7107526.494042095,\n        \"ETH\": 15086.333334461793,\n        \"HBCH\": 3129.531295952878,\n        \"HBTC\": 1609.2461888801304,\n        \"HDOT\": 236654.32801472096,\n        \"HFIL\": 16569.632182924954,\n        \"HLTC\": 1047.556118646988,\n        \"HPT\": 137205675.92576912,\n        \"HT\": 3193525.6655667843,\n        \"HUSD\": 21589953.80393047,\n        \"LINK\": 961.0041754786943,\n        \"MDX\": 341418.2450551185,\n        \"UNI\": 23914.657385695464,\n        \"USDC\": 11093082.876512,\n        \"USDT\": 58530450.61588761,\n        \"YFI\": 0.3644946236292036,\n        \"binance-eth\": 27.06634107102854,\n      },\n      \"usdTokenBalances\": Object {\n        \"DAI\": 7099743.752531119,\n        \"ETH\": 68626674.2951333,\n        \"HBCH\": 1917651.5969080853,\n        \"HBTC\": 99816713.35766785,\n        \"HDOT\": 12829031.121678023,\n        \"HFIL\": 1028808.4622378105,\n        \"HLTC\": 223234.20888367313,\n        \"HPT\": 963452.7681237137,\n        \"HT\": 35192652.83454596,\n        \"HUSD\": 21805853.341969773,\n        \"LINK\": 29781.519398084733,\n        \"MDX\": 365317.5222089768,\n        \"UNI\": 614606.6948123734,\n        \"USDC\": 11086671.074609376,\n        \"USDT\": 58530450.61588761,\n        \"YFI\": 12421.247784036,\n        \"binance-eth\": 112462.81245740927,\n      },\n      \"usdTvl\": 320255527.22683716,\n    }\n  ");
                return [2 /*return*/];
            case 2:
                _b.apply(void 0, [_g.sent()]).toBeGreaterThan(1e5);
                _c = expect;
                return [4 /*yield*/, _1.default({
                        "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599": "200000000", // 2 WBTC
                    }, "now")];
            case 3:
                _c.apply(void 0, [_g.sent()]).toBeGreaterThan(1e3);
                _d = expect;
                return [4 /*yield*/, _1.default({
                        "pancakeswap-token": "1000.51", // 1000 CAKE
                    }, "now")];
            case 4:
                _d.apply(void 0, [_g.sent()]).toBeGreaterThan(1e3);
                _e = expect;
                return [4 /*yield*/, _1.default({
                        "bsc:0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82": "100000000000000000000",
                    }, "now")];
            case 5:
                _e.apply(void 0, [_g.sent()]).toBeGreaterThan(1e3);
                _f = expect;
                return [4 /*yield*/, _1.default({
                        "0x0000000000000000000000000000000000000000": "100000000000000000000", // 100 ETH
                    }, "now", false, knownPrices)];
            case 6:
                _f.apply(void 0, [_g.sent()]).toBeGreaterThan(1e3);
                return [2 /*return*/];
        }
    });
}); });
