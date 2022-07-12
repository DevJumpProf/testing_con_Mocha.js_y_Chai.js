const assert = require ("chai").assert;
const expect = require('chai').expect;
const should = require('chai').should();
const main2= require ("../ejercicio2_Beer");



const resultadoSuma = main2.suma(12,3);//15


const resultadoResta = main2.resta(10,5);//5

// const unString= main2.unString(); //"String"

const arrayInfuciones= main2.infuciones();//["te","matecocido","cafe"]

const areaTriangulo= main2.area(10,5)//25


describe("Resultado Suma-Test",()=>{

    it ("Igual a 15", ()=>{
        assert.equal(resultadoSuma, 15, "El resultado no es igual a 15");//mensaje 
    });
    
    it ("Coincidencia tipo de Dato numero", ()=>{
        assert.typeOf(resultadoSuma, "number", "El resultado no es un numero");//mensaje 
    });

    it ("Coincidencia tipo de Dato string", ()=>{
        assert.isString("resultadoSuma", "El resultado no es un string");//mensaje 
    });
     

});




describe("Resultado Area-triangulo Test",()=>{

    it ("Mayor o Igual a 25", ()=>{
        assert.isAtLeast(areaTriangulo, 25, "El resultado es mayor o igual a 25");//mensaje 
    });

});


describe("Resultado Array igual con assert",()=>{
// no funciona con assert y equal 

    // it ("es igual a lo esperado", ()=>{
    //     assert.equal(arrayInfuciones, ["te","matecocido","cafe"], "No es igual al array"); //fail
    // });

    //con not equal debería saltar el mensaje y no pasar el test pero lo pasa
    it ("es igual a lo esperado", ()=>{
        assert.notEqual(arrayInfuciones, ["te","matecocido","cafe"], "No es igual al array"); //fail
    });
});



//expect


describe("Resultado Resta-Test expect",()=>{

    it ("Igual a 5", ()=>{
        expect(resultadoResta).to.equal(5);
    });

    it ("tipo de dato string", ()=>{
        expect("resultadoResta").to.be.a('string'); 
    });

    
    it ("Tipo de dato number", ()=>{
        expect(resultadoResta).to.be.a('number'); 
    });



});


describe("Resultado test array",()=>{

    it ("Es un array, incluye", ()=>{
        expect(arrayInfuciones).to.be.an('array').that.includes("cafe");  //que el array incluya "cafe"
    });

    it ("Es un array, incluye", ()=>{
        expect(arrayInfuciones).to.eql(["te","matecocido","cafe"]); //se puede con expect usando eql porque se usa 
        //como comparación
        //un valor sólo es igual así mismos

        //cada copia tiene su propia dirección en la memoria, la igualdad estricta de Javascript (y chai) las considera no iguales
    });
    
   
});




//should 

describe("Resultado suma-test tipo de dato",()=>{
 
    
    it ("Es un string", ()=>{
        "resultadoSuma".should.be.a('string');
});



it ("Es un numero", ()=>{
    resultadoSuma.should.be.a('number');
});

});



describe("Test array should",()=>{
 
    
//     it ("largo indicado donde la propiedad es igual te", ()=>{
// "arrayInfuciones".should.have.property(arrayInfuciones[0]).with.lengthOf(2);  // que el string del array contenga un largo igual a 2 
// });

    
it ("largo indicado donde la propiedad es igual te", ()=>{
    arrayInfuciones.should.lengthOf(3);  
    });
    

it ("Es un string", ()=>{
    "arrayInfuciones".should.be.a('string');
});

});

describe("Resultado Area Triangulo-Test",()=>{
 
    
    it ("Coincidencia numerica", ()=>{
        areaTriangulo.should.equal(25);
});

});