import { Produto } from "../model/Produto";

export interface ProdutoRepository {

    listarPorId(id: number): void;
    listarTodosProdutos(): void;
    cadastrar(produto: Produto): void;
    atualizar(produto: Produto): void;
    deletar(id: number): void;
    
}