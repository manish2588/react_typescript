import { useEffect, useRef } from "react";

function Scroll() {
  const scrollRef = useRef(0); // Store scroll position without causing re-renders
  
  console.log("Rendering")
  const handleScroll = () => {
    scrollRef.current = window.scrollY; // Update ref value
    // Only update state when you need to reflect changes in the UI
    console.log(scrollRef.current)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup event listener
    };
  }, []);

  return (
    <>
      <div style={{ backgroundColor: "blue", height: "1500px" }}>
        <h1>Scroll and Window Event:</h1>
      </div>
    </>
  );
}

export default Scroll;
