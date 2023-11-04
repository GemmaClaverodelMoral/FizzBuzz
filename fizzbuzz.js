function fizzBuzz() {
        
    const numero = document.getElementById('numero').value;
    console.log("numero:", numero);
    
    let cadena = '';
    for (let i = 1; i <= numero; i++) {
        let numeroFB = '';
        if (i % 3 === 0) { numeroFB = 'Fizz'};
        if (i % 5 === 0) { numeroFB += 'Buzz'};
        cadena += ' ' + (numeroFB || i);
    }
    document.getElementById("cadena-fizzbuzz").innerHTML = cadena;
}


