import axios, { AxiosInstance } from "axios";
import { useEffect, useState } from "react";

// Define a type for the user object
interface User {
  id: number;
  name: string;
}

// Create a custom Axios instance
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Set the base URL
  timeout: 10000, // Optional timeout for requests
  headers: {
    "Content-Type": "application/json", // Optional headers (e.g., JSON)
  },
});

function API() {
  // Use the User[] type for the state to specify that it's an array of User objects
  const [user, setUser] = useState<User[]>([]);

  // Refactor to use the axios instance
  async function getData() {
    try {
      const res = await apiClient.get<User[]>("/users"); // Use the instance for the request
      setUser(res.data); // Store the response data in the state
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []); // Run once on component mount

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
