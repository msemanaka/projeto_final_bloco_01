import { Produto } from "./Produto";

export class LavaRoupas extends Produto {

    private _kilos: number;


    constructor(id: number, nome: string, tipo: number, preco: number, marca: string, kilos: number) {
        super(id, nome, tipo, preco, marca);
		this._kilos = kilos;
	}


    /**
     * Getter kilos
     * @return {number}
     */
	public get kilos(): number {
		return this._kilos;
	}

    /**
     * Setter kilos
     * @param {number} value
     */
	public set kilos(value: number) {
		this._kilos = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Kilos: ${this._kilos}`);
    }
}