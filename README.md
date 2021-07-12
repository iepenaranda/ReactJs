# ReactJs
Repository used to store all the stuff related with ReactJS learned in the KeyCode's course.

React.JS es una librería frontend basada en Javascript para crear interfaces y otro componentes de UI, es mantenida por Facebook.
___

## Inicializar un proyecto de React.JS
La estructura básica de un proyecto frontend en React consiste en las carpetas: public y src. En __public__ se almacenaran todoas las archivos html, css y otros elementos necesarios como imagenes o documentos que se requieran en la aplicación. En la carpeta __src__ se almacenaran los archivos __.jsx__ necesarios para el funcionamineto y renderización de la aplicación.

#### Librerias de React.
Al igual que con angular, sep uede utilizar __npm__ para la correcta instalación de los librerias necesarias. Los pasos para hacer esto serían:
1. `npm init` o `touch package.json` para crear elarchivo package.json donde se guardará la información de las lirerías usadas en el proyecto.
2. En caso de usar la segunda opción escribimos después: `echo {} > package.json` para que el archivo se actualice a medida que se agregen paquetes.
3. Instalamos las librerias:
* __Snowpack:__ <`npm i --save-dev snowpack`> para la gestión de los cambios del proyecto. Similar a __nodemon__.
* __React:__ <`npm i react react-dom`> la librería para el control del frontend.
4. Para poder ejecutar el servidor agregamos el siguiete bloque de código al package.json:

`"scripts": { "start": "snowpack dev", "build": "snowpack build"}`

5. Finalmete para crear el servidor ejecutamos la instrucción: `npm start`

#### Configración de la creación de proyectos
Para poder establecer un comando para generar un proyecto en React se usa:

1. `npm install -g create-react-app`

2. `create-react-app <nombre del proyecto>`

3. `npm start`

