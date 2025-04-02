# Proyecto de Automatización QA - FrontEnd

Este proyecto de automatización QA está diseñado para realizar pruebas automatizadas sobre la interfaz de usuario (FrontEnd) de una aplicación web. En este README se explicará paso a paso cómo configurar y ejecutar el proyecto en un entorno local utilizando Visual Studio Code.

## Prerrequisitos

Antes de empezar, asegúrate de tener lo siguiente instalado en tu computadora:

- [Node.js](https://nodejs.org/) (incluye npm) para gestionar las dependencias del proyecto.
- [Visual Studio Code](https://code.visualstudio.com/) como editor de código
- Dentro de vscode instalar las extenciones:
    - Cucumber
    - Cucumber (Gherkin) Full Support
    - Playwright Test for VSCode
- Cerrar y abrir nuevamente el VSCode.

## 1. Descargar el repositorio

https://github.com/JairBruno27/RetoAutomatizacionQA.git

Descargar el archivo .zip y extraerlo. Dentro del vscode ir a File, Open Folder y seleccionar la carpeta extraida.

## 2. Ejecución del proyecto

- Abrir una nueva terminal (Menú superior, Terminal, New terminal).
- Inicialización del proyecto Node.js

    Inicializar con npm init -f

- Instalación de Playwright

    Instalar con npm init playwright@latest
    Y (yes), Enter, Enter, Enter, Enter (Todo por defecto).
    Esto sirve también para instalar los navegadores necesarios. En este caso utilizaremos Chrome, por este motivo este comando instalará Chromium.

- Instalación de Cucumber

    Instalado con npm install -D @cucumber/cucumber

- Instalación de Node TypeScript

    Instalado con npm install -D ts-node

- Ejecución del projecto

    Ejecutar el proyecto con el comando npm rum cucumber
    Se abrirán 4 chromes en donde se mostrarán los resultados de cada prueba automatizada.

- Revisión de los resultados

    En la carpeta raiz, se ha generado una carpeta "Reports". Adentro hay un archivo llamado "cucumber-report" que al abrirlo mostrará el resumen de todos los escenarios ejecutados.
