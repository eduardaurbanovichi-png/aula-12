// Classe Retângulo - atributos -  largura e altura

// class Retangulo {
//       // auxilia ma criação dos atrinutos da classe
//     constructor(Largura, Altura){


//     this.Largura = Largura;
//     this.Altura = Altura;
//     }



// }




// let retangulo = new Retangulo(10, 15)
// console.log(retangulo)

// 3: Classe Conta Bancária -  atributos saldo, valor_saque, valor_deposito , métodos - saque, deposito


 class Conta {

        constructor(saldo){
         this.saldo= saldo;
         this.valor_saque = 1200;
         this.valor_deposito = 200;

        }
    


Saque(){

    return this.saldo -  this.valor_saque

}


Deposito(){

    return this.saldo +  this.valor_deposito

}

 }
 

let calculo_saque = new Conta(1200)
let valor = calculo_saque.Saque()

console.log('Valor restante:', valor)

let calculo_deposito = new Conta(0)
let valor2 = calculo_deposito.Deposito()

console.log('Valor com o deposito:', valor2)




// 5: Classe Carro -  método dirigir

// class carro {
//     dirigir() {
//       console.log("Ele dirigiu o carro");
//     }
//   }
  
//   class direcao extends carro {
//     dirigir() {
//       console.log("Ele dirigiu o carro");
//     }
//   }
  
//   const car = new direcao();
//   car.dirigir ();


// 75 Classe Aluno -  atributos - nome, serie - método estudar() 


//  class aluno {

//         constructor(nome, serie){
//          this.nome= nome;
//          this.serie = serie
        
//         }
    


// estudar(){

//     return this.nome , this.serie 

// }

//  }

//  let Aluno = new aluno('Eduarda ', '3C')
//  console.log(Aluno)





// atividade 2 

// class Calculo{


//     constructor(salario, quantidade_extra){
//      this.carga = 220
//      this.salario = salario;
//      this.extra_50 = 1.5
//      this.quantidade_extra = quantidade_extra
     
//     }


//    sal_hora(){


//    return this.salario / this.carga
   
//    }
  
//    valor_extra(h_sal){


//      return h_sal * this.extra_50
     
//      }



// }


// let calculo_sal_hora = new Calculo(10000,10)
// let hr_sal =  calculo_sal_hora.sal_hora()
// console.log('valor hora', hr_sal)




// let valor_ex = calculo_sal_hora.valor_extra(hr_sal)
// console.log('valor extra', valor_ex)



//atividade 1 

// Classe Pessoa Básica -atributos  -  nome, idade, endereco, formacao


// class Pessoa {
//       // auxilia ma criação dos atrinutos da classe
//     constructor(nome, idade, endereco, formacao){


//     this.nome = nome;
//     this.idade = idade;
//     this.endereco = endereco;
//     this.formacao = formacao;
//     }



// }




// let pessoa = new Pessoa('junior', 25, 'rua 100', 'ads')
// console.log(pessoa)