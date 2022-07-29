import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import useLinkedin from "./useLinkedIn";

const Home: NextPage = () => {
  const { authorizationCodeUrl } = useLinkedin();

  const [linkedInState, setLinkedInState] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      fetch("http://localhost:3000/profile", {
        method: "GET",
        credentials: "include",
      })
        .then((resp) => resp.json())
        .then((resp) => setLinkedInState(resp))
        .catch((e) => console.log(e));
    };
    fetchProfile();
  }, []);

  const logout = useCallback(() => {
    const logoutProfile = async () => {
      fetch("http://localhost:3000/logout", {
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        method: "POST",
        credentials: "include",
        body: "",
      })
        .then((resp) => resp.json())
        .then(() => setLinkedInState(null))
        .catch((e) => console.log({ e }));
    };
    logoutProfile();
  }, []);
  return (
    <div className={styles.container}>
      <h1>LinkedIn Auth</h1>
      <p>{JSON.stringify(linkedInState)}</p>
      <button onClick={() => window.open(authorizationCodeUrl)}>
        LinkedIn Auth
      </button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
};

export default Home;
