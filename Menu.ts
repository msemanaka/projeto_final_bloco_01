import readlinesync = require("readline-sync");

export function main() {

    let opcao: number;

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
                console.log("\n\nCriar Produto\n\n");

                keyPress()
                break;
            case 2:
                console.log("\n\nListar todos os Produtos\n\n");

                keyPress()
                break;
            case 3:
                console.log("\n\nBuscar Produto por Id \n\n");

                keyPress()
                break;
            case 4:
                console.log("\n\nAtualizar Dados do Produto\n\n");

                keyPress()
                break;
            case 5:
                console.log("\n\nApagar Produto\n\n");

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