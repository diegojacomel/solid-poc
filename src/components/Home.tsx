import { Component } from "solid-js";
import { Link } from "@solidjs/router";

export const Home: Component = () => {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </div>
  );
};
