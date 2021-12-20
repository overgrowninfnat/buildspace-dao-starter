import sdk from "./1-initialize-sdk.js";
import {readFileSync} from 'fs'
import {ethers} from "ethers";

const app = sdk.getAppModule("0xc310AD4e3cF9Ce884b92AEF67E14e7810D80b575");

(async () => {
    try{
      const bundleDropModule = await app.deployBundleDropModule({
          name: "ItalyDAO Membership",
          description: "A DAO for italians web3 enthusiast.",
          image: readFileSync("scripts/assets/membership.png"),
          primarySaleRecipientAddress: ethers.constants.AddressZero
      })
        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    }catch (e) {
        console.log("failed to deploy bundleDrop module", e);
    }
})()