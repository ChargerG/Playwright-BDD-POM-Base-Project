# Playwright BDD + Page Object Model (POM) Base Project

Este es un proyecto base de automatización que implementa el patrón de diseño **Page Object Model (POM)** utilizando **Playwright** junto con **Cucumber (BDD)**.

El flujo principal automatizado consiste en navegar a Facebook e interactuar con el formulario de inicio de sesión utilizando credenciales falsas (generadas dinámicamente con Faker), lo que provoca y valida una alerta de error en la plataforma.

---

## 🛠️ Requisitos Previos e Instalación

1. Clonar el repositorio.
2. Instalar las dependencias del proyecto:
   ```bash
   npm install
**⚙️ Configuración del Entorno (.env)**
Antes de ejecutar las pruebas, es obligatorio crear un archivo .env en la raíz del proyecto. Este archivo debe contener las siguientes variables de entorno:

* WORKERS=1
* RETRIES=0
* COUNTRY=CO

**📋 Descripción de las variables:**
WORKERS: Define la cantidad de hilos o procesos en paralelo que se van a levantar para la ejecución.
RETRIES: La cantidad de intentos (re-intentos) que realizará el framework si un test llega a fallar.
COUNTRY: Especifica el país de ejecución. Para este proyecto base, solo se admiten tres configuraciones posibles:

* CO (Colombia)
* MX (México)
* CL (Chile)

**🚀 Ejecución de Pruebas**
Para ejecutar el proyecto base levantando la interfaz gráfica del navegador y apuntando al tag/ejemplo específico, utiliza el siguiente comando, es importante revisar el archivo.feature para validar la tag que se va a ejecutar:

* Comando:
   ```bash
   npm test -- RCA-11111 --headed
**⚙📊 Reportes**
* Una vez finalizada la ejecución, los resultados se almacenarán en los siguientes directorios locales:
    * Reportes nativos de Playwright: Se generan en la carpeta /playwright-report.
    * Reportes de Cucumber (BDD): Se almacenan en la carpeta /cucumber-report.

---

### 💡 Tips adicionales para tu repositorio:
* No olvides añadir el archivo `.env` a tu `.gitignore` para evitar subir credenciales o configuraciones locales por error.
* Podrías incluir un archivo `.env.example` en la raíz con la misma estructura pero vacío (o con los valores por defecto) para facilitarle la vida a quien clone el proyecto.
