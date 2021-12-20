import sdk from "./1-initialize-sdk.js";
import {ethers} from "ethers";


const voteModule = sdk.getVoteModule("0x8A269626FBEc4A1e224a65c43eCe90b7ed55F282");
const tokenModule = sdk.getTokenModule("0x9fEC19da2d40E496C2C7A68d50e161cC8C294CaF");

(async () => {
    try {
        await tokenModule.grantRole("minter", voteModule.address)
        console.log(
            "Successfully gave vote module permissions to act on token module"
        );
    } catch (e) {
        console.error(
            "failed to grant vote module permissions on token module",
            e
        );
        process.exit(1);
    }

    try{
        const ownedTokenBalance = await tokenModule.balanceOf(
            process.env.WALLET_ADDRESS
        )
        const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value)
        const percent90 = ownedAmount.div(100).mul(90)
        await tokenModule.transfer(
            voteModule.address,
            percent90
        )
        console.log("✅ Successfully transferred tokens to vote module");
    }catch(e){
        console.error("failed to transfer tokens to vote module", e);
    }
})()