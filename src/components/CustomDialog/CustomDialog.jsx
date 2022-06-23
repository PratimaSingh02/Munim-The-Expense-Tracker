import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Mood from '@material-ui/icons/Mood';
import accordionData from './constant';
import useStyle from './style';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomDialog({ open, setOpen }) {
    const classes = useStyle();
    const handleClose = () => { setOpen(false) }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
        >
            <DialogTitle className={classes.title}>
                {"Some sample commands you can try"}
                <Mood className={classes.happyFaceIcon} />
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                {
                    accordionData.map((data, index) => (<Accordion key={index}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}a-content`}
                            id={`panel${index}a-content`}
                        >
                            <Typography>{data.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.info}>
                                {data.info}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>))
                }
            </DialogContent>
        </Dialog>
    )
}
