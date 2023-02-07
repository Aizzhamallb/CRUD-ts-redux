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
  console.log(item);

  return (
    <>
      <div id="contact-card">
        <div>
          <img
            style={{ width: "65px", borderRadius: "50%", height: "65px" }}
            src={item.img}
            alt=""
          />
        </div>
        <div>
          <h4>
            {item.name} {item.lastName}
          </h4>
        </div>
        <div>
          <h4>{item.phone}</h4>
        </div>
        <div>
          <h4>{item.gender}</h4>
        </div>

        <button className="btn-card" onClick={handleDelete}>
          Delete
        </button>
        <button
          className="btn-card"
          onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </button>
      </div>
    </>
    // <Box sx={{ maxWidth: 275, margin: 20, display: "flex" }}>
    //   <Card variant="outlined">
    //     <CardContent>
    //       <CardMedia
    //         component="img"
    //         height="194"
    //         image={item.img}
    //         alt="ONDOOO"
    //       />
    //       <Typography variant="h5" component="div">
    //         {item.name} {item.lastName}
    //       </Typography>
    //       <Typography gutterBottom>{item.phone}</Typography>
    //       <Typography variant="h5" component="div">
    //         {item.gender}
    //       </Typography>
    //     </CardContent>
    //     <CardActions>
    //       <Button onClick={handleDelete}>delete</Button>
    //       <Button onClick={() => navigate(`/edit/${item.id}`)}>edit</Button>
    //     </CardActions>
    //   </Card>
    // </Box>
  );
};

export default CardUser;
