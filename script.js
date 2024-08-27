document.addEventListener("DOMContentLoaded", function() {
    const entradaTexto = document.getElementById("text-input");
    const salidaTexto = document.getElementById("text-output");
    const botonEncriptar = document.getElementById("encrypt-btn");
    const botonDesencriptar = document.getElementById("decrypt-btn");
    const botonCopiar = document.getElementById("copy-btn");
    const mensajeSalida = document.getElementById("output-message");

    const mapaEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    const mapaDesencriptacion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    function encriptarTexto(texto) {
        return texto.split('').map(caracter => mapaEncriptacion[caracter] || caracter).join('');
    }

    function desencriptarTexto(texto) {
        let textoDesencriptado = texto;
        for (let clave in mapaDesencriptacion) {
            const regex = new RegExp(clave, "g");
            textoDesencriptado = textoDesencriptado.replace(regex, mapaDesencriptacion[clave]);
        }
        return textoDesencriptado;
    }

    function manejarEncriptacion() {
        const textoIngresado = entradaTexto.value.trim().toLowerCase();
        if (textoIngresado) {
            const textoEncriptado = encriptarTexto(textoIngresado);
            salidaTexto.value = textoEncriptado;
            mostrarSalida();
        } else {
            ocultarSalida();
        }
    }

    function manejarDesencriptacion() {
        const textoIngresado = entradaTexto.value.trim().toLowerCase();
        if (textoIngresado) {
            const textoDesencriptado = desencriptarTexto(textoIngresado);
            salidaTexto.value = textoDesencriptado;
            mostrarSalida();
        } else {
            ocultarSalida();
        }
    }

    function mostrarSalida() {
        mensajeSalida.style.display = "none";
        salidaTexto.style.display = "block";
        botonCopiar.style.display = "block";
    }

    function ocultarSalida() {
        mensajeSalida.style.display = "flex";
        salidaTexto.style.display = "none";
        botonCopiar.style.display = "none";
    }

    function manejarCopia() {
        salidaTexto.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    }

    botonEncriptar.addEventListener("click", manejarEncriptacion);
    botonDesencriptar.addEventListener("click", manejarDesencriptacion);
    botonCopiar.addEventListener("click", manejarCopia);
});
