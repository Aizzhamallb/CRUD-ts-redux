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
    gender: "",
  });
  const handleSubmit = () => {
    if (
      !values.img &&
      !values.lastName &&
      !values.name &&
      !values.phone &&
      !values.gender
    ) {
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
          <br />

          <label htmlFor="gender" style={{ fontSize: "18px" }}>
            Choose your gender:
          </label>

          <select
            style={{
              width: "115px",
              height: "45px",
              borderRadius: "3px",
              marginTop: "7px",
            }}
            value={values.gender}
            onChange={e => setValues({ ...values, gender: e.target.value })}
            name="gender"
            id="gender">
            <option
              value="male"
              style={{ alignItems: "center", marginLeft: "3px" }}>
              Male
            </option>
            <option
              value="female"
              style={{ alignItems: "center", marginLeft: "3px" }}>
              Female
            </option>
          </select>

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
