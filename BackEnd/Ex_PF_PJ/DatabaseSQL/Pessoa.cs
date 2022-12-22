using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace DatabaseSQL
{
    public class Pessoa
    {
        public int Id { get; set; }
        public string Nome { get; set; } = default!;
        public string Tipo { get; set; } = default!;

        private static readonly string connStr = "server=localhost;user=root;database=trescamadas;port=3306;password=179179;";

        public virtual void Cadastrar(Pessoa pessoa)
        {
            MySqlConnection conn = new MySqlConnection(connStr);
            try
            {
                conn.Open();

                string sql = "INSERT INTO enderecos (logradouro, numero, cidade, estado) VALUES ('" + this.Logradouro + "', '" + this.Numero + "', '" + this.Cidade + "', '" + this.Estado + "')";
                MySqlCommand cmd = new MySqlCommand(sql, conn);

                cmd.ExecuteNonQuery();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            conn.Close();
        }

        public virtual void Buscar(string nome)
        {
            MySqlConnection conn = new MySqlConnection(connStr);
            try
            {
                conn.Open();

                string sql = "select * from pessoas where nome like '" + this.Nome + "'";
                MySqlCommand cmd = new MySqlCommand(sql, conn);
                var dataReader = cmd.ExecuteReader();
                var pessoas = new List<Pessoa>();
                while (dataReader.Read())
                {
                    pessoas.Add(new Pessoa
                    {
                        Id = Convert.ToInt32(dataReader["id"]),
                        Nome = dataReader["nome"].ToString(),
                        Tipo = dataReader["tipo"].ToString(),
                    });
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
            }

            conn.Close();
        }

    }
}
