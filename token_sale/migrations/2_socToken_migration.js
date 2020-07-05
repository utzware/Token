const SocToken = artifacts.require("./SocToken.sols");

module.exports = function(deployer) {
  deployer.deploy(SocToken);
};
