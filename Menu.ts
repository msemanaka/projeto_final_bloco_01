import readlinesync = require("readline-sync");

import { ProdutoController } from "./src/controller/ProdutoController";
import { Geladeira } from "./src/model/Geladeira";
import { LavaRoupas } from "./src/model/LavaRoupas";

export function main() {

    let opcao, id, tipo, preco, litros, quilos: number;
    let nome: string;
    let tipoProduto = ['Geladeira', 'Lava Roupas'];

    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Geladeira(produtoController.gerarId(),
        "Brastemp Inverse", 1, 3600, 475));

    produtoController.cadastrar(new LavaRoupas(produtoController.gerarId(),
        "Lavadora Eletrolux", 2, 1500, 13));

    while (true) {

        console.log("*****************************************************");
        console.log("*                                                   *");
        console.log("*        CASAS MILENA - Dedicação total a Voce      *");
        console.log("*                                                   *");
        console.log("*****************************************************");
        console.log("*                                                   *");
        console.log("*            1 - Listar todos os Produtos           *");
        console.log("*            2 - Listar Produto pelo ID             *");
        console.log("*            3 - Cadastrar Produto                  *");
        console.log("*            4 - Atualizar Produto                  *");
        console.log("*            5 - Deletar Produto                    *");
        console.log("*            0 - Sair                               *");
        console.log("*                                                   *");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 0) {
            console.log("\nCASAS MILENA - Dedicação total a Voce");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nListar todos os Produtos\n\n");

                produtoController.listarTodosProdutos();

                keyPress()
                break;
            case 2:
                console.log("\n\nListar Produto pelo ID\n\n");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.listarPorId(id);

                keyPress()
                break;
            case 3:
                console.log("\n\nCadastrar Produto\n\n");

                nome = readlinesync.question("Digite o Nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo) {
                    case 1:
                        litros = readlinesync.questionInt("Digite quantos litros tem a geladeira: ");
                        produtoController.cadastrar(new Geladeira(produtoController.gerarId(), nome, tipo, preco, litros));
                        break;
                    case 2:
                        quilos = readlinesync.questionInt("Digite de quantos quilos a maquina é: ");
                        produtoController.cadastrar(new LavaRoupas(produtoController.gerarId(), nome, tipo, preco, quilos));
                        break;
                }

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar Dados do Produto\n\n");

                id = readlinesync.questionInt("Digite o Id do Produto: ");

                let produto = produtoController.buscarNoArray(id);

                if (produto !== null) {

                    nome = readlinesync.question("Digite o Nome do Produto: ");

                    tipo = produto.tipo;

                    preco = readlinesync.questionFloat("Digite o preco: ");

                    switch (tipo) {
                        case 1:
                            litros = readlinesync.questionInt("Digite quantos litros tem a geladeira: ");
                            produtoController.atualizar(new Geladeira(id, nome, tipo, preco, litros));
                            break;
                        case 2:
                            quilos = readlinesync.questionInt("Digite de quantos quilos a maquina é: ");
                            produtoController.atualizar(new LavaRoupas(id, nome, tipo, preco, quilos));
                            break;
                    }

                } else {
                    console.log("Produto não Encontrado!");
                }

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar Produto\n\n");

                id = readlinesync.questionInt("Digite o Id do Produto: ");
                produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log("\nOpção Inválida!\n");

                keyPress()
                break;


        }

    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Milena Semanaka Forte - milena.sforte@gmail.com");
    console.log("github.com/msemanaka");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();