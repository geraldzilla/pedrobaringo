
![Fondo Tutorial Kids on Bikes](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/cc01b23d-0e75-4d58-96fe-232523b7f4f4)
# Fichas para Kids on Bikes en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Añadir estilos CSS](#añadir-estilos-css)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Caracteristicas y Virtudes](#pestaña-de-caracteristicas-y-virtudes)
  - [Pestaña de Descripción y Notas](#pestaña-de-descripción-y-notas)
- [Crear un Personaje Potenciado](#crear-un-personaje-potenciado)
- [Hacer tiradas](#hacer-tiradas)

## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego Kids on Bikes en español para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).

Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente enlace:

[![Video del tutorial](http://img.youtube.com/vi/vsIx_xzhEPo/0.jpg)](http://www.youtube.com/watch?v=vsIx_xzhEPo "Tutorial Foundry-Kids on Bikes")


## Instalación
Para instalar este módulo en Foundry tienes que usar el siguiente Manifest en el menú de módulos como se muestra en la imagen: [https://github.com/pedrobaringo/liminal-csb-es/releases/latest/download/module.json](https://github.com/pedrobaringo/kids-on-bikes-csb-es/releases/latest/download/module.json)

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/fb5d72b0-12d4-405c-9ddd-0321c556f317)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. En la pestaña de compendios tendrás: "Templates_Actores".
Es importante que al importar mantenga el ID del documento como se ve en la imagen:

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/d4ea90fb-d04a-4179-ab39-4fe8ed639835)

## Añadir estilos CSS
Para que el estilo de las fichas y mensajes sean más parecidos al libro debemos ir a Configurar Ajustes --> Custom System Builder y allí rellenar el campo CSS Style file con "modules/kids-on-bikes-csb-es/packs/assets/KidsOnBikesStyles.css", sin las comillas. Y ya que estamos en este menú, si queremos que nos aparezca un icono de dados al lado de los campos que se pueden tirar, en Roll Icons ponemos "dice" (tambien sin comillas). En iniciativa no es necesario poner nada.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/ff90dd46-6a2d-4c17-9a7e-5c5163fcf81f)

Para que tenga efecto debemos refrescar la página.

## Crear un PJ
Una vez estan importadas las templates ya podemos crear los Actores.
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/64c2877c-a108-40f8-870d-f27a02cda157)

Aqui tenemos que seleccionar en Template la llamada PJ_Template.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/68ee6e19-88dc-445d-8ce9-865311a8006e)

En la parte de arriba se pueden poner la edad, seleccionar si es niño, adolescente o adulto (aplica los modificadores pertinentes en las habilidades), los miedos, la motivación y los defectos del personaje.

### Pestaña de Caracteristicas y Virtudes
En esta pestaña tenemoslas 6 caracteristicas, podemos seleccionar el dado correspondiente en el desplegable y hacer las tiradas haciendo click en el nombre de la caracteristica.

Tambien tenemos el contador de fichas de adversidad que se puede subir o bajar con los botones que aparecen al pasar por encima o escribiendo.

Finalmente tenemos la sección de virtudes donde podemos seleccionar las que tiene nuestro PJ y personalizar las que pueden ser personalizadas. Ademas si mantienes el ratón encima de la virtud aparece un tooltip con el efecto de esa virtud.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/7caa7f61-9a74-467e-b358-c8bda1a74f5d)

### Pestaña de Descripción y Notas
En esta pestaña podrás describir tu personaje y tomar notas.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/57ebada2-8c33-453d-8a32-9813be940934)

## Crear un Personaje Potenciado
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/64c2877c-a108-40f8-870d-f27a02cda157)

Aqui tenemos que seleccionar en Template la llamada Personaje_Potenciado_Template.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/38f1c13d-b7d9-4eed-9fcf-36728c9ffbf2)

En la parte de arriba se pueden poner la edad, seleccionar si es niño/adolescente/adulto o dejarlo en blanco y escribir una descripción.

Justo debajo tenemos las habilidades que funcionan como las de los PJs, pero con la posibilidad de no poner dado (hasta que se descubra). Tambien está el apartado de Energia Psiquica, donde podemos poner los puntos que tiene, tirar los dados y, para mayor personalización, seleccionar que dados y cuantos se tiran al usar los poderes (por defecto 2d4).

Debajo de las caracteristicas tenemos los Aspectos. Podemos crear filas en esta tabla haciendo click en el + y rellenarlas con los aspectos del personaje y el nombre del personaje que controla cada uno. Tambien podemso hacer check si queremos marcar en cada momento quien lo está controlando.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/0b99ef3b-dbad-4cb7-b544-d11ec36a939c)

Finalmente tenemos un apartado donde tomar notas abajo del todo.

## Hacer tiradas
Para hacer tiradas solamente se necesita clickar en el nombre de la habilidad que queramos tirar.

En general se tirará el dado correspondiente y si sale el valor más alto en el dado este explotará. Tambien se sumarán los modificadores de edad que aparecen al lado del dado.

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/3b1cf0c4-ccf6-4245-88bf-53da4f93d8bc)

En el mensaje del chat se puede hacer click en el resultado para ver como se ha obtenido:

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/ab9aece9-b057-4cd5-841a-e0e580bccd80)

Si tenemos que hacer una tirada con algún modificador lo podemos hacer manteniendo pulsado Mayus al clickar en la habilidad que querramos tirar. Nos aparecerá un dialogo donde poner el modificador:

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/f186704f-bfe9-4a2a-b25b-bdb0848c4c4b)

En el caso de la Energia Psiquica de los Personajes Potenciados podemos elegir el tipo y numero de dados a tirar:

![image](https://github.com/pedrobaringo/kids-on-bikes-csb-es/assets/148097688/f878daa8-6643-47b9-8005-c9edcf3b4f4c)

Al hacer click en Energia Psiquica se tiraran los dados seleccionados. Se pueden usar modificadores al igual que hemos descrito para el resto de tiradas.
