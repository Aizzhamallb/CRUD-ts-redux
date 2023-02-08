import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { useAction } from "../../hooks/useAction";

const TopSideBar = () => {
  const { getUsers } = useAction();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchByParams = async (query: string, value: any) => {
    const search = new URLSearchParams(location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
    getUsers();
  };

  return (
    <div>
      <FormControl
        sx={{
          m: 1,
          minWidth: 200,
          border: "2px solid white ",
          backgroundColor: "white",
          opacity: "90%",
          borderRadius: "5px",
        }}
        size="small">
        <InputLabel id="demo-select-small">Gender</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          label="Gender"
          onChange={e => fetchByParams("gender", e.target.value)}>
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default TopSideBar;
