import { Box, Chip, Tooltip } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
const MENU_STYLES = {
  color: "white",
  bgcolor: "transparent",
  border: "none",
  paddingX: "5px",
  borderRadius: "4px",
  ".MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    bgcolor: "primary.50",
  },
};
function BoardBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
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
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Tuan Xuong Dev"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add To Google Drive"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filter"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": {
              borderColor: "white",
            },
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={7}
          sx={{
            "& .MuiAvatar-root": {
              width: 34,
              height: 34,
              fontSize: 16,
              border: "none",
            },
          }}
        >
          <Tooltip title="TuanXuongDev">
            <Avatar
              alt="Remy Sharp"
              src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/164609743_1648106345577183_73062772476156740_n.jpg?stp=dst-jpg_s200x200&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGaZHziDzjfVfHoMSRcqkBm-lCvfEk7ZXv6UK98STtle2NaiiReLI42LZEG1AlTdi2xPXSr13L3fnN1VzD5_HRY&_nc_ohc=crFtjL8VFK0Q7kNvgHHtLde&_nc_ht=scontent.fhan14-1.fna&oh=00_AYDXOovwInBwCBUoAm9ckEij4DVcBp27RQ_rSe7309Sp8Q&oe=666FDB66"
            />
          </Tooltip>
          <Tooltip title="TuanXuongDev">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/id/20/367/267"
            />
          </Tooltip>
          <Tooltip title="TuanXuongDev">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/seed/picsum/200/300"
            />
          </Tooltip>
          <Tooltip title="TuanXuongDev">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/id/870/200/300?grayscale&blur=2"
            />
          </Tooltip>
          <Tooltip title="TuanXuongDev">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/200/300/?blur"
            />
          </Tooltip>
          <Tooltip title="TuanXuongDev">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/200/300?grayscale"
            />
          </Tooltip>
          <Tooltip title="TuanXuongDev">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/id/237/200/300"
            />
          </Tooltip>
          <Tooltip title="TuanXuongDev">
            <Avatar
              alt="Remy Sharp"
              src="https://picsum.photos/id/237/200/300"
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  );
}

export default BoardBar;
