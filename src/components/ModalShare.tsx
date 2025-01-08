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

import { CardMedia, Chip, FormControl, Stack, Typography } from "@mui/material";
import { formatToIDR } from "../utils/idrFormatter";

interface ModalShareProps {
  event: {
    id: number;
    name: string;
    imageSrc: string;
    price: number;
    recPrior: number;
    menuType: string;
    categories: string[];
    productDetail: string;
    variants?: {
      name: string;
      add: number | 0;
    }[];
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

  const categories = event.categories || [];
  const price = event.price || 0;

  return (
    <div>
      {/* <Dialog open={open}> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <b>{event.name}</b> Detail Menu
        </DialogTitle>
        <DialogContent>
          <CardMedia
            component="img"
            sx={{ marginBottom: 2 }}
            height="140"
            image={`/img/products/${event.menuType}/${event.imageSrc}`}
            alt={event.name}
          />
          <DialogContentText sx={{ marginBottom: 2 }}>
            {event.productDetail}
          </DialogContentText>
          <DialogContentText sx={{ fontWeight: "bold", color: "#902D24" }}>
            Harga
          </DialogContentText>
          <DialogContentText
            sx={{
              marginBottom: 2,
              marginTop: 0.5,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {formatToIDR(price)}
          </DialogContentText>
          <DialogContentText sx={{ fontWeight: "bold", color: "#902D24" }}>
            Kategori & Penyajian
          </DialogContentText>
          {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}> */}

          <Stack direction="row" spacing={1} sx={{ marginTop: 1 }}>
            <Chip
              label={event.menuType}
              variant="outlined"
              sx={{
                textTransform: "capitalize",
                // Add other styles here if needed
              }}
            />
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                variant="outlined"
                sx={{
                  textTransform: "capitalize",
                  // Add other styles here if needed
                }}
              />
            ))}
          </Stack>

          {/* </Box> */}
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: "#460000" }} onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ModalShare;
