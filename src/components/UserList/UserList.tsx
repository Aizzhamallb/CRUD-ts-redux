import { useEffect } from "react";
import { useAction } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import CardUser from "../CardUser/CardUser";

const UserList = () => {
  const { getUsers } = useAction();
  const { error, loading, user } = useTypedSelector(state => state.userReducer);
  // const [filtred, setFiltred] = useState("");
  // const submitHandler = (e: any) => {
  //   e.preventDefault();
  //   console.log(filtred);
  // };
  useEffect(() => {
    getUsers();
  }, []);
  if (loading) {
    return <h1>Loading....</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}>
      {user?.map(item => (
        <CardUser key={item.id} item={item} />
      ))}
    </div>
  );
};

export default UserList;
