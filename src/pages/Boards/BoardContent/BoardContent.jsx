import { Box } from "@mui/material";
import ListColumns from "./ListColumns/ListColumns";
import { mapOrder } from "~/utils/sorts";
import { DndContext } from "@dnd-kit/core";

function BoardContent({ board }) {
  const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  const handleDragEnd = (event) => {
    console.log("handleDragEnd", event);
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box
        sx={{
          height: (theme) => theme.trello.boardContentHeight,
          width: "100%",
          display: "flex",
          paddingX: 2,
          justifyContent: "space-between",
          gap: 2,
          overflowX: "auto",
          overflowY: "hidden",
          borderBottom: "1px solid white",
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#1976d2",
          p: "10px 0",
        }}
      >
        <ListColumns columns={orderedColumns} />
      </Box>
    </DndContext>
  );
}

export default BoardContent;
