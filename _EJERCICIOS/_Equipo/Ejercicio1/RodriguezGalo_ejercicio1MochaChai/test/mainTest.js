const assert = require("chai").assert;
const expect = require ("chai").expect
const should = require ("chai").should
const main = require("../main");

//resultados

const textoHolaMundo = main.holaMundo(); // "Hola Mundo"
const resultadoResta = main.restar(4, 2); // 2
const arrayNumeros = main.arrayNumeros(); // [0,1,2,3,4,5]
const devuelveUnNumero = main.debeSerNumero(); // número
const darTrue = main.debeSerVerdadero(); // true
const SumarDos=main.sumaDosNumeros(5,5);

describe("Main Suite", () => {
    describe("Hola Mundo-Test", () => {
        it("Coincide el texto", () => {
            assert.equal(textoHolaMundo, "Hola Mundo", "Debe ser igual el string: Hola Mundo");
        });

        it("Coincide tipo de dato", () => {
            assert.typeOf(textoHolaMundo, "string", "el dato debe ser string");
        });
    });

    describe("Resultado resta - test", () => {
        it("menor a 5", () => {
            assert.isBelow(resultadoResta, 5, "el resultado no es menor a 5");
        })
        it("coincide tipo de dato", () => {
            assert.typeOf(resultadoResta, "number", "el dato debe ser un número");
        });
    })

    describe("Metodos de array - test", () => {
        it("Array tiene el número 5", () => {
            assert.include(arrayNumeros, 5, "debe contener el número 5");
        });
        it("cantidad de datos", () => {
            assert.lengthOf(arrayNumeros, 6, "debe contener 6 datos");
        });
    })
    //No puedo utilizar metodos repetidos de la clase

    describe("devolver número - test", () => {
        it("devolver un número", () => {
            assert.isNumber(devuelveUnNumero, "tiene que ser un número")
        })
    })

    describe("true - test", () => {
        it("devolver verdadero", () => {
            assert.isTrue(darTrue, "tu respuesta debe ser verdadera")
        })
    })

    describe("sumar 2 numeros - test", ()=>{
        it("resultado debe ser mayor a 9",()=>{
            assert.isAbove(SumarDos,9,"no es mayor a 9");
        })
    })
})
