class ComprensionLectoraController{
    obtenerNivel = (dificultad) => {
        switch(dificultad){
            case 1: 
                return{
                    Pregunta: "¿La mama de Julia tiene cinco hijas Papa, Pepa, Pipa y Popa. Como se llama la ultima hija?",
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
                return{
                Pregunta: "¿De que color ese el caballo blanco de San Martin?",
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
                return{
                    Pregunta: "¿Que pesa mas un Kg de acero o un Kg de algodón ?",
                    Respuestas: [
                        {
                            Descripcion: "Un Kg de acero",
                            Correcta: false,
                        },
                        {
                            Descripcion: "Un Kg de plumas",
                            Correcta: false,
                        },
                        {
                            Descripcion: "Ambos pesan lo mismo",
                            Correcta: true,
                        },
                    ],
                };
        }
    }
}

export default new ComprensionLectoraController();