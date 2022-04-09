const hre = require("hardhat");
async function main() {
  const account = "0xA04C70cab4129a79936C651107cEE1149fB3B6be";
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x6252Bd5C8bE1eF145F744a346Bf17856e462de57"
  );
  await omniChainNFT.mint();
  const balance = await omniChainNFT.balanceOf(account);
  console.log("Fnatom NFT balance: ", balance.toString());
  const owner = await omniChainNFT.ownerOf(101);
  console.log("Token 1 owner: ", owner);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
