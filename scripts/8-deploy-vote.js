import sdk from "./1-initialize-sdk.js";


const appModule = sdk.getAppModule("0xc310AD4e3cF9Ce884b92AEF67E14e7810D80b575");

(async () => {
    try {
      const voteModule = await appModule.deployVoteModule({
          name: "ItalyDAO's Stunning Proposals",
          votingTokenAddress: "0x9fEC19da2d40E496C2C7A68d50e161cC8C294CaF",
          proposalStartWaitTimeInSeconds: 0,
          proposalVotingTimeInSeconds: 24 * 60 * 60,
          votingQuorumFraction: 0,
          minimumNumberOfTokensNeededToPropose: "0"
      })
        console.log("✅ Successfully deployed vote module address:", voteModule.address)
    }catch(e) {
        console.log("Failed to deploy vote module", e)
    }
})()