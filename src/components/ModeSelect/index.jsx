import { useColorScheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import { Box } from "@mui/material";

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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <LightModeIcon /> Light
          </Box>
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

export default SelectMode;
