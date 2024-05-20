import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupIcon from "@mui/icons-material/Group";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CommentIcon from "@mui/icons-material/Comment";
import { Button, Typography } from "@mui/material";

function Card({ temporaryHideMedia }) {
  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
          overflow: "unset",
        }}
      >
        <CardContent
          sx={{
            p: 1.5,
            "&:last-child": {
              p: 1.5,
            },
          }}
        >
          <Typography>Card test 01</Typography>
        </CardContent>
      </MuiCard>
    );
  }
  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.2)",
        overflow: "unset",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://scontent.fhan14-3.fna.fbcdn.net/v/t31.18172-8/23213227_664448510609643_4108551195597408808_o.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGP72Zt421IQyI-V0F4yKZiC_s9XJlMsVcL-z1cmUyxV6FeH86dh6MFSG8W9a7RB1MpxvBV716e2c2jsNxdzw7K&_nc_ohc=KJjvAwpEa44Q7kNvgHdkhY9&_nc_ht=scontent.fhan14-3.fna&oh=00_AYBDBoe4jhMA1qn4o2-N8F5DVRnmY7N4VJz2RSklFtUYfQ&oe=6671B32F"
        title="green iguana"
      />
      <CardContent
        sx={{
          p: 1.5,
          "&:last-child": {
            p: 1.5,
          },
        }}
      >
        <Typography>Tuan Xuong Dev</Typography>
      </CardContent>
      <CardActions sx={{ p: "0 4px 8px 4px" }}>
        <Button size="small" startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<CommentIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<AttachmentIcon />}>
          20
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;
