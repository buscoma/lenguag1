import { makeStyles } from '@material-ui/core/styles';



const useStylesBoard = makeStyles(() => ({
    CasillaLlena: {
        width : "100%",
        maxWidth : "230px",
        height : "90px",
        backgroundColor: "rgb(3, 19, 5)",
        padding : "15px",
    },
    casillaVacia: {
        display : "flex",
        width : "100%",
        padding : "15px",
        minHeight: "200px",
        minWidth : "200px",
        backgroundColor : 'black',
        flexDirection : "column"
    }
}));


export  {
    useStylesBoard,
};
