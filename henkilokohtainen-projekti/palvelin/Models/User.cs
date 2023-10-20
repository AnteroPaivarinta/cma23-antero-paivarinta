namespace palvelin.Models
{
    public class User
    {
        public string id { get; set; }  
        public string firstName { get; set; }   
        public string lastName { get; set; }    
        public string email { get; set; }
        public string password { get; set; }    
        public bool IsAdmin { get; set; }    


        public User(string id, string firstName, string lastName, string email, string password, bool isAdmin)
        {
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.password = password;
            this.IsAdmin = isAdmin;
        }
    }
}
