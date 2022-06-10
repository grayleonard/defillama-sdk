"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setProvider = exports.ETHER_ADDRESS = exports.handleDecimals = exports.TEN = exports.getProvider = exports.providers = void 0;
var ethers_1 = require("ethers");
function createProvider(name, defaultRpc, chainId) {
    var _a, _b, _c;
    if (process.env.HISTORICAL) {
        if (chainId === 1) {
            console.log("RPC providers set to historical, only the first RPC provider will be used");
        }
        return new ethers_1.ethers.providers.StaticJsonRpcProvider((_b = (_a = process.env[name.toUpperCase() + "_RPC"]) === null || _a === void 0 ? void 0 : _a.split(',')[0]) !== null && _b !== void 0 ? _b : defaultRpc, {
            name: name,
            chainId: chainId,
        });
    }
    else {
        return new ethers_1.ethers.providers.FallbackProvider(((_c = process.env[name.toUpperCase() + "_RPC"]) !== null && _c !== void 0 ? _c : defaultRpc).split(',').map(function (url, i) { return ({
            provider: new ethers_1.ethers.providers.StaticJsonRpcProvider(url, {
                name: name,
                chainId: chainId,
            }),
            priority: i
        }); }), 1);
    }
}
exports.providers = {
    // https://ethereumnodes.com/
    ethereum: createProvider("ethereum", "https://eth-mainnet.gateway.pokt.network/v1/5f3453978e354ab992c4da79,https://cloudflare-eth.com/,https://main-light.eth.linkpool.io/,https://api.mycryptoapi.com/eth", 1),
    bsc: createProvider("bsc", "https://bsc-dataseed.binance.org/,https://bsc-dataseed1.defibit.io/,https://bsc-dataseed1.ninicoin.io/,https://bsc-dataseed2.defibit.io/,https://bsc-dataseed2.ninicoin.io/", 56),
    polygon: createProvider("polygon", "https://polygon-rpc.com/,https://rpc-mainnet.maticvigil.com/", 137),
    heco: createProvider("heco", "https://http-mainnet.hecochain.com,https://http-mainnet-node.huobichain.com,https://pub001.hg.network/rpc", 128),
    fantom: createProvider("fantom", "https://rpc.ankr.com/fantom,https://rpc.ftm.tools/,https://rpcapi.fantom.network", 250),
    rsk: createProvider("rsk", "https://public-node.rsk.co", 30),
    tomochain: createProvider("tomochain", "https://rpc.tomochain.com", 88),
    xdai: createProvider("xdai", "https://rpc.xdaichain.com/,https://xdai.poanetwork.dev,https://dai.poa.network,https://xdai-archive.blockscout.com", 100),
    avax: createProvider("avax", "https://api.avax.network/ext/bc/C/rpc,https://rpc.ankr.com/avalanche", 43114),
    wan: createProvider("wan", "https://gwan-ssl.wandevs.org:56891", 888),
    harmony: createProvider("harmony", "https://harmony-0-rpc.gateway.pokt.network,https://api.harmony.one,https://api.s0.t.hmny.io", 1666600000),
    thundercore: createProvider("thundercore", "https://mainnet-rpc.thundercore.com", 108),
    okexchain: createProvider("okexchain", "https://exchainrpc.okex.org", 66),
    optimism: createProvider("optimism", "https://mainnet.optimism.io/", 10),
    arbitrum: createProvider("arbitrum", "https://arb1.arbitrum.io/rpc", 42161),
    kcc: createProvider("kcc", "https://rpc-mainnet.kcc.network", 321),
    celo: createProvider("celo", "https://forno.celo.org", 42220),
    iotex: createProvider("iotex", "https://babel-api.mainnet.iotex.io", 4689),
    moonriver: createProvider("moonriver", "https://rpc.api.moonriver.moonbeam.network/,https://moonriver.api.onfinality.io/public", 1285),
    shiden: createProvider("shiden", "https://evm.shiden.astar.network,https://shiden.api.onfinality.io/public,https://rpc.shiden.astar.network:8545", 336),
    palm: createProvider("palm", "https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b", 11297108109),
    energyweb: createProvider("energyweb", "https://rpc.energyweb.org", 246),
    energi: createProvider("energi", "https://nodeapi.energi.network", 39797),
    songbird: createProvider("songbird", "https://songbird.towolabs.com/rpc", 19),
    hpb: createProvider("hpb", "https://hpbnode.com", 269),
    gochain: createProvider("gochain", "https://rpc.gochain.io", 60),
    ethereumclassic: createProvider("ethereumclassic", "https://www.ethercluster.com/etc,https://blockscout.com/etc/mainnet/api/eth-rpc", 61),
    xdaiarb: createProvider("xdaiarb", "https://arbitrum.xdaichain.com", 200),
    kardia: createProvider("kardia", "https://rpc.kardiachain.io/", 0),
    fuse: createProvider("fuse", "https://rpc.fuse.io", 122),
    smartbch: createProvider("smartbch", "https://smartbch.fountainhead.cash/mainnet", 10000),
    elastos: createProvider("elastos", "https://api.elastos.io/eth,https://api.trinity-tech.cn/eth", 20),
    hoo: createProvider("hoo", "https://http-mainnet.hoosmartchain.com", 70),
    fusion: createProvider("fusion", "https://mainnet.anyswap.exchange,https://mainway.freemoon.xyz/gate", 32659),
    aurora: createProvider("aurora", "https://mainnet.aurora.dev", 1313161554),
    ronin: createProvider("ronin", "https://api.roninchain.com/rpc", 2020),
    boba: createProvider("boba", "https://mainnet.boba.network/", 288),
    cronos: createProvider("cronos", "https://evm-cronos.crypto.org,https://cronos-rpc.heavenswail.one,https://cronosrpc-1.xstaking.sg,https://evm.cronos.org", 25),
    polis: createProvider("polis", "https://rpc.polis.tech", 333999),
    zyx: createProvider("zyx", "https://rpc-1.zyx.network/,https://rpc-2.zyx.network/,https://rpc-3.zyx.network/,https://rpc-5.zyx.network/", 55),
    telos: createProvider("telos", "https://mainnet.telos.net/evm,https://rpc1.eu.telos.net/evm,https://rpc1.us.telos.net/evm", 40),
    metis: createProvider("metis", "https://andromeda.metis.io/?owner=1088", 1088),
    ubiq: createProvider("ubiq", "https://rpc.octano.dev", 8),
    velas: createProvider("velas", "https://evmexplorer.velas.com/rpc", 106),
    callisto: createProvider("callisto", "https://clo-geth.0xinfra.com/", 820),
    klaytn: createProvider("klaytn", "https://public-node-api.klaytnapi.com/v1/cypress,http://175.209.78.135:8551", 8217),
    csc: createProvider("csc", "https://rpc.coinex.net/,https://rpc1.coinex.net/,https://rpc2.coinex.net/,https://rpc3.coinex.net/,https://rpc4.coinex.net/", 52),
    nahmii: createProvider("nahmii", "https://l2.nahmii.io/", 5551),
    liquidchain: createProvider("xlc", "https://rpc.liquidchain.net/,https://rpc.xlcscan.com/", 5050),
    meter: createProvider("meter", 'https://rpc.meter.io', 82),
    theta: createProvider("theta", 'https://eth-rpc-api.thetatoken.org/rpc', 361),
    oasis: createProvider("oasis", 'https://emerald.oasis.dev/', 42262),
    syscoin: createProvider("syscoin", 'https://rpc.syscoin.org', 57),
    moonbeam: createProvider("moonbeam", 'https://rpc.api.moonbeam.network', 1284),
    curio: createProvider("curio", 'https://mainnet-api.skalenodes.com/v1/fit-betelgeuse', 836542336838601),
    astar: createProvider("astar", "https://rpc.astar.network:8545,https://astar.api.onfinality.io/public", 592),
    godwoken: createProvider("godwoken", "https://mainnet.godwoken.io/rpc", 71394),
    evmos: createProvider("evmos", "https://eth.bd.evmos.org:8545/", 9001),
    conflux: createProvider("conflux", "https://evm.confluxrpc.com", 1030),
    milkomeda: createProvider("milkomeda", "https://rpc-mainnet-cardano-evm.c1.milkomeda.com", 2001),
    dfk: createProvider("dfk", "https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc", 53935),
    crab: createProvider("crab", "https://crab-rpc.darwinia.network", 44),
    bittorrent: createProvider("bittorrent", "https://rpc.bittorrentchain.io", 199),
    findora: createProvider("findora", "https://prod-mainnet.prod.findora.org:8545", 2152),
    candle: createProvider("candle", "https://network.cndlchain.com/,https://rpc.cndlchain.com", 534),
    lachain: createProvider("lachain", "https://rpc-mainnet.lachain.io", 225),
    reichain: createProvider("reichain", "https://rei-rpc.moonrhythm.io", 55555),
    rei: createProvider("rei", "https://rpc.rei.network", 47805),
    clover: createProvider("clover", "https://api-para.clover.finance", 1024),
    echelon: createProvider("echelon", "https://rpc.ech.network,https://evm.ech.network,https://draco.ech.network", 3000),
    multivac: createProvider("multivac", "https://rpc.mtv.ac,https://rpc-eu.mtv.ac", 62621),
    kava: createProvider("kava", "https://evm.kava.io", 2222),
};
function getProvider(chain) {
    if (chain === void 0) { chain = "ethereum"; }
    return exports.providers[chain];
}
exports.getProvider = getProvider;
exports.TEN = ethers_1.BigNumber.from(10);
function handleDecimals(num, decimals) {
    if (decimals === undefined) {
        return num.toString();
    }
    else {
        return num.div(exports.TEN.pow(decimals)).toString();
    }
}
exports.handleDecimals = handleDecimals;
exports.ETHER_ADDRESS = "0x0000000000000000000000000000000000000000";
function setProvider(chain, provider) {
    exports.providers[chain] = provider;
}
exports.setProvider = setProvider;
