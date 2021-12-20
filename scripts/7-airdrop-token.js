import sdk from "./1-initialize-sdk.js";
import {ethers} from "ethers";


const bundleDropModule = sdk.getBundleDropModule("0x80926696acBf135e3d8FEe72A7B602017FE289A7");
const tokenModule = sdk.getTokenModule("0x9fEC19da2d40E496C2C7A68d50e161cC8C294CaF");

(async () => {
    try{
      const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");
      if(walletAddress.length === 0) {
          console.log("No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!")
          process.exit(0)
      }
      const airdropTargets = walletAddresses.map((address) => {
          const randomAmount = Math.floor(Math.random() * (10000 - 1000 + 1) + 1000)
          console.log("✅ Going to airdrop", randomAmount, "tokens to", address);

          const airdropTarget = {
              address,
              amount: ethers.utils.parseUnits(randomAmount.toString(), 18)
          }
          return airdropTarget;
      })
        console.log("🌈 Starting airdrop...")
        await tokenModule.transferBatch(airdropTargets);
        console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
    }catch (e) {
        console.error("Failed to airdrop tokens", e);
    }
})();