// SPDX-License-Identifier: BUSL-1.1

pragma solidity >=0.5.0;

interface ILayerZeroTreasury {
    function getFees(
        bool payInZro,
        uint256 relayerFee,
        uint256 oracleFee
    ) external view returns (uint256);
}
