class ComprensionLectoraController {
  obtenerNivel = (dificultad) => {
    switch (dificultad) {
      case 1:
        return {
          Pregunta:
            "¿La mamá de Julia tiene cinco hijas: Papa, Pepa, Pipa, Popa ¿Cómo se llama la última hija?",
          Respuestas: [
            {
              Descripcion: "Pupa",
              Correcta: false,
            },
            {
              Descripcion: "Julia",
              Correcta: true,
            },
            {
              Descripcion: "Pepa",
              Correcta: false,
            },
          ],
        };
      case 2:
        return {
          Pregunta: "¿De qué color es el caballo blanco de San Martín?",
          Respuestas: [
            {
              Descripcion: "Blanco",
              Correcta: true,
            },
            {
              Descripcion: "Negro",
              Correcta: false,
            },
            {
              Descripcion: "Azul",
              Correcta: false,
            },
          ],
        };
      case 3:
        return {
          Pregunta:
            "¿Qué pesa más 1 kilo de manazanas 🍎 o 1 kilo de algodón ☁?",
          Respuestas: [
            {
              Descripcion: "1 kilo de manzanas 🍎",
              Correcta: false,
            },
            {
              Descripcion: "1 kilo de algodón ☁",
              Correcta: false,
            },
            {
              Descripcion: "Ambos pesan lo mismo",
              Correcta: true,
            },
          ],
        };
    }
  };
}

export default new ComprensionLectoraController();
