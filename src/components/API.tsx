import axios from "axios";
import { useEffect, useState } from "react";

// Define a type for the user object
interface User {
  id: number;
  name: string;
}

function API() {
  // Use the User[] type for the state to specify that it's an array of User objects
  const [user, setUser] = useState<User[]>([]);

  async function getData() {
    const res = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
    setUser(res.data); // Store only the data
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {user.map((item, index) => (
        <div key={index}>
          {item.name} {item.id}
        </div>
      ))}
    </>
  );
}

export default API;
