import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import {useDispatch} from 'react-redux'
// import { toggleShareModal } from '../features/shareModalSlice';
import FolderIcon from '@mui/icons-material/Folder';
import LinkIcon from '@mui/icons-material/Link';
import InputAdornment from '@mui/material/InputAdornment';
import { FormControl } from '@mui/material';

interface ModalShareProps{
  event: {
      id: number;
      name: string;
      date: string;
      location: string;
      image: string;
      desc: string;
  },
  open: boolean, 
  handleClose: () => void;
}

const ModalShare: React.FC<ModalShareProps> = ({event, open, handleClose}) => {
  // const dispatch = useDispatch()
  // const handleClose = () => {
  //   dispatch(toggleShareModal(false))
  // }

  return (
    <div>
      {/* <Dialog open={open}> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Share <b>{event.name}</b> event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {event.desc}
          </DialogContentText>
          {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}> */}
            <FormControl fullWidth>
              <TextField
                id="outlined-start-adornment"
                sx={{ mt: 1}}
                defaultValue={`http://localhost:3000/${event.id}`}
                size='small'
                InputProps={{
                  startAdornment: <InputAdornment position="start"><LinkIcon /></InputAdornment>,
                }}
              />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="outlined-start-adornment"
                sx={{ mt: 1}}
                defaultValue={`https://drive.google.com/drive/u/0/folders/1MZKZl_Z3CFZareGLA-nw8qieYMv5vavy`}
                size='small'
                InputProps={{
                  startAdornment: <InputAdornment position="start"><FolderIcon /></InputAdornment>,
                }}
              />
            </FormControl>
          {/* </Box> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalShare