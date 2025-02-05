'use client'

import React from "react";
import { useAbly, usePresence } from "@ably-labs/react-hooks";
import styles from "../styles/Home.module.css";

export default function Participants(props) {

  const ably = useAbly();
  const { connectionError, channelError, presenceData } = usePresence("headlines");

  if (connectionError) {
    console.log(connectionError);
  } else if (channelError) {
    console.log(channelError)
  } else {
    
  
  const presenceList = presenceData.map((member, index) => {
    const isItMe = member.clientId === ably.auth.clientId ? "(me)" : "";

    return (
      <li key={index} className={styles.participant}>
        <span className={styles.name}>{member.clientId}</span>
        <span className={styles.me}>{isItMe}</span>
      </li>
    );
  });
  
  return <ul>{presenceList}</ul>;
}
}
