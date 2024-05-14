import { Button, Typography } from "@mui/material";
import { Done, HomeMini, Settings } from "@mui/icons-material";
function App() {
  return (
    <>
      <Typography variant="body2" color="text.secondary">Test Typography</Typography>
      <p>Tuan Xuong Dev</p>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <HomeMini/>
      <Settings/>
      <Done/>
    </>
  );
}

export default App;
