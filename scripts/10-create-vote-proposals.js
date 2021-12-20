import sdk from "./1-initialize-sdk.js";
import {ethers} from "ethers";


const voteModule = sdk.getVoteModule("0x8A269626FBEc4A1e224a65c43eCe90b7ed55F282");
const tokenModule = sdk.getTokenModule("0x9fEC19da2d40E496C2C7A68d50e161cC8C294CaF");

(async () => {
    try{
        const amount = 420_000;
        await voteModule.propose(
            "Should the DAO mint an additional " + amount + " tokens into the treasury?",
            [{
                nativeTokenValue: 0,
                transactionData: tokenModule.contract.interface.encodeFunctionData(
                    "mint",
                    [
                        voteModule.address,
                        ethers.utils.parseUnits(amount.toString(), 18)
                    ]
                ),
                toAddress: tokenModule.address
            }]
        )
        console.log("✅ Successfully created proposal to mint tokens");
    } catch (e) {
        console.error("failed to create first proposal", e);
        process.exit(1);
    }
    try {
        const amount = 6_900;
        await voteModule.propose(
            "Should the DAO transfer " +
            amount + " tokens from the treasury to " +
            process.env.WALLET_ADDRESS + " for being awesome?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "transfer",
                        [
                            process.env.WALLET_ADDRESS,
                            ethers.utils.parseUnits(amount.toString(), 18),
                        ]
                    ),

                    toAddress: tokenModule.address,
                },
            ]
        );

        console.log(
            "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
        );
    } catch (e) {
        console.error("failed to create first proposal", e);
    }
})()