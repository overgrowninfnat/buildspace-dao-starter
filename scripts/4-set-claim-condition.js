import sdk from "./1-initialize-sdk.js";


const bundleDrop = sdk.getBundleDropModule("0x80926696acBf135e3d8FEe72A7B602017FE289A7");

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 50000,
            maxQuantityPerTransaction: 1
        })
        await bundleDrop.setClaimCondition(0, claimConditionFactory)
        console.log("✅ Sucessfully set claim condition!");
    } catch (e) {
        console.log("Failed to set claim condition", e)
    }
})()
