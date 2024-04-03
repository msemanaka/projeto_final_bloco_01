export abstract class Produto {

    private _id: number;
    private _nome: string;
    private _tipo: number;
    private _preco: number;
    private _marca: string;


	constructor(id: number, nome: string, tipo: number, preco: number, marca: string) {
		this._id = id;
		this._nome = nome;
		this._tipo = tipo;
        this._preco = preco;
        this._marca = marca;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter nome
     * @return {string}
     */
	public get nome(): string {
		return this._nome;
	}

    /**
     * Getter tipo
     * @return {number}
     */
	public get tipo(): number {
		return this._tipo;
	}

    /**
     * Getter preco
     * @return {number}
     */
	public get preco(): number {
		return this._preco;
	}

    /**
     * Getter marca
     * @return {string}
     */
	public get marca(): string {
		return this._marca;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter nome
     * @param {string} value
     */
	public set nome(value: string) {
		this._nome = value;
	}

    /**
     * Setter tipo
     * @param {number} value
     */
	public set tipo(value: number) {
		this._tipo = value;
	}

    /**
     * Setter preco
     * @param {number} value
     */
	public set preco(value: number) {
		this._preco = value;
	}

    /**
     * Setter marca
     * @param {string} value
     */
	public set marca(value: string) {
		this._marca = value;
	}
	
    
    public visualizar(): void {
        
        let tipo: string = "";

        switch (this._tipo) {

            case 1:
                tipo = "Geladeira"
                break;
            case 2:
                tipo = "Lava Roupas"
                break;
            
        }

        console.log("****************************************************")
        console.log("Produto")
        console.log("****************************************************")
        console.log(`Id do produto: ${this._id}`)
        console.log(`Nome do produto: ${this._nome}`)
        console.log(`Tipo do produto: ${tipo}`)
        console.log(`Marca do produto: ${this._marca}`)
        console.log(`Preço do produto: ${this._preco}`)

    }

}