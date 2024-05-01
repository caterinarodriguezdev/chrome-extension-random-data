
# Extensión de Chrome - Datos aleatorios de programación

En este proyecto he creado una extensión de Chrome que te permite descubrir un dato aleatorio sobre programación cada vez que abres una nueva pestaña.

![Extension Screenshot](https://raw.githubusercontent.com/caterinarodriguezdev/chrome-extension-random-data/main/docs/extension.png)
![Notification Screenshot](https://raw.githubusercontent.com/caterinarodriguezdev/chrome-extension-random-data/main/docs/notificacion.png)


## ¿Cómo funciona?
Para crear una extensión de Chrome se necesitan 3 archivos:
- 📄 manifest.json
- 📄 popup.html
- 📄 background.js

A medida que aumente la complejidad de la extensión se podrán añadir otros archivos como el content.js. En mi caso he usado archivos de estilos para darle coherencia a la estructura.

- En el manifest.json le indico datos como el nombre de la extensión, donde encontrar el archivo de JS o que icono usar.
- En el popup.html defino la estructura de tu extensión al abrirla en la barra de Google.
- Y en el background.js le añado la funcionalidad para que cuando se abra una pestaña se escoja un dato aleatorio y se cree una notificación silenciosa.

## ¿Cómo probarla?
1. Clona el proyecto
2. Dirigete a chrome://extensions
3. Activa el modo desarrollador
4. Selecciona "cargar descomprimida" en el menú superior a la izquierda