using System;

namespace ExAula03.Models
{
    internal class Cliente
    {
        public Cliente()
        {

        }

        private string nome;

        public string Nome
        {
            get { return nome; }
            set { nome = value; }
        }

        private string telefone;

        public string Telefone
        {
            get { return telefone; }
            set { telefone = value; }
        }

        public void MostraCliente()
        {
            Console.WriteLine($"\nNome: {Nome}, Telefone: {Telefone}.");
        }
    }
}
