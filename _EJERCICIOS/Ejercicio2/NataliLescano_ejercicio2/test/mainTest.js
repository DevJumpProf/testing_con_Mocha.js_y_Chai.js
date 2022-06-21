const assert = require ("chai").assert;
const should = require ("chai").should();
const expect = require ("chai").expect;


const main = require ("../main");

/* Armado de las variables del main */
const sumar = main.suma(10,5);
const restar = main.resta(8,3);
const area = main.areaTriangulo(10,5); // 10x5  50       50/2 25


/* ASSERT: ejercicios */
/* Testear que:
1-La suma de una operacion sea igual a 15
2-El resultado de una operacion sea un string
3-El resultado de una operacion sea un numero
4-Realizar un test con un metodo de assert que no utilizamos */

 describe("Operation Main Suit - Test", () => {

        it("Operacion suma", () => {
            assert.isOk(sumar,"La suma es igual a 15");
        });

        it("Operacion String", () => {
             assert.isNotString(sumar,"No es un string")
        });
        
        it ("Operacion Numero", () => {
            assert.isNumber(sumar,'El resultado es en números')
        })

 

/* EXPECT: ejercicios */
/* Testear que:
1-La resta de 2 números sea igual a 5
2-El resultado de una operacion sea un string
3-El resultado de una operacion sea un numero
4-Realizar un test con un metodo de expect que no utilizamos */

describe ("Operacion Expect - Test", () => {

    it("Resta de dos numeros", () => {
        expect(restar).to.equal(5)        
    });
    
    it("Resta es un String", () => {
      expect("restar").to.be.a("string")
    });

    it("Resta es un Numero", () => {
       expect(restar).to.be.a("number")
    });
});


/* SHOULD: ejercicios */
/* Testear que:
el area del triangulo sea igual a 25
2-El resultado de una operacion sea un string
3-El resultado de una operacion sea un numero
4-Realizar un test con un metodo de assert que no utilizamos */ 

 
describe ("Area del triangulo Should", () => {

    it ("Area del triangulo", () => {
        (area).should.to.be.equal(25);
    });

    it ("Area del triangulo en Numero", () => {
        (area).should.to.be.a('number');
    });

    it ("Area del triangulo en String", () => {
        ('area').should.to.be.a('string');
    });

});

}); 