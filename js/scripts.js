//Business Logic for Bank

function Bank() {
  this.accounts = {};
  this.currentId = 0;
}


Bank.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

//Business Logic for Accounts

function Account(firstName, lastName, balance) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = balance;
}