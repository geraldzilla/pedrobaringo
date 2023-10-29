# Fichas para Kids on Bikes en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Añadir estilos CSS](#añadir-estilos-css)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Caracteristicas y Virtudes](#pestaña-de-caracteristicas-y-virtudes)
  - [Pestaña de Descripción y Notas](#pestaña-de-descripción-y-notas)
- [Crear un PNJ](#crear-un-pnj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades-1)
  - [Pestaña de Talentos y Limitaciones](#pestaña-de-talentos-y-limitaciones-1)
  - [Pestaña de Notas](#pestaña-de-notas)
- [Crear un Equipo](#crear-un-equipo)
  - [Pestaña de Ventajas](#pestaña-de-ventajas)
  - [Pestaña de Relaciones](#pestaña-de-relaciones)
  - [Pestaña de Notas](#pestaña-de-notas-1)
- [Crear Objetos](#crear-objetos)
- [Hacer tiradas](#hacer-tiradas)
- [Iniciativa y Combate](#iniciativa-y-combate)

## Introducción
Modulo de Foundry VTT con las templates de las fichas para el juego Kids on Bikes en español para el sistema Custom System Builder ( https://foundryvtt.com/packages/custom-system-builder ).

Para aprender como instalarlo y usarlo podeis ver el tutorial en el siguiente enlace:

[![Video del tutorial](http://img.youtube.com/vi/MWSI04i9IyY/0.jpg)](http://www.youtube.com/watch?v=MWSI04i9IyY "Tutorial Foundry-Liminal")


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
En esta pestaña podras marcar los puntos de experiencia que vayas ganando y los avances. Tambien puedes anotar el dinero que tiene el personaje y añadirle equipo con el botón + de la tabla.

En el apartado de notas puedes escribir el trasfondo del personaje o tomar notas de la partida.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/492c88e2-36d6-4f5d-ba81-dccf1b66addb)

## Crear un PNJ
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/07a82ac1-00fa-4a28-94f4-9f37d5ca5ac8)

Aqui tenemos que seleccionar en Template la llamada PNJ_Template.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/10eab8c5-334e-458d-8cc6-731347a5234c)

En la parte de arriba se pueden poner el concepto, el equipo al que pertenece y la motivación del personaje.

### Pestaña de Habilidades
En la pestaña de habilidades se pueden modificar los valores de las habilidades (Al lado tenemos ese valor + 8 para tener de forma fácil la dificultad a superar al competir en esa habilidad con el PNJ). Tambien se pueden escribir las especialidades y poner el limite de habilidad.

Tambien hay los valores de Resistencia y Voluntad que se pueden modificar. LA Resistencia y voluntad extras són por si algun talento modifica el valor máximo y no queremos perder el valor máximo de siempre.

Finalmente abajo del todo tenemos la tabla donde podremos arrastras los objetos de armas.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/c674d8e3-dafa-4878-b349-69184357d1cb)

### Pestaña de Talentos y Limitaciones
En esta pestaña se pueden arrastrar los objetos creados con las templates respectivas y se añadirán a la tabla correspondiente.
Si se quiere modificar un talento o complicación se puede clickar en el nombre de ésta para abrir su ficha y cambiar lo que se quiera (solo afecta a la de la ficha).
Se pueden borrar con el icono de papelera de la derecha.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/c9a7533e-5fc1-4636-a79f-33ef4433f376)

### Pestaña de Notas
En el apartado de notas puedes escribir escribir notas sobre el personaje o describirlo.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/de5da3c7-f264-4216-b920-864bda1e3f0e)

## Crear un Equipo
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/9a2cca66-8de2-4e68-bfae-5e1aabdd521f)

Aqui tenemos que seleccionar en Template la llamada Equipo_Template.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/efefc768-22ea-4e66-ae36-b3ebcd4f8c53)

En la parte de arriba se pueden poner el concepto, la localización y la meta del equipo.

### Pestaña de Ventajas
En esta pestaña se pueden arrastrar los objetos creados con la template de ventajas de equipo y se añadirán a la tabla.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/98f52244-92b0-43d9-8132-38efe4ce2b74)

### Pestaña de Relaciones
En esta pestaña se pueden dar los valores de relación con las distintas facciones para determinar cuales son amigas y enemigas. Se pueden añadir más facciones con el botón + o quitarlas con el icono de papelera.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/f4e48354-23cf-489e-9dda-77f5a98022cc)

### Pestaña de Notas
En el apartado de notas puedes escribir escribir notas sobre el equipo.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/37a04a1f-1088-4e30-b4ec-977159fb8198)

## Crear Objetos
Si hacemos click en crear objeto y elegimos el tipo "equippableItem" podremos crear objetos de todos los tipos usando las templates.
Los tipos son:
* **Arma_Template**: Para armas de cualquier tipo.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/1784df37-50fb-4cc1-8d93-577c485016a8)

* **Talentos_Template**: Para los Talentos, tanto de los PJ como de los PNJ.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/0d2010f7-77c8-436f-b98c-b4ec0a87b7ee)

* **Limitaciones_Template**: Para las Limitaciones, tanto de los PJ como de los PNJ.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/cdbf36e4-77a8-4e61-97c9-6f0f22cef7dc)

* **Ventajas_Equipo_Template**: Para las ventajas de Equipo.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/a56bbf9f-72da-48ec-b1b5-ccf95192e4a9)

## Hacer tiradas
Para hacer tiradas simplemente se tiene que hacer click en la habilidad o en cualquier campo que tenga el icono de dados. Saldrá el mensaje en el chat.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/06082998-0919-4b8d-ae9a-a4be049f6486)

Clickando en el numero del resultado se pueden ver los resultados de cada dado y la formula usada.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/ec6c1fc8-25e8-4d67-9ae5-ec0c15cd9425)

Para aplicar un modificador a la tirada o marcar que usamos una especialidad, se deberá pulsar la tecla "Mayus" mientras se hace click. Aparecerá un dialogo donde podemos asignar el modificador positivo o negativo y seleccionar si tiene especialidad. Esto funciona solo en las tiradas donde puede haber modificador.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/296a98d3-5400-459b-96a0-0d34d4a447ec)

## Iniciativa y Combate
Si se ha escrito correctamente la formula de iniciativa, solo se tiene que empezar un combate como en cualquier otro sistema y se ordenaran los personajes acorde a su iniciativa calculada con la tirada correspondiente.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/f4c872c4-607a-43f0-9151-276f43ff2a39)
