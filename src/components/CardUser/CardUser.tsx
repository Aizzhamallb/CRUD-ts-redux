import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks/useAction";

interface PropsItem {
  item: any;
}
const CardUser: FC<PropsItem> = ({ item }) => {
  const navigate = useNavigate();
  const { deleteUser, getUsers } = useAction();

  const handleDelete = async () => {
    await deleteUser(item.id);
    getUsers();
  };

  return (
    <Box sx={{ maxWidth: 275, margin: 20 }}>
      <Card variant="outlined">
        <CardContent>
          <CardMedia
            component="img"
            height="194"
            image={item.img}
            alt="Paella dish"
          />
          <Typography gutterBottom>
            {item.name} {item.lastName}
          </Typography>

          <Typography variant="h5" component="div">
            {item.phone}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleDelete}>delete</Button>
          <Button onClick={() => navigate(`/edit/${item.id}`)}>edit</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardUser;
