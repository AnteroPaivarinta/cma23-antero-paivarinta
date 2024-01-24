import java.util.Scanner;
import java.util.*;

public class Main {
  
  public static void main(String[] args) {
    Account artosAccount = new Account("Arto's account", 100.00);
    Account artosSwissAccount = new Account("Arto's account in Switzerland", 1000000.00);

    System.out.println("Initial state");
    System.out.println(artosAccount);
    System.out.println(artosSwissAccount);

    artosAccount.withdraw(20);
    System.out.println("The balance of Arto's account is now: " + artosAccount.balance());
    artosSwissAccount.deposit(200);
    System.out.println("The balance of Arto's other account is now: " + artosSwissAccount.balance());

    System.out.println("End state");
    System.out.println(artosAccount);
    System.out.println(artosSwissAccount);
  } 
  
}



  
class Account {
  private String accountName;
  private double accountBalance;

  public Account(String name, double balance) {
    accountName = name;
    accountBalance = balance;
  }

  public void withdraw(double amount) {
    // Implement withdrawal logic
    accountBalance -= amount;
  }

  public void deposit(double amount) {
    // Implement deposit logic
    accountBalance += amount;
  }

  public double balance() {
    return accountBalance;
  }

  @Override
  public String toString() {
    return accountName + ": " + accountBalance;
  }
}
 
