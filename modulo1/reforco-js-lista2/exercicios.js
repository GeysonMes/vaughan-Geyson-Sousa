// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  
    
 return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
 array.sort(function (a, b) {
   return a - b;
 })
  return array
   

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
 const numerosParesArray = array.filter((par) => {
      if (par % 2 === 0) {
     return par
     }
 });
    return numerosParesArray    

    
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayDeNumeros = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        arrayDeNumeros.push(array[i] * array[i]);
      }
    }
    return arrayDeNumeros;

}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let numeroMaior = 0;
    for (let indice of array) {
        if (numeroMaior < indice) {
            numeroMaior = indice
        }
    }
    return numeroMaior

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
    let menorNumero;
    let maiorDivisivelPorMenor;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    maiorDivisivelPorMenor = maiorNumero % menorNumero === 0;
  
    const diferenca = maiorNumero - menorNumero;
  
    return {
      maiorNumero: maiorNumero,
      maiorDivisivelPorMenor: maiorDivisivelPorMenor,
      diferenca: diferenca
    };


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    const array = [];
    for (let number = 0; array.length < n; number++) {
      if (number % 2 === 0) {
        array.push(number);
      }
    }
    return array;    

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (a !== b && b !== c) {
        return "Escaleno";
      } else if (a === b && b === c) {
        return "Equilátero";
      } else {
        return "Isósceles";
      }    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let menor = Infinity;
    let maior = -Infinity;
    let segundoMenor = Infinity;
    let segundoMaior = -Infinity;
    let array = [];
  
    for (let index of array) {
      if (i < menor) {
        menor = i;
      }
      if (i > maior) {
        maior = i;
      }
    }
  
    for (let index of array) {
      if (i < segundoMenor && i !== menor) {
        segundoMenor = i;
      }
      if (i > segundoMaior && i !== maior) {
        segundoMaior = i;
      }
    }
    novoArray.push(segundoMaior);
    novoArray.push(segundoMenor);
  
    return array;   

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

       

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}