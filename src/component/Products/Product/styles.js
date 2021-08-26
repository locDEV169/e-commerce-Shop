import { makeStyles } from "@material-ui/styles";

export default makeStyles(() => ({
    root:{
        maxWidth: '100%',
        borderRadius: 20,
    },
    media:{
        height: 200,
        margin: 20,
        //padding:'56,25%',
    },
    cardActions:{
        display: 'flex',
        justifyContent:'flex-end',
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between',
    },

}));