namespace basico;
class Program 
{
    private static List<Produto> produtos = new List<Produto>();

    static void Main(string[] args)
    {
        Console.WriteLine("Bem vindo ao sistema de armazém do Roberto");

        char opcao = 'a';

        while (opcao != '0')
        {
            //Menu
            Console.WriteLine("Escolha uma opção: ");
            Console.WriteLine("1 - Cadastrar produto");
            Console.WriteLine("2 - Listar produtos cadastrados");
            Console.WriteLine("3 - Quantidade total de itens no estoque");
            Console.WriteLine("4 - Sair");

            //Input
            Console.WriteLine("Opção desejada: ");
            opcao = Console.ReadKey().KeyChar;

            switch (opcao)
            {
                case '1':
                    Console.WriteLine("\nId do produto: ");
                    string id = Console.ReadLine();
                    Console.WriteLine("Nome do produto: ");
                    string nome = Console.ReadLine();
                    Console.WriteLine("Quantidade: ");
                    string qtd = Console.ReadLine();

                    Produto novoProduto = new Produto(Convert.ToInt32(id), nome, Convert.ToInt32(qtd));
                    produtos.Add(novoProduto);
                    Console.WriteLine("Produto adicionado com sucesso!");
                    break;
                case '2':
                    if(produtos.Count > 0)
                    {
                        Console.WriteLine("\nListagem de Produtos");
                        foreach(Produto produto in produtos)
                        {
                            produto.MostraProduto();
                        }
                        Console.WriteLine("\nPressione qualquer tecla para continuar...");
                        Console.ReadKey();
                    }
                    else
                        Console.WriteLine("\nNão há produtos cadastrados.");
                    break;
                case '3':
                    int qtdEstoque = 0;
                    if (produtos.Count > 0)
                    {
                        foreach (Produto produto in produtos)
                        {
                            qtdEstoque += produto.Quantidade;
                        }
                        if(qtdEstoque > 0)
                        {
                            Console.WriteLine($"\nTotal de produtos em estoque: {qtdEstoque}");
                            Console.WriteLine("Pressione qualquer tecla para continuar...");
                            Console.ReadKey();
                        }
                        else
                            Console.WriteLine("\nNão há produtos em estoque.");
                    }
                    else
                        Console.WriteLine("\nNão há produtos cadastrados.");
                    break;
                case '4':
                    Console.WriteLine("\nSaindo do programa...");
                    opcao = '0';
                    break;
            }
        }
    }
}