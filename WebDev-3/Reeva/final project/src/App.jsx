import { useState } from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Incentives from "./incentives";
import Testimonials from "./testimonials";
import Categories from "./categories";
import SkinCare from "./skincare";
import HairCare from "./haircare";
import Perfume from "./perfumes";

export default function App() {
  const [page, setPage] = useState("home");
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar setPage={setPage} cartCount={cartCount} />

      {page === "home" && (
        <>
          <Hero />
          <Incentives />
          <Testimonials />
          <Categories setPage={setPage} />
        </>
      )}

      {page === "skin" && (
        <SkinCare cartCount={cartCount} setCartCount={setCartCount} />
      )}

      {page === "hair" && (
        <HairCare cartCount={cartCount} setCartCount={setCartCount} />
      )}

      {page === "perfume" && (
        <Perfume cartCount={cartCount} setCartCount={setCartCount} />
      )}
    </>
  );
}
