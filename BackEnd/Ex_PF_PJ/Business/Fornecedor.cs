using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business
{
    public class Fornecedor : Pessoa
    {
        public Fornecedor(string nome, string cnpj) 
        {
            this.Id = (int)(DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds;
            this.Nome = nome;
            this.Tipo = "Pessoa Jurídica";
            this.CNPJ = cnpj;
        }

        public string CNPJ { get; set; }

        public void CadastrarFornecedor()
        {
            var fornecedor = new Fornecedor(Nome, CNPJ);

            base.Cadastrar(fornecedor);
        }
    }
}
