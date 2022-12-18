using System.Runtime.CompilerServices;
using System.Text.Json;

namespace ExAula03
{
    class Program
    {
        private static List<Cliente> clientes = new List<Cliente>();

        private static void LerArquivo(int num)
        {
            string caminhoArquivo = @"D:\GitHub\codigo-do-futuro\BackEnd\exercicios-em-aula\ExAula03\imports\cliente" + num + ".json";
            if (File.Exists(caminhoArquivo))
            {
                using (StreamReader arquivo = File.OpenText(caminhoArquivo))
                {
                    Cliente novoCliente = new JsonSerializer.Deserialize<Cliente>(arquivo);
                    clientes.Append(novoCliente);
                }
            }
            string caminhoArquivo2 = @"D:\GitHub\codigo-do-futuro\BackEnd\exercicios-em-aula\ExAula03\imports\cliente" + (num + 1) + ".json";

            if (File.Exists(caminhoArquivo2))
            {
                LerArquivo(num + 1);
            }
        }

        static void Main(string[] args)
        {
            LerArquivo(1);

            foreach (Cliente cliente in clientes)
            {
                cliente.MostraCliente();
            }
        }
    }
}