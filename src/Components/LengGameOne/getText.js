export default () => {

  const texts = [
    "Rojo",
    "Azul",
    "Verde",
    "Violeta",
  
  
  ];
  
  return  texts[Math.floor(Math.random()*texts.length)];

}