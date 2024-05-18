import React from 'react';

import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Button } from '@mui/material';
import { BodyComponent } from '@darshanpatel2608/human-body-react';
import './App.css';


function App() {


  const [title, setTitle] = React.useState<any>("");
  const [open, setOpen] = React.useState(false);

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  const exampleParams = {
    head: { selected: true },
    left_arm: { selected: true, show: true },
    chest: { selected: true, show: true },
    stomach: { selected: true, show: true },
    left_hand: { selected: true, show: true },
    left_shoulder: { selected: true, show: true },
    left_leg_lower: { selected: true, show: true },
    left_foot: { selected: true, show: true },
    left_leg_upper: { selected: true, show: true },
    right_shoulder: { selected: true, show: true },
    right_leg_lower: { selected: true, show: true },
    right_foot: { selected: true, show: true },
    right_leg_upper: { selected: true, show: true },
    right_arm: { selected: true, show: true },
    right_hand: { selected: true, show: true },
  }

  React.useEffect(() => {
    if (title == "head") { setTitle("Head") }
    else if (title == "left_arm") { setTitle("Left Arm") }
    else if (title == "chest") { setTitle("Chest") }
    else if (title == "stomach") { setTitle("Stomech") }
    else if (title == "left_hand") { setTitle("Left Hand") }
    else if (title == "left_shoulder") { setTitle("Left Shoulder") }
    else if (title == "left_leg_lower") { setTitle("Left Leg Lower") }
    else if (title == "left_foot") { setTitle("Left Foot") }
    else if (title == "left_leg_upper") { setTitle("Left Leg Upper") }
    else if (title == "right_shoulder") { setTitle("Right Shoulder") }
    else if (title == "right_leg_lower") { setTitle("Right Leg Lower") }
    else if (title == "right_foot") { setTitle("Right Foot") }
    else if (title == "right_leg_upper") { setTitle("Right Leg Upper") }
    else if (title == "right_arm") { setTitle("Right Arm") }
    else if (title == "right_hand") { setTitle("Right Hand") }

  }, [title])


  const handleBodyClick = (e: any) => {
    setOpen(true);
    setTitle(e);
  }

  const ModalComponent = () => {
    return (
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <DialogContent dividers>
          {`You Clicked ${title}`}
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleClose}>
            ok
          </Button>
        </DialogActions>
      </BootstrapDialog>
    )
  }

  return (
    <div className="App">


      {ModalComponent()}
      <BodyComponent partsInput={exampleParams} mode='pain' onClick={handleBodyClick} />
      <span>Human Body</span>
    </div>
  );
}


export default App;
