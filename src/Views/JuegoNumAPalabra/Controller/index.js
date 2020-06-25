import {authFetch} from "../../../AuthProvider";

export const obtenerNivel = (dificultad) => {
  
    return authFetch("https://backendlenguamaticag1.herokuapp.com/api/games/juegoNumAPalabra?nivel=" + dificultad)
    .then(res=>res.json())
    .then((result)=> {return result.data})
    .catch((error)=>{console.log("error", error)});

}
// class JuegoNumAPalabraCtrl {
//   obtenerNivel(dificultad) {
//     switch (dificultad) {
//       case 1:
//         return {
//           Numero: 150,
//           Respuestas: [
//             {
//               Descripcion: "Ciento cincuenta",
//               Correcta: true,
//             },
//             {
//               Descripcion: "Ciento cincuenta y cinco",
//               Correcta: false,
//             },
//             {
//               Descripcion: "Quinientos veintitres",
//               Correcta: false,
//             },
//           ],
//         };
//       case 2:
//         return {
//           Numero: 210,
//           Respuestas: [
//             {
//               Descripcion: "Ciento cincuenta y cinco",
//               Correcta: false,
//             },
//             {
//               Descripcion: "Doscientos diez",
//               Correcta: true,
//             },
//             {
//               Descripcion: "Quinientos veintitres",
//               Correcta: false,
//             },
//           ],
//         };
//       case 3:
//         return {
//           Numero: 1003,
//           Respuestas: [
//             {
//               Descripcion: "Quinientos veintitres",
//               Correcta: false,
//             },
//             {
//               Descripcion: "Mil tres",
//               Correcta: true,
//             },
//             {
//               Descripcion: "Ciento cincuenta y cinco",
//               Correcta: false,
//             },
//           ],
//         };
//         default:
//           console.log("Caso defualt en el switch del controler de JuegoNUmApalabra");
//         break;
//     }
//   }
// }

// export default new JuegoNumAPalabraCtrl();
