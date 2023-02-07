import { Box, Button, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useAction } from "../../hooks/useAction";
import { IUser } from "../../types/IUser";
import { useNavigate } from "react-router-dom";

const AddUser: FC = () => {
  const { addUser } = useAction();
  const [values, setValues] = useState<IUser>({
    img: "",
    name: "",
    lastName: "",
    phone: 0,
  });
  const handleSubmit = () => {
    if (!values.lastName && !values.name && !values.phone) {
      return;
    }
    addUser(values);
  };
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          color: "black",
        }}>
        <Box
          style={{
            width: "450px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: "20px",
          }}>
          <Typography variant="h4">Add Contact</Typography>
          <TextField
            style={{ padding: "5px" }}
            variant="outlined"
            label="Image"
            value={values.img}
            onChange={e => setValues({ ...values, img: e.target.value })}
          />
          <TextField
            style={{ padding: "5px" }}
            variant="outlined"
            label="Name"
            value={values.name}
            onChange={e => setValues({ ...values, name: e.target.value })}
          />
          <TextField
            style={{ padding: "5px" }}
            variant="outlined"
            label="LastName"
            value={values.lastName}
            onChange={e => setValues({ ...values, lastName: e.target.value })}
          />
          <TextField
            style={{ padding: "5px" }}
            variant="outlined"
            label="Number"
            value={values.phone}
            onChange={e => setValues({ ...values, phone: +e.target.value })}
          />
          <Button
            onClick={() => {
              handleSubmit();
              navigate("/");
            }}>
            Add{" "}
          </Button>
        </Box>
      </div>
    </>
  );
};

export default AddUser;
