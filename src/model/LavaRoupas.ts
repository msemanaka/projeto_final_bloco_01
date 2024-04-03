import { Produto } from "./Produto";

export class LavaRoupas extends Produto {

    private _quilos: number;


    constructor(id: number, nome: string, tipo: number, preco: number, quilos: number) {
        super(id, nome, tipo, preco);
		this._quilos = quilos;
	}


    /**
     * Getter quilos
     * @return {number}
     */
	public get quilos(): number {
		return this._quilos;
	}

    /**
     * Setter quilos
     * @param {number} value
     */
	public set quilos(value: number) {
		this._quilos = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(`Quilos (kg): ${this._quilos}`);
    }
}