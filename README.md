# Cronómetro App

Esta es una aplicación de escritorio simple construida con Electron que presenta un cronómetro regresivo. La ventana de la aplicación no tiene marco, es transparente y siempre permanece en la parte superior.

## Características

- Cronómetro Regresivo: Cuenta de 30 a 0 segundos.
- Interfaz Minimalista: Sin marco, transparente y siempre en primer plano para una visualización discreta.
- Botón de Cierre: Un botón intuitivo para cerrar la aplicación.

## Estructura del Proyecto

- `index.js`: Archivo principal de Electron para la configuración de la ventana y el manejo de eventos.
- `index.html`: Define la interfaz de usuario, incluyendo el contador y el botón de cierre.
- `preload.js`: Actúa como un puente seguro entre el proceso de renderizado y el proceso principal.
- `package.json`: Manifiesto del proyecto, donde se gestionan las dependencias y scripts.

---

## Requisitos

Para ejecutar esta aplicación, necesitas tener instalado `Node.js` (incluye npm).

---

## Instalación y Ejecución

1. Clona el repositorio o descarga los archivos del proyecto.
2. Abre tu terminal o línea de comandos y navega hasta el directorio del proyecto.
3. Instala las dependencias listadas en `package.json` con el siguiente comando:

    ```bash
    npm install
    ```

4. Inicia la aplicación con el script `start`:

    ```bash
    npm start
     ```

    El script `start` se encarga de ejecutar la aplicación con Electron.

---

## Empaquetado y Distribución

Para empaquetar y distribuir tu aplicación, usa `electron-builder`, que ya está configurado como una `devDependency`.

### 1. Configuración del package.json

Añade un bloque de `build"` a tu `package.json` para configurar cómo `electron-builder` empaquetará la aplicación. Este bloque debe estar al mismo nivel que `scripts` y `devDependencies`.

```JSON
  "build": {
    "appId": "com.yourcompany.cronometroapp",
    "productName": "Cronómetro App",
    "win": {
      "target": "nsis"
    },
    "mac": {
      "category": "public.app-category.utilities"
    },
    "linux": {
      "target": "AppImage"
    }
  }
```

- `appId`: Un identificador único (usa un nombre de dominio inverso).
- `productName`: El nombre de la aplicación final.
- `win`, `mac`, `linux`: Configura las opciones de empaquetado para cada sistema operativo.

### 2. Creación de los Archivos de Distribución

Una vez que la configuración esté lista, usa los siguientes comandos en la terminal:

- Para generar un instalador o ejecutable para tu sistema operativo:

    ```bash
    npx electron-builder --publish never
    ```

Esto creará los archivos de distribución en una carpeta llamada `dist`. El comando `npx` te permite ejecutar `electron-builder` sin tener que instalarlo globalmente.

- Para crear una carpeta desempaquetada con los archivos de la aplicación (útil para pruebas):

    ```bash
    npx electron-builder --dir
    ```

### 3. Iconos y Firma de Código

- Iconos: Para personalizar el icono de tu aplicación, crea un directorio `build` en la raíz del proyecto y añade tus archivos de icono (`icon.ico` para Windows y `icon.icns` para macOS). Luego, especifica la ubicación en `package.json` con la clave `icon`: `build/icon`.

- Firma de Código: Para que la aplicación sea de confianza y evitar advertencias de seguridad, se recomienda firmarla digitalmente. `electron-builder` tiene soporte para esto, pero requiere un certificado de firma válido.