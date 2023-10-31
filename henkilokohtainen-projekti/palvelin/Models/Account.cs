namespace palvelin.Models
{
    public class Account
    {
        public string id { get; set; }  
        public string firstName { get; set; }   
        public string lastName { get; set; }    
        public string email { get; set; }
        public string password { get; set; }    
        public bool isadmin { get; set; }    


        public Account(string id, string firstName, string lastName, string email, string password, bool admin)
        {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            isadmin = admin;
        }
    }
}
