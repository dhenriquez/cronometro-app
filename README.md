# Cronómetro App

Esta es una aplicación de escritorio sencilla construida con **Electron** que presenta un cronómetro regresivo. La ventana de la aplicación es sin marco, transparente y siempre permanece en la parte superior.

## Características

-   **Cronómetro Regresivo**: Cuenta de 30 a 0 segundos.
-   **Interfaz Minimalista**: Sin marco, transparente y siempre en primer plano para una visualización discreta.
-   **Botón de Cierre**: Un botón intuitivo para cerrar la aplicación.

## Estructura del Proyecto

-   `index.js`: Archivo principal de Electron para la configuración de la ventana y el manejo de eventos.
-   `index.html`: Define la interfaz de usuario, incluyendo el contador y el botón de cierre.
-   `preload.js`: Actúa como un puente seguro entre el proceso de renderizado y el proceso principal.
-   `package.json`: Manifiesto del proyecto, donde se gestionan las dependencias y scripts.

---

## Requisitos

Para ejecutar esta aplicación, necesitas tener instalado [**Node.js**](https://nodejs.org/) (incluye **npm**).

---

## Instalación y Ejecución

1.  **Clona el repositorio** o descarga los archivos del proyecto.
2.  Abre tu terminal o línea de comandos y navega hasta el directorio del proyecto.
3.  **Instala las dependencias** listadas en `package.json` con el siguiente comando:

    ```bash
    npm install
    ```

4.  **Inicia la aplicación** con el script `start`:

    ```bash
    npm start
    ```

    El script `start` se encarga de ejecutar la aplicación con Electron.

---

## Scripts Disponibles

-   `npm start`: Ejecuta la aplicación Electron en modo de desarrollo.

---

## Dependencias Clave

-   `electron`: El framework utilizado para construir la aplicación de escritorio.
-   `electron-builder`: Herramienta para empaquetar y crear instaladores de la aplicación para diferentes plataformas.