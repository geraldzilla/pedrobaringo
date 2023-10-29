# Fichas para Kids on Bikes en Custom System Builder

## Tabla de Contenido
- [Introducción](#introducción)
- [Instalación](#instalación)
- [Añadir estilos CSS](#añadir-estilos-css)
- [Crear un PJ](#crear-un-pj)
  - [Pestaña de Habilidades](#pestaña-de-habilidades)
  - [Pestaña de Talentos y Limitaciones](#pestaña-de-talentos-y-limitaciones)
  - [Pestaña de Experiencia y Notas](#pestaña-de-experiencia-y-notas)
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

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/1d94e7aa-e573-4d8b-86e6-29c1fcd61003)

Cuando hayas creado un mundo con el sistema Custom System Builder debes activar este módulo. En la pestaña de compendios tendrás dos: "Templates_Actores" y "Templates_Objetos".
Es importante que importes primero los Objetos y después los Actores, pero sobretodo que se mantenga el ID del documento como se ve en la imagen:

![image](https://github.com/pedrobaringo/the-troubleshooters-csb-es/assets/148097688/6fa9c0c2-1936-4db6-99b2-7e80f54e7172)

## Añadir estilos CSS
Para que el estilo de las fichas y mensajes sean más parecidos al libro debemos ir a Configurar Ajustes --> Custom System Builder y allí rellenarel campo CSS Style file con "modules/liminal-csb-es/packs/assets/LiminalStyle.css", sin las comillas. Y ya que estamos en este menú, aprovechamos para cambiar la Initiative formula a "ispnj == 1 ? iniciativa : [2d6]+iniciativa" (sin las comillas y en minuscula) y en Roll Icons ponemos "dice" (tambien sin comillas).

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/0fd3db3f-676d-47d3-95ab-fb0fc788b609)

Para que tenga efecto debemos refrescar la página.

## Crear un PJ
Una vez estan importadas las templates ya podemos crear los Actores.
Hacemos click en Crear Actor, le ponemos un nombre y seleccionamos el tipo "character" y se nos creará una ficha en blanco.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/07a82ac1-00fa-4a28-94f4-9f37d5ca5ac8)

Aqui tenemos que seleccionar en Template la llamada PJ_Template.

Una vez hemos seleccionado la template y hacemos click en el icono de refrescar en la ficha ya estamos listos para empezar a rellenarla.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/0aa28db8-8425-4dab-af2b-5a9e8d641833)

En la parte de arriba se pueden poner el concepto, el equipo al que pertenece y la motivación del personaje.

### Pestaña de Habilidades
En la pestaña de habilidades se pueden modificar los valores de las habilidades. Tambien se pueden escribir las especialidades y poner el limite de habilidad.

Al seleccionar el Enfoque se actualizarán la resistencia y voluntad máximas máxima. Si por algun talento el personaje tuviese un limite de resistencia o voluntad más alto, se puede añadir ese modificador a la Resistencia y voluntad Extras.

Finalmente abajo del todo tenemos la tabla donde podremos arrastras los objetos de armas.

### Pestaña de Talentos y Limitaciones
En esta pestaña se pueden arrastrar los objetos creados con las templates respectivas y se añadirán a la tabla correspondiente.
Si se quiere modificar un talento o complicación se puede clickar en el nombre de ésta para abrir su ficha y cambiar lo que se quiera (solo afecta a la de la ficha).
Se pueden borrar con el icono de papelera de la derecha.

![image](https://github.com/pedrobaringo/liminal-csb-es/assets/148097688/741d6a10-1526-4ba2-aee4-9b1c256f3d1d)

### Pestaña de Experiencia y Notas
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
