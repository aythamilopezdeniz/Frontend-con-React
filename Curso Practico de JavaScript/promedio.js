function calcularMediaAritmetica(lista) {
    // let sumaLista = 0;

    // lista.forEach(element => {
    //     sumaLista += element;
    // });

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    return sumaLista / lista.length;
}