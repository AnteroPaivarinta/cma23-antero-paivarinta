
public class MainDebit {
  public static void main(String[] args) {
    double initialBalance = 120000.0;
    double initialInterestRate = 1.01;
    Debt mortgage = new Debt(initialBalance, initialInterestRate);
    mortgage.printBalance();

    mortgage.waitOneYear();
    mortgage.printBalance();

    int years = 0;

    while (years < 20) {
        mortgage.waitOneYear();
        years = years + 1;
    }

    mortgage.printBalance();
  }
}

class Debt{
  private double Balance;
  private double InterestRate;

  public Debt(double initialBalance, double initialInterestRate) {
    this.Balance = initialBalance;
    this.InterestRate = initialInterestRate;
  }
  
  public void printBalance() {
    System.out.println(this.Balance);
  }

  public void waitOneYear() {
    this.Balance = this.Balance + this.InterestRate;
  }
}
