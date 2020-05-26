import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		padding: '1rem'
	},
	TitleH2: {
		fontSize: '1.5rem',
		padding: '.5rem',
		textAlign: 'center',
		'@media (min-width: 768px)': {
			fontSize: '2rem',
			padding: '1rem'
		}
    },
    text: {
		fontSize: '1.3rem',
		padding: '.3rem',
		textAlign: 'center',
		'@media (min-width: 300px)': {
			fontSize: '1.5rem',
			padding: '1rem'
		}
	},
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	paper: {
		margin: '0px',
		display: 'flex',
		justifyContent: 'center',
		height: '100%',
		width: '100%'
	},
	paperScrollPaper: {
		maxHeight: 'unset',
		height: '100%',
		width: '100vw'
	},
	buttom: {
		fontSize: '1.5rem',
		fontWeight: 'bold',
		/* TABLET */
		'@media (min-width: 768px)': {
			fontSize: '2rem'
		}
    },
    logo:{
        height: '15vh',
        width: '15vw',
        paddingTop:'1rem'
    },
    label:{
        maxHeight:'100px'
    }
});

export default useStyles;