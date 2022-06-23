import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    dialogContent: {
        margin: "1em auto"
    },
    title: {
        '&>*': {
            display: "flex",
            alignItems: "center",
        }
    },
    happyFaceIcon: {
        marginLeft: "0.5em",
    },
    info: {
        fontStyle: "italic",
        color: "#606060"
    }
}));
