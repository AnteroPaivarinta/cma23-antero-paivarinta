namespace palvelin.Models
{
    public class LoginForm
    {
        public string firstname { get; set; }
        public string password { get; set; }
        public LoginForm(string firstname, string password)
        {
            this.firstname = firstname; 
            this.password = password;   
        }
    }
}
