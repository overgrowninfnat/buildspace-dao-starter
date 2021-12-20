import sdk from "./1-initialize-sdk.js";
import {ethers} from "ethers";


const tokenModule = sdk.getTokenModule("0x9fEC19da2d40E496C2C7A68d50e161cC8C294CaF");

(async () => {
    try {
        const amount = 1_000_000;
        const amountInWei = ethers.utils.parseUnits(amount.toString(), 18)
        await tokenModule.mint(amountInWei);
        const totalSupply = await tokenModule.totalSupply();
        console.log("🇮🇹 There is ", ethers.utils.formatUnits(totalSupply, 18), "$AZZURRI in circulation!")
    }catch (e) {
        console.error("Failed to print money", e)
    }
})();