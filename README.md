Encriptador de Texto
Este proyecto es una aplicación web simple que permite a los usuarios encriptar y desencriptar texto utilizando un sistema de sustitución de caracteres. El objetivo es proporcionar una manera divertida de ocultar mensajes utilizando reglas de encriptación predefinidas.

Funcionalidades
1. Encriptar Texto
Descripción: Convierte un texto ingresado por el usuario en una versión encriptada según un mapa de sustitución.
Reglas de Encriptación:
e se convierte en enter
i se convierte en imes
a se convierte en ai
o se convierte en ober
u se convierte en ufat
Uso: El usuario ingresa el texto en el área de texto y hace clic en el botón "Encriptar". El texto encriptado aparecerá en el área de salida.
2. Desencriptar Texto
Descripción: Revierte el texto encriptado a su forma original utilizando un proceso inverso basado en el mismo mapa de sustitución.
Uso: El usuario ingresa el texto encriptado en el área de texto y hace clic en el botón "Desencriptar". El texto desencriptado aparecerá en el área de salida.
3. Copiar Texto al Portapapeles
Descripción: Permite copiar el texto desencriptado o encriptado al portapapeles para que el usuario pueda pegarlo en otro lugar.
Uso: Después de encriptar o desencriptar un texto, el botón "Copiar" aparecerá. Al hacer clic en este botón, el texto en el área de salida se copiará automáticamente al portapapeles.
4. Validación de Entrada
Descripción: El sistema solo acepta letras minúsculas y sin acentos para asegurar un proceso de encriptación y desencriptación exitoso.
Aviso: Si el texto ingresado no cumple con los criterios, el usuario verá un mensaje de advertencia y no podrá encriptar o desencriptar el texto.
Estructura del Proyecto
HTML
index.html: Estructura básica del encriptador de texto, incluyendo las áreas de entrada y salida, botones de encriptación/desencriptación, y la sección de mensajes.
CSS
style.css: Estilos para la interfaz de usuario, incluyendo el diseño responsivo para diferentes tamaños de pantalla.
JavaScript
script.js: Lógica para encriptar, desencriptar, manejar la visualización de mensajes y copiar el texto al portapapeles.
Cómo Ejecutar el Proyecto
Clona este repositorio.
Abre el archivo index.html en tu navegador web.
Ingrese el texto en el campo correspondiente, y utiliza los botones para encriptar o desencriptar el texto.
Autor
Juan Quintero - Desarrollador principal - @JuanQuintero
