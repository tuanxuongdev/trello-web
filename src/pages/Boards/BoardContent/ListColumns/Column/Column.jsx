import { Menu, MenuItem } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ContentCut from "@mui/icons-material/ContentCut";
import Cloud from "@mui/icons-material/Cloud";
import { ExpandMoreOutlined } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddCardIcon from "@mui/icons-material/AddCard";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import React from "react";
import ListCard from "./ListCards/ListCard";
import { mapOrder } from "~/utils/sorts";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Column({ column }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: column._id, data: { ...column } });

  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const orderedCards = mapOrder(column?.cards, column?.cardOrderIds, "_id");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
      sx={{
        minWidth: "300px",
        maxWidth: "300px",
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#333643" : "#ebecf0",
        ml: 2,
        borderRadius: "6px",
        height: "fit-content",
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
      }}
    >
      {/* Box Column Header*/}
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          {column?.title}
        </Typography>
        <Box>
          <Tooltip title="More options">
            <ExpandMoreOutlined
              sx={{ color: "text.primary", cursor: "pointer" }}
              id="basic-column-dropdown"
              aria-controls={open ? "basic-menu-column-dropdown" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-workspaces"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-column-dropdown",
            }}
          >
            <MenuItem>
              <ListItemIcon>
                <AddCardIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Add new card</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCut fontSize="small" />
              </ListItemIcon>
              <ListItemText>Cut</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentCopyIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Copy</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <ContentPasteIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Paste</ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem>
              <ListItemIcon>
                <DeleteForeverIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Remote this column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Cloud fontSize="small" />
              </ListItemIcon>
              <ListItemText>Archive this column</ListItemText>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      {/* Box Column List Card*/}
      <ListCard cards={orderedCards} />
      {/* Box Column Footer*/}
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button startIcon={<AddCardIcon />}>Add new card</Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: "pointer" }} />
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Column;
