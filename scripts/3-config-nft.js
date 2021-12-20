import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";


const bundleDrop = sdk.getBundleDropModule("0x80926696acBf135e3d8FEe72A7B602017FE289A7");

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Web3 Italians Enthusiast",
                description: "This NFT will give you access to ItalyDAO!",
                image: readFileSync("scripts/assets/membership.png")
            }
        ])
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (e) {
        console.error("failed to create the new NFT", e);
    }
})();