import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import {useDispatch} from 'react-redux'
// import { toggleShareModal } from '../features/shareModalSlice';
import FolderIcon from "@mui/icons-material/Folder";
import LinkIcon from "@mui/icons-material/Link";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl } from "@mui/material";

interface ModalShareProps {
  event: {
    id: number;
    name: string;
    date: string;
    location: string;
    image: string;
    desc: string;
    drive: string;
  };
  open: boolean;
  handleClose: () => void;
}

const ModalShare: React.FC<ModalShareProps> = ({
  event,
  open,
  handleClose,
}) => {
  // const dispatch = useDispatch()
  // const handleClose = () => {
  //   dispatch(toggleShareModal(false))
  // }

  const [copySuccess, setCopySuccess] = React.useState(false);
  const [copySuccessMsg, setCopySuccessMsg] = React.useState("");

  const handleCopyClick = (copiedLink: string, typeLink: string) => {
    navigator.clipboard
      .writeText(copiedLink)
      .then(() => {
        setCopySuccess(true);
        if (typeLink === "url") {
          setCopySuccessMsg("Event link copied to clipboard!");
        } else {
          setCopySuccessMsg("Google Drive link copied to clipboard!");
        }
        setTimeout(() => setCopySuccess(false), 3000);
      })
      .catch((error) => {
        console.error("Copy failed:", error);
      });
  };

  return (
    <div>
      {/* <Dialog open={open}> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Share <b>{event.name}</b> event
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Click on icon below to copy the link and share the event!
          </DialogContentText>
          {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}> */}
          <FormControl fullWidth>
            <TextField
              id="outlined-start-adornment"
              sx={{ mt: 1 }}
              defaultValue={`http://localhost:3000/gallery/${event.id}`}
              size="small"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment
                    position="start"
                    onClick={() =>
                      handleCopyClick(
                        `http://localhost:3000/${event.id}`,
                        "url"
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <LinkIcon />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl fullWidth>
            <TextField
              id="outlined-start-adornment"
              sx={{ mt: 1 }}
              defaultValue={event.drive}
              size="small"
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment
                    position="start"
                    onClick={() => handleCopyClick(event.drive, "drive")}
                    style={{ cursor: "pointer" }}
                  >
                    <FolderIcon />
                  </InputAdornment>
                ),
              }}
            />
            {copySuccess && (
              <span style={{ color: "green", fontSize: "0.8rem" }}>
                {copySuccessMsg}
              </span>
            )}
          </FormControl>
          {/* </Box> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalShare;
