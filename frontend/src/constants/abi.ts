export const BASEGRID_TASK_MANAGER_ABI = [
  // Core Task functions
  "function createTask(string calldata metadataURI) external",
  "function acceptTask(uint256 taskId) external",
  "function submitTask(uint256 taskId, string calldata proofURI) external",
  "function approveTask(uint256 taskId) external",
  "function rejectTask(uint256 taskId) external",
  
  // View functions
  "function getTaskCount() external view returns (uint256)",
  "function getTask(uint256 taskId) external view returns (tuple(uint256 id, address creator, address worker, uint8 status, string metadataURI, string proofURI))"
] as const;

export const BASEGRID_ESCROW_ABI = [
  "function fundTask(uint256 taskId) external payable",
  "function releaseFunds(uint256 taskId) external",
  "function refundCreator(uint256 taskId) external"
] as const;

export const BASEGRID_REPUTATION_ABI = [
  "function getUserReputation(address user) external view returns (uint256)",
  "function increaseReputation(address user, uint256 amount) external",
  "function decreaseReputation(address user, uint256 amount) external"
] as const;
