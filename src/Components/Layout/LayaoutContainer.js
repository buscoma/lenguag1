
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../../Components/NavBar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import NewDialog from './Components/NewDialog';
import BienvenidoSvg from './bienvenido.svg';
import PerdisteSvg from './icon.svg';
import GanasteSvg from './ganaste.svg';
import JuegoTerminado from './JuegoTerminado.svg';
import IconGame from './Svg/IconJuego.svg';

const mensajes = [
    {
        title: "",
        description: "",
        bottoms: [
            {
                name: "",
                url: ""
            }
        ]
    }
];

export default function LayoutContainer(props) {


    const useStyles = makeStyles((theme) => ({
        root: {
            padding: '20px',
            height: '92vh',
        },
        rootImage: {
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: "cover",
            height: "100vh",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
        },
        rootPaper: {
            width: '100%',
            height: theme.spacing(9),
            padding: '10px',
        },
        colorPaper: {
            backgroundColor: props.backgroundPaper,
        },
        //TEXT STYLE
        TitleH1: {
            fontSize: '3rem',
            color: props.color,
            fontWeight: "bold"
        },
        TitleH3: {
            fontSize: '2rem',
            color: props.color,
            fontWeight: "bold"
        },
        Text: {
            fontSize: '1.5rem',
            color: props.color,
        },
        gutterBottom: {
            margin: '0px'
        },
        center: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }

    }));


    const classes = useStyles();
    //Esta variabe muestra el bienvenido
    const [state, setstate] = useState(props); const [startGame, setStartGame] = useState(true);

    const handleStartGame = () => {
        setStartGame(!startGame);
    }
    //<NewDialog showDialog={props.isWinner} setShowDialog={props.setIsWinner} />
    /* return (
         <div className={classes.rootImage}>
             <NavBar User={{ Name: 'Ale' }} />
             <CssBaseline />
 
             <NewDialog  showDialog={startGame} 
                         setShowDialog={handleStartGame} 
                         icon={BienvenidoSvg} 
                         title={"Enunciado"} 
                         description={props.enunciado}/>
             
             <NewDialog  showDialog={props.showLoser} 
                         setShowDialog={()=> props.setShowLoser(!props.showLoser)}
                         title={"Perdiste"}
                         description={"Sos un perdedor, y tu mama, papa o figura paterna no te quiere."} 
                         icon={PerdisteSvg}/>
             {props.level <= 3 ? 
                 <NewDialog  showDialog={props.showerWinner} 
                             setShowDialog={()=> props.setShowWinner(!props.showerWinner)}
                             title={"Ganaste el nivel " + props.level}
                             description={"Sos un ganador, y tu mama, papa o figura paterna esta feliz ."}  
                             icon={GanasteSvg}/>
             :
                 <NewDialog  showDialog={props.showerWinner} 
                             setShowDialog={()=> props.setShowWinner(!props.showerWinner)}
                             title={"Felicitaciones, terminaste el juego. "}
                             description={"Sos un el mejor, ahora robale a tus papas la tarjeta de credito."} 
                             icon={JuegoTerminado}/>
             }
             
            
     );*/

    return (
        <div className={classes.rootImage}>
            <NavBar User={{ Name: 'Ale' }} />
            <CssBaseline />
            
            <NewDialog showDialog={props.showerWinner}
                setShowDialog={() => props.setShowWinner(!props.showerWinner)}
                title={"Palabras perdidas"}
                description={"!Oh, no!, Algunas palabras se han perdido, y no sabem como volver a sus oraciones. Ayudalas a volver a casa. Arrastra las palabras a las casillas en cada oracion."}
                icon={IconGame}>
                        <Button> Hola </Button>
            </NewDialog>
            
            <Container maxWidth="xl" className={classes.root} >
                <Grid container>
                    <Grid item xs={12} >
                        {props.children}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )

        ;

}