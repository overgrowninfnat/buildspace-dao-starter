import sdk from "./1-initialize-sdk.js";


const app = sdk.getAppModule("0xc310AD4e3cF9Ce884b92AEF67E14e7810D80b575");


(async () => {
    try{
       const tokenModule = await app.deployTokenModule({
           name: "ItalyDAO Governance Token",
           symbol: "AZZURRI"
       })
        console.log("✅ Successfully deployed token module, address: ", tokenModule.address)
    }catch (e) {
        console.error("failed to deploy token module", e)
    }
})()