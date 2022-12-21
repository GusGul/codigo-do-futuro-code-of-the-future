using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace Business
{
    public class Pessoa
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Tipo { get; set; } 

        public virtual void Cadastrar(Pessoa pessoa)
        {
            string json = File.ReadAllText(@"D:\GitHub\codigo-do-futuro\BackEnd\Ex_PF_PJ\Business\dados\pessoas.json");

            var pessoas = JsonSerializer.Deserialize<List<Pessoa>>(json);

            pessoas.Add(pessoa);

            json = JsonSerializer.Serialize(pessoas);

            File.WriteAllText(@"D:\GitHub\codigo-do-futuro\BackEnd\Ex_PF_PJ\Business\dados\pessoas.json", json, Encoding.ASCII);
        }
    }
}
