# Ever Rojas | Prueba técnica para front-end de Tagger

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) Version 11
Esta aplicacion fue escrita por [Ever Rojas](https://mailto:ever.jrg@gmail.com)

## Para desplegar la aplicacion

### 1.) Descargar dependencias
Una vez copiado el repositorio, ejecute el comando `npm install` esto descargara todas las dependencias del proyecto.
#### En caso de estar bajo el gobierno de Byron (en la red de las oficinas de iRoute): Debe tener configurarda el proxy en npm `Debe solicitar a soporte los comando.`

### 2.) Ejecutar el servidor.

Ejecute el comando `ng s -o` espere mientras ejecuta. la bandera `-o` abrirar automaticamente la aplicacion en su navegador cuando finalice su despligue.

## Para generar una distribucion (Compilado)

Ejecute el comando `ng build` para construir una distribucion (compilado). El resultado se creara en la carpeta raiz del proyecto en el directorio `dist/`. No se encuentra habilitada la bandera `--prod` ya que no fue requerimiento (Usa variables de entorno desde la distribucion).

## Ejecutar pruebas unitarias

Ejecute el comando `ng test` para inciar pruebas unitarias con [Karma](https://karma-runner.github.io).

Ejecute el comando `ng e2e` para iniciar pruebas end-to-end con [Protractor](http://www.protractortest.org/).

### Comentarios adicionales a partir de aqui