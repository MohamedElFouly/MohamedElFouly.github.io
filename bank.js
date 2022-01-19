var accountListInfo = [];
var newAccount = (function() {
  function Account(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  return {
    create: function() {
      var account = new Account(document.getElementById("accountName").value,
                                document.getElementById("deposit").value);
      accountListInfo[accountListInfo.length] = account;

      document.getElementById("textarea").value += "Account name: " + account.name + " Balance: " + account.balance + "\n";
    }
  }
})();
