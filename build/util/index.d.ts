import { Chain } from "../general";
import type { Address } from "../types";
import type { Log } from "@ethersproject/abstract-provider";
export declare function getLatestBlock(chain: string): Promise<{
    number: number;
    timestamp: number;
}>;
export declare function lookupBlock(timestamp: number, extraParams?: {
    chain?: Chain | "terra" | "kava";
}): Promise<{
    block: number;
    timestamp: number;
}>;
export declare function tokenList(): Promise<({
    symbol: string;
    contract: string;
    decimals: number;
} | {
    symbol: string;
    contract: string;
    decimals?: undefined;
} | {
    symbol: string;
    contract: string;
    decimals: string;
})[]>;
export declare function kyberTokens(): Promise<{
    output: {
        [address: string]: {
            symbol: string;
            decimals: number;
            ethPrice: number;
        };
    };
}>;
export declare function toSymbols(tokenBalances: {
    [address: string]: string;
}): Promise<{
    output: {
        symbol: string;
        address: string;
        balance: string;
    }[];
}>;
export declare function getLogs(params: {
    target: Address;
    topic: string;
    keys: string[];
    fromBlock: number;
    toBlock: number;
    topics?: string[];
    chain?: Chain;
}): Promise<{
    output: string[][];
} | {
    output: Log[];
}>;
