import { Box } from "@mui/material";
function BoardContent() {
  return (
    <Box
      sx={{
        height: (theme) =>
          `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingX: 2,
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderBottom: "1px solid white",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
      }}
    >
      Board Content
    </Box>
  );
}

export default BoardContent;
