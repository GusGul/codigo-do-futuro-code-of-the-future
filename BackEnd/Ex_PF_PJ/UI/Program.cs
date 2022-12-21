﻿using Business;
using System.Text.Json;

namespace UI
{
    public class Program
    {
        static void Main(string[] args)
        {

            while (true)
            {
                Console.WriteLine("1. Cadastrar Pessoa Física");
                Console.WriteLine("2. Cadastrar Pessoa Jurídica");
                Console.WriteLine("3. Listar Pessoas Cadastradas");
                Console.WriteLine("4. Sair");
                Console.WriteLine("Escolha uma opção:");

                var opcao = Console.ReadLine();

                if (opcao == "1")
                {
                    Console.WriteLine("Digite o nome:");
                    var nome = Console.ReadLine();
                    Console.WriteLine("Digite o CPF:");
                    var cpf = Console.ReadLine();

                    var usuario = new Usuario(nome, cpf);
                    usuario.CadastrarUsuario();
                }
                else if (opcao == "2")
                {
                    Console.WriteLine("Digite o nome:");
                    var nome = Console.ReadLine();
                    Console.WriteLine("Digite o CNPJ:");
                    var cnpj = Console.ReadLine();

                    var fornecedor = new Fornecedor(nome, cnpj);
                    fornecedor.CadastrarFornecedor();
                }
                else if (opcao == "3")
                {
                    var pessoas = JsonSerializer.Deserialize<List<Pessoa>>(File.ReadAllText(@"D:\GitHub\codigo-do-futuro\BackEnd\Ex_PF_PJ\Business\dados\pessoas.json"));

                    foreach (var pessoa in pessoas)
                    {
                        Console.WriteLine();
                        Console.WriteLine($"Id: ${pessoa.Id}");
                        Console.WriteLine($"Nome: {pessoa.Nome}");
                        Console.WriteLine($"Tipo: {pessoa.Tipo}");
                        if (pessoa.Tipo == "Pessoa Física")
                        {
                            Console.WriteLine($"CPF: {((Usuario)pessoa).CPF}");
                        }
                        else if (pessoa.Tipo == "Pessoa Jurídica")
                        {
                            Console.WriteLine($"CNPJ: {((Fornecedor)pessoa).CNPJ}");
                        }
                        Console.WriteLine();
                    }
                }
                else if (opcao == "4")
                {
                    break;
                }
            }

        }
    }
}