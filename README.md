Describe: function Bank()
Test: create a new bank account that includes the customer's name and account balance
Code: new function Bank() 
Expected Output: {
  this.accounts = {};
  this.currentId = 0;
  } 

Describe: Bank.prototype.assignId()
Test: return an ID
Code: Bank.assignId(account)
Expected Output: 1

Describe: Bank.prototype.addAccount()
Test: add an account to the bank
Code: Bank.addAccount(account)
Expected Output: 