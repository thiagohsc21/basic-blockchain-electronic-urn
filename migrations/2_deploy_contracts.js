const SistemaVotacao = artifacts.require("SistemaVotacao");

module.exports = function(deployer) {
  deployer.deploy(SistemaVotacao);
};