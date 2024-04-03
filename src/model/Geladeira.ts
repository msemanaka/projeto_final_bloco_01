import { Produto } from "./Produto";

export class Geladeira extends Produto {

    private _litros: number;


    constructor(id: number, nome: string, tipo: number, preco: number, marca: string, litros: number) {
        super(id, nome, tipo, preco, marca);
        this._litros = litros;
    }



	public get litros(): number {
		return this._litros;
	}


	public set litros(value: number) {
		this._litros = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Litros: ${this._litros}`);
    }
}