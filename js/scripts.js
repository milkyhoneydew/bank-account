function Bank() {
  this.accounts = {};
  this.currentId = 0;
}


Bank.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}


