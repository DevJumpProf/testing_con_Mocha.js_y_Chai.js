const assert = require("chai").assert;
const should = require("chai").should();
const expect = require("chai").expect;
const main = require("../main");

/*Testear que:
1-La suma de una operacion sea igual a 15
2-El resultado de una operacion sea un string
3-El resultado de una operacion sea un numero
4-Realizar un test con un metodo de assert que no utilizamos*/

const igualQuince = main.sumarQuince();
const esString = main.debeSerString();
const esNumero = main.debeSerNumero();
const devuelvaArray = main.devolverArray();
const restar = main.restaIgualCinco();
const operacionString = main.tipoString();
const numerito2 = main.numerito1();
const esNulo = main.debeSerNulo();
const area = main.areaTriangulo();


describe("contenedor principal", () => {
    describe("Igual a 15 - test", () => {
        it("debe dar 15", () => {
            assert.equal(igualQuince, 15, "Debe dar como resultado 15");
        });
    });

    describe("String - test", () => {
        it("debe ser string", () => {
            assert.isString(esString, "string", "Debe ser de tipo string");
        });
    });

    describe("Número - test", () => {
        it("Debe ser un número", () => {
            assert.isNumber(esNumero, "number", "Debe ser un número");
        });
    });

    describe("Array - test", () => {
        it("devuelva un array", () => {
            assert.isArray(devuelvaArray, "Debe devolver un array");
        });
    });

    /*con expect: 
    Testear que:
    1-La resta de 2 números sea igual a 5
    2-El resultado de una operacion sea un string
    3-El resultado de una operacion sea un numero
    4-Realizar un test con un metodo de expect que no utilizamos*/

    describe("resta - test", () => {
        it("resta igual a 5", () => {
            expect(restar).to.equal(5);
        });
    });

    describe("resultado string", () => {
        it("resultado que sea un string", () => {
            expect("operacionString").to.be.a("string");
        })
    })

    describe("sea un número", () => {
        it("el resultado de la operación debe ser un número", () => {
            expect(numerito2).to.be.a("number");
        })
    })

    describe("Null- test", () => {
        it("debe ser nulo", () => {
            expect(esNulo).to.be.a("null");
        })
    })

    /*
    con should testear que:
    el area del triangulo sea igual a 25
    2-El resultado de una operacion sea un string
    3-El resultado de una operacion sea un numero
    4-Realizar un test con un metodo de assert que no utilizamos */

    describe("area triangulo - test", () => {
        it("el area del triangulo debe ser igual a 25", () => {
            area.should.equal(25)
        })
    })

    describe("area triangulo 2 - test", () => {
        it("el area del triangulo debe ser un string", () => {
            "area".should.to.be.a("string")
        })
    })

    describe ("area triangulo tipo number - test", ()=>{
        it("el area del triangulo debe ser un numero",()=>{
            area.should.to.be.a("number")
        })
    })

})