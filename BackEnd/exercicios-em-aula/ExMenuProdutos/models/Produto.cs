using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Basico.Models;

internal class Produto
{
    private int id;

    public int Id
    {
        get { return id; }
        set
        {
            if (value > 0)
                id = value;
            else
                throw new Exception("Id do produto não pode ser negativo.");
        }
    }

    private string nome;

    public string Nome
    {
        get { return nome; }
        set
        {
            if (value.Length > 1)
                nome = value;
            else
                throw new Exception("Nome do produto deve ter pelo menos 2 caracteres.");
        }
    }

    private int quantidade;

    public int Quantidade
    {
        get { return quantidade; }
        set
        {
            if (value >= 0)
                quantidade = value;
            else
                throw new Exception("Quantidade do produto não pode ser negativa.");
        }
    }

    public Produto(int id,  string nome, int quantidade)
    {
        Id = id;
        Nome = nome;
        Quantidade = quantidade;
    }

    public void MostraProduto()
    {
        Console.WriteLine($"\nId: {Id}, Nome: {Nome}, Quantidade em Estoque: {Quantidade}.");
    }
}
