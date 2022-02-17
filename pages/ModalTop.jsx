import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ModalTop({ open, Close }) {
  return (
    <Modal
      open={open}
      onClose={Close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          CPU Status
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          317 root 20 0 1666316 182768 101348 S 7.6 1.1 3:24.50 Xorg 4036 psycho
          20 0 622944 43780 31860 S 4.0 0.3 0:02.02 io.elementary.t 5586 psycho
          20 0 16.750g 341132 182400 S 1.3 2.1 1:17.91 chrome 2574 mongodb 20 0
          1589080 111896 51880 S 0.7 0.7 0:14.22 mongod 13416 psycho 20 0 69464
          4604 3704 R 0.7 0.0 0:00.13 top 11 root 20 0 0 0 0 I 0.3 0.0 0:03.04
          rcu_sched 2249 root 20 0 1721132 44416 30172 S 0.3 0.3 0:05.64
          containerd 4208 psycho 20 0 1318752 97864 45508 S 0.3 0.6 0:03.22
          io.elementary.a 5647 psycho 20 0 16.419g 51732 39384 S 0.3 0.3 0:00.34
          chrome 7540 psycho 20 0 40.612g 142476 93392 S 0.3 0.9 0:05.50 code
          12426 psycho 20 0 24.514g 168996 105840 S 0.3 1.0 0:06.05 chrome 1
          root 20 0 211508 9896 6860 S 0.0 0.1 0:02.90 systemd 2 root 20 0 0 0 0
          S 0.0 0.0 0:00.00 kthreadd 3 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_gp
          4 root 0 -20 0 0 0 I 0.0 0.0 0:00.00 rcu_par_gp 6 root 0 -20 0 0 0 I
          0.0 0.0 0:00.00 kworker/0:0H-kb 9 root 0 -20 0 0 0 I 0.0 0.0 0:00.00
          mm_percpu_wq 10 root 20 0 0 0 0 S 0.0 0.0 0:00.25 ksoftirqd/0 12 root
          rt 0 0 0 0 S 0.0 0.0 0:00.03 migration/0 13 root -51 0 0 0 0 S 0.0 0.0
          0:00.00 idle_inject/0 14 root 20 0 0 0 0 S 0.0 0.0 0:00.00 cpuhp/0 15
          root 20 0 0 0 0 S 0.0 0.0 0:00.00 cpuhp/1 16 root -51 0
        </Typography>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button onClick={Close} className="btn btn-danger mt-2 text-center">Close</Button>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ModalTop;
