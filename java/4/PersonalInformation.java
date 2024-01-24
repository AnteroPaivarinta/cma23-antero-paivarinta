import java.util.ArrayList;
import java.util.Scanner;

class PersonalInformation {
    private String firstName;
    private String lastName;
    private String identificationNumber;

    public PersonalInformation(String firstName, String lastName, String identificationNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.identificationNumber = identificationNumber;
    }

    @Override
    public String toString() {
        return firstName + " " + lastName;
    }
}

class PersonalInformationCollection {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<PersonalInformation> personalInformationList = new ArrayList<>();

        while (true) {
            System.out.print("Enter first name (empty to exit): ");
            String firstName = scanner.nextLine().trim();

            if (firstName.isEmpty()) {
                break;
            }

            System.out.print("Enter last name: ");
            String lastName = scanner.nextLine().trim();

            System.out.print("Enter identification number: ");
            String identificationNumber = scanner.nextLine().trim();

            PersonalInformation personalInformation = new PersonalInformation(firstName, lastName, identificationNumber);
            personalInformationList.add(personalInformation);
        }

        System.out.println("\nCollected Personal Information:");

        for (PersonalInformation info : personalInformationList) {
            System.out.println(info.toString());
        }
    }
}
