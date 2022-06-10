const assert = require ("chai").assert;
/* const { arrayNumeros } = require("../main"); */
const main = require ("../main");

const textoHolaMundo = main.holaMundo();

const resultadoResta = main.restar(4,2);

const arraysNumeros = main.arrayNumeros();

const estrictoIgual = main.sonIguales(7,8);

const sumaryMayor = main.sumarNros(2,2);

describe ("Main Suite" , () => {

    describe ("Hola Mundo - Test", () => {
        it ("Coincide Texto", () => {
            assert.equal(textoHolaMundo, "Hola Mundo", "Debe ser igual el string: Hola Mundo");
        });
        it ("Coincide tipo de Dato", () => {
            assert.typeOf(textoHolaMundo, "String", "el dato debe ser String");
        });
        });
  

        describe ("Resultado Resta - Test" , () => {
            it ("menor a 5", () => {
                assert.isBelow(resultadoResta,5,"el resultado no es menor a 5")
            });
            it ("Coincide tipo de Dato", () => {
                assert.typeOf(resultadoResta,"number","el dato debe ser un número")
            }); 
        });

        describe ("Metodos de Array - Test", ()=> {
            it ("Array contiene el numero 5", () => {
                assert.include(arraysNumeros,5,"Debe contener el numero 5")
            });

        it ("Cantidad de Datos", () => {
            assert.lengthOf(arraysNumeros,6,"Debe contener 6 datos")
        });
        });

        describe ("Números son Iguales - Test", () => {
            it("Es igual al número 7", () => {
               assert.strictEqual(estrictoIgual,false,"es estrictamente igual")
           });
          it ("Coincide con tipo de dato", () => {
               assert.notStrictEqual(estrictoIgual,true,"No coinciden los datos, tienen que ser iguales")
           }); 
       }); 

       
       describe ("Suma de números - Test", () => {
        it("La suma es mayor a 4", () => {
            assert.isAbove(sumaryMayor,3,"El numero tiene que ser mayor a 4")
        });

        it ("Es la suma es igual a 4", () =>{
            assert.isAtLeast(sumaryMayor,5,"El numero tiene que ser igual a 4")
        });
    });
    });

