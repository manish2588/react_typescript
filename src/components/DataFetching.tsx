import axios, { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import Cart from "./Cart";

const apiClient: AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Set the base URL
  timeout: 10000, // Optional timeout for requests
  headers: {
    "Content-Type": "application/json", // Optional headers (e.g., JSON)
  },
});

const apiClient1: AxiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Set the base URL
  timeout: 10000, // Optional timeout for requests
  headers: {
    "Content-Type": "application/json", // Optional headers (e.g., JSON)
  },
});

type PhotoType = {
  id: number;
  title: string;
  url: string;
};

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

interface Cart {
  id: number;
  products: Product[];
}

interface CartResponse {
  carts: Cart[];
}

function DataFetching() {
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [cart, setCart] = useState<CartResponse>({ carts: [] }); // Correct initialization

  const fetchPhotos = async () => {
    try {
      const res = await apiClient.get<PhotoType[]>("/photos");
      console.log(res);
      setPhotos(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const cartFetching = async () => {
    try {
      const res = await apiClient1.get<CartResponse>("/carts");
      console.log(res.data);
      setCart(res.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
     fetchPhotos();
    cartFetching();
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      {photos && (
        <div>
          {photos.slice(0, 10).map((photo, index) => (
            <div key={index}>
              <h1>{photo.title}</h1>
              <div>
                <img src={photo.url} alt="alt" />
              </div>
            </div>
          ))}
        </div>
      )}
      <br />

      <div>
        {cart.carts.length > 0 ? (
          cart.carts.slice(0,2).map((cartItem, index) => (
            <div key={index}>
              <h1>{cartItem.id}</h1>
              {cartItem.products.map((product, index) => (
                <div key={index}>
                <Cart title={product.title} url={product.thumbnail}/>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No carts available</p>
        )}
      </div>
    </div>
  );
}

export default DataFetching;
