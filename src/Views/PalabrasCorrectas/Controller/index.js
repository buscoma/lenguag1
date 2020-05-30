const controller = () => {
  const texts = [
    { palabra: "CAMELLO", EsCorrecta: true, Correccion: "" },
    { palabra: "CAMEYO", EsCorrecta: false, Correccion: "CAMELLO" },
    { palabra: "HIPOPOTAMO", EsCorrecta: true, Correccion: "" },
    { palabra: "IPOPOTAMO", EsCorrecta: false, Correccion: "HIPOPOTAMO" },
    { palabra: "ABJEA", EsCorrecta: true, Correccion: "" },
    { palabra: "AVEJA", EsCorrecta: false, Correccion: "ABEJA" },
  ];
  return texts;
};

export default controller;
