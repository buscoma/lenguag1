import { makeStyles } from '@material-ui/core/styles';

const paper = {
    opacity: 0.85,
};

const useStylesPaper =  makeStyles({
    root : {
        opacity: 0.85,
        padding: "20px",
    },
});

const useStyleTypografy = makeStyles({
    root:{
        textAlign: "center",
    }
});

export  {
    useStylesPaper,
    useStyleTypografy
};
