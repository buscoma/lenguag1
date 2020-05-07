export default () => {

    const texts = [
 
      "#FF0000",
      "#0000FF",
      "#00FF00",
      "#7F00FF",
 
     
    ];
    
    return texts[Math.floor(Math.random()*texts.length)];

  
  }