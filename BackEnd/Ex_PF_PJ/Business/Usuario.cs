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

        public string CPF { get; set; }

        public void CadastrarUsuario()
        {
            var usuario = new Usuario(Nome, CPF);

            base.Cadastrar(usuario);
        }
    }
}