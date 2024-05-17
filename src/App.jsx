import { Box, Container } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
function SelectMode() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value={"light"}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightModeIcon /> Light
          </div>
        </MenuItem>
        <MenuItem value={"dark"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <DarkModeIcon /> Dark
          </Box>
        </MenuItem>
        <MenuItem value={"system"}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <SettingsBrightnessIcon /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function App() {
  return (
    <>
      <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
        <Box
          sx={{
            backgroundColor: "primary.light",
            width: "100%",
            height: (theme) => theme.trello.appBarHeight,
            display: "flex",
            alignItems: "center",
          }}
        >
          <SelectMode />
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.dark",
            width: "100%",
            height: (theme) => theme.trello.boardBarHeight,
            display: "flex",
            alignItems: "center",
          }}
        >
          Board Bar
        </Box>
        <Box
          sx={{
            backgroundColor: "primary.main",
            height: (theme) =>
              `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          Board Content
        </Box>
      </Container>
    </>
  );
}

export default App;
