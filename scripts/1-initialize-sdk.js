import {ThirdwebSDK} from "@3rdweb/sdk";
import ethers from "ethers";

import dotenv from 'dotenv'
dotenv.config()

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY,
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL)
    )
);

(async () => {
    try{
       const apps = await sdk.getApps()
        console.log("Your app address is:", apps[0].address);
    }catch (e){
        console.log("Failed to get apps from the sdk", err)
        process.exit(1)
    }
})()

export default sdk;