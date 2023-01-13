import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import useLinkedin from "./useLinkedIn";

const Home: NextPage = () => {
  const [linkedInState, setLinkedInState] = useState<any>(null);

  const login = useCallback(() => {
    const loginProfile = async () => {
      fetch("http://localhost:3000/auth/linkedin", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
        .then((resp) => resp.json())
        .then((res) => window.open(res.authorize_url))
        .catch((e) => console.log({ e }));
    };
    loginProfile();
  }, []);
  return (
    <div className={styles.container}>
      <h1>LinkedIn Auth</h1>
      <p>{JSON.stringify(linkedInState)}</p>
      <button onClick={() => login()}>LinkedIn Auth</button>
    </div>
  );
};

export default Home;
