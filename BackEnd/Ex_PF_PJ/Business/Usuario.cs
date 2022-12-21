using System.Reflection;

namespace Business
{
    public class Usuario : Pessoa
    {
        public Usuario(string nome, string cpf) 
        {
            this.Id = (int)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;
            this.Nome = nome;
            this.Tipo = "Pessoa Física";
            this.CPF = cpf;
        }

        private string _CPF;
        public string CPF
        {
            get => typeof(Usuario).GetProperty("_CPF").GetValue("_CPF");
            set => typeof(Usuario).GetProperty("_CPF").SetValue(null, value);
        }

        public void CadastrarUsuario()
        {
            var usuario = new Usuario(Nome, CPF);

            base.Cadastrar(usuario);
        }
    }
}