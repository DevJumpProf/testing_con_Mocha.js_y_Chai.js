const assert = require ("chai").assert;
const main = require ("../main");

//resultados

const textoHolaMundo = main.holaMundo();//"Hola Mundo"

const resultadoResta = main.restar(4,2);//2

const arrayNumeros= main.arrayNumeros() // [0,1,2,3,4,5]

const resultadoMultiplicacion = main.multiplicar(2,3);//6

const arrayNombres= main.arrayNombres() // ["Camila", "Pedro", "Laura"]



describe("Main Suite", () =>{
     
    describe("Hola Mundo-Test",()=>{ 

        it ("Coincidencia de Texto", ()=>{
            assert.equal(textoHolaMundo, "Holaa Mundo", "Debe ser igual el string: Hola Mundo");//mensaje //prueba error
        })  

        it ("Coincidencia tipo de Dato", ()=>{
            assert.typeOf(textoHolaMundo, "string", "Debe se String");//mensaje 
        })  
    })
})

    describe("Resultado Resta-Test",()=>{

        it ("Menor a 5", ()=>{
            assert.isBelow(resultadoResta, 5, "El resultado no es menor a 5");//mensaje    //interfaces chai
        });
        
        it ("Coincidencia tipo de Dato", ()=>{
            assert.typeOf(resultadoResta, "number", "El resultado no es un numero");//mensaje 
        });
       

    });
    


    describe("Resultado ArrayNumeros-Test",()=>{

        it ("Array tiene el numero 5", ()=>{
            assert.include(arrayNumeros, 5, "El resultado no es menor a 5");//mensaje 
        });
        
        it ("Cantidad de Datos", ()=>{
            assert.lengthOf(arrayNumeros, 6, "El resultado tiene que tener 6 datos");//mensaje 
        });

        // it ("Array es igual", ()=>{
        //     assert.notEqual(arrayNumeros, [0,1,2,3,4,5], "El resultado no es menor a 5");//mensaje 
        // });


       

    });

    

    describe("Resultado Multiplicacion",()=>{

        it ("Es un numero", ()=>{
            assert.isNumber(resultadoMultiplicacion, "El resultado no devuelve un numero");//mensaje 
        });
        
    });


    describe("Resultado Array Nombres-Test",()=>{

        it ("Es un Array", ()=>{
            assert.isArray(arrayNombres, "El resultado no es un Array");//mensaje 
        });    

    });

