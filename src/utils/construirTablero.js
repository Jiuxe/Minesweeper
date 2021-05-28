const NUMERO_DE_CASILLAS = 100
const NUMERO_DE_MINAS = 10
const NUMERO_FILAS_TABLERO = 10
const NUMERO_COL_TABLERO = 10


function addIndicadorMina(casillas, index){

    let filaIndex = Math.floor(index/NUMERO_FILAS_TABLERO);
    let colIndex = index%NUMERO_COL_TABLERO;

    for(let fil=filaIndex-1; fil<=filaIndex+1; fil++){
        for(let col=colIndex-1; col<=colIndex+1; col++){
            if(fil >= 0 && fil < NUMERO_FILAS_TABLERO && col >= 0 && col < NUMERO_COL_TABLERO){
                if(!casillas[fil*NUMERO_FILAS_TABLERO+col].es_mina){
                    casillas[fil*NUMERO_FILAS_TABLERO+col].numero_minas_alrededor++;
                }
            }
        }
    }
}

export default () => {
    
    let casillas = [];
    let minas_puestas = 0;

    for(let i=0; i<NUMERO_DE_CASILLAS; i++){
        casillas.push({
            es_mina : false,
            seleccionada: false,
            numero_minas_alrededor: 0,
            casilla_numero : i
        });
    }

    while(minas_puestas < NUMERO_DE_MINAS){
        const index = Math.floor(Math.random() * (NUMERO_DE_CASILLAS-1))
       
        if(!casillas[index].es_mina){
            casillas[index].es_mina = true;
            casillas[index].numero_minas_alrededor = -1;
            addIndicadorMina(casillas, index)
            minas_puestas++;
        }     
    }

    return casillas
}