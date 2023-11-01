namespace palvelin.Models
{
    public class Account
    {
        public string id { get; set; }  
        public string firstname { get; set; }   
        public string lastname { get; set; }    
        public string email { get; set; }
        public string password { get; set; }    
        public bool isadmin { get; set; }    


        public Account(string id, string firstName, string lastName, string email, string password, bool admin)
        {
            this.id = id;
            this.firstname = firstName;
            this.lastname = lastName;
            this.email = email;
            this.password = password;
            isadmin = admin;
        }
        public Account()
        {
        }
    }
}
