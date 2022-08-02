 ◇ COMPARADORES DE NAVEGADOR

 • toHaveUrl:
 
  Comprueba si el navegador está en una página específica.

 <img  src='./img/n1.png' height='100px'>

 • toHaveUrlContaining:

 Comprueba si el navegador está en una URL de página que contiene un valor.

 <img  src='./img/n2.png' height='75px'>

 • toHaveTitle:

 Comprueba si el sitio web tiene un título específico.

 <img  src='./img/n3.png' height='75px'>

 • toHaveTitleContaining:

Comprueba si el sitio web tiene un título específico que contiene un valor.

 <img  src='./img/n4.png' height='75px'>

----------------------------------------------------------------------------

◇COINCIDENCIAS DE ELEMENTOS

 • toBeDisplayed:

Las llamadas se muestran en el elemento dado.

 <img  src='./img/n5.png' height='70px'>

 • toExist:

Llama a isExisting en un elemento dado.

 <img  src='./img/n6.png' height='70px'>

 • toBePresent:

Igual que toExist

 <img  src='./img/n7.png' height='50px'>

 • toBeExisting: 

Igual que toExist

 <img  src='./img/n8.png' height='45px'>

 • toBeFocused:

Comprueba si el elemento tiene foco. Esta afirmación solo funciona en un contexto web.

 <img  src='./img/n9.png' height='55px'>

 • toHaveAttribute

Comprueba si un elemento tiene un determinado atributo con un valor específico.

 <img  src='./img/n10.png' height='70px'>

 • toHaveAttr:

La misma que toHaveAttribute.

 <img  src='./img/n11.png' height='70px'>

 • toHaveAttributeContaining:

Comprueba si un elemento tiene un determinado atributo que contiene un valor.

 <img  src='./img/n12.png' height='70px'>

 • toHaveAttrContaining:

Lo mismo que toHaveAttributeContaining

 <img  src='./img/n13.png' height='70px'>

 • toHaveElementClass:

Comprueba si un elemento tiene un cierto nombre de clase.

 <img  src='./img/n14.png' height='70px'>

 • toHaveElementClassContaining:

Comprueba si un elemento tiene un cierto nombre de clase que contiene el valor proporcionado.

 <img  src='./img/n15.png' height='55px'>

 • toHaveElementProperty:

Comprueba si un elemento tiene una determinada propiedad.

 <img  src='./img/n16.png' height='65px'>

 • toHaveValue:

Comprueba si un elemento de entrada tiene un valor determinado.

 <img  src='./img/n17.png' height='75px'>

 • toHaveValueContaining:

Comprueba si un elemento de entrada contiene un cierto valor.

 <img  src='./img/n18.png' height='67px'>

 • toBeClickable:

Comprueba si se puede hacer clic en un elemento llamando a isClickable en el elemento.

 <img  src='./img/n19.png' height='45px'>

 • toBeDisabled:

Comprueba si un elemento está deshabilitado llamando a isEnabled en el elemento.

 <img  src='./img/n20.png' height='90px'>

 • toBeEnabled:

Comprueba si un elemento está habilitado llamando a isEnabled en el elemento.

 <img  src='./img/n21.png' height='80px'>

 • toBeSelected:

Comprueba si un elemento está habilitado llamando a isSelected en el elemento.

 <img  src='./img/n22.png' height='50px'>

 • toBeChecked:

Igual a toBeSelected

 <img  src='./img/n23.png' height='45px'>

 • toHaveHref:

Comprueba si el elemento de enlace tiene un destino de enlace específico.

 <img  src='./img/n24.png' height='50px'>

 • toHaveLink:

Igual a toHaveHref

 <img  src='./img/n25.png' height='50px'>

 • toHaveHrefContaining:

Comprueba si el elemento de enlace contiene un objetivo de enlace específico.

 <img  src='./img/n26.png' height='50px'>

 • toHaveLinkContaining:

Igual a toHaveHrefContaining

 <img  src='./img/n27.png' height='50px'>

 • toHaveId:

Comprueba si el elemento tiene un atributo de identificación específico.

 <img  src='./img/n28.png' height='50px'>

 • toHaveText:

Comprueba si el elemento tiene un texto específico. También se puede llamar con una matriz como parámetro en el caso de que el elemento pueda tener diferentes textos.

 <img  src='./img/n29.png' height='100px'>

 • toHaveTextContaining:

Comprueba si el elemento contiene un texto específico. También se puede llamar con una matriz como parámetro en el caso de que el elemento pueda tener diferentes textos.

 <img  src='./img/n30.png' height='100px'>

 • toBeDisplayedViewport:

Comprueba si un elemento está dentro de la ventana gráfica llamando a isDisplayedInViewport en el elemento.

 <img  src='./img/n31.png' height='60px'>

 • toHaveChildren:

Comprueba la cantidad de elementos secundarios del elemento obtenido llamando al comando element.$('./*').

 <img  src='./img/n32.png' height='200px'>

 • toBeElementsArrayOfSize:

Comprueba la cantidad de elementos obtenidos mediante el comando $$.

 <img  src='./img/n33.png' height='160px'>

----------------------------------------------------------------------------

◇ COINCIDENCIAS DE RED

 • toBeRequested:

Comprueba que se llamó al simulacro

 <img  src='./img/n34.png' height='50px'>

 • toBeRequestedTimes:

Comprueba que se llamó al simulacro la cantidad de veces esperada

 <img  src='./img/n35.png' height='150px'>

 • toBeRequestedWith:

Comprueba que se llamó al simulacro de acuerdo con las opciones esperadas.

La mayoría de las opciones admiten comparadores parciales expect/jasmine como expect.objectContaining
 
  <img  src='./img/n36.png' height='400px'>
