Describe: function Bank()
Test: create a new bank account that includes the customer's name and account balance
Code: new function Bank() 
Expected Output: {
  this.accounts = {};
  this.currentId = 0;
  } 

Describe: Bank.prototype.assignId()
Test: return an ID
Code: newBank.assignId()
Expected Output: 1

Describe: function Account(firstName, lastName, balance)
Test: make an object with account information
Code: new Contact("tanya", "prado", "1234567")
Expected Output: {
  firstName = Tanya;
  ...
}


Describe: Bank.prototype.addAccount()
Test: add an account to the bank
Code: Bank.addAccount(account)
Expected Output: 