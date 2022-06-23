import React, { useEffect, useRef, useState } from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';
import { HelpOutline } from '@material-ui/icons';
import { Details, Main } from './components';
import CustomDialog from './components/CustomDialog/CustomDialog';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState(false);
  const { speechState } = useSpeechContext();
  const main = useRef(null)

  const executeScroll = () => main.current.scrollIntoView()

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  const handleHelpClick = () => { setOpenDialog(!openDialog) }

  return (
    <div>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
        </PushToTalkButtonContainer>
      </Grid>
      <Tooltip title="Help Me" placement="top" className={classes.tooltip}>
        <HelpOutline
          className={classes.helpIcon}
          onClick={handleHelpClick}
        />
      </Tooltip>
      <CustomDialog open={openDialog} setOpen={setOpenDialog} />
    </div>
  );
};


export default App;
