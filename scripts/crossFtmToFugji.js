const hre = require("hardhat");
const { ethers } = require("ethers");
async function main() {
  const OmniChainNFT = await hre.ethers.getContractFactory("OmniChainNFT");
  const omniChainNFT = await OmniChainNFT.attach(
    "0x61a2acC5A098Cd16f4C9B1A756c9A5bc8Fb26cD1"
  );
  await omniChainNFT.crossChain(
    10006,
    "0x6252Bd5C8bE1eF145F744a346Bf17856e462de57",
    ethers.BigNumber.from("1"),
    { value: ethers.utils.parseEther("5") }
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
