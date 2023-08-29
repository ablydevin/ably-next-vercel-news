'use client'

import React from "react";
import { useAbly, useChannel, usePresence } from "@ably-labs/react-hooks";

export default function Participants() {

  const ably = useAbly();
  const {channel} = useChannel('asdasd')
  //usePresence("asdasdsd")//, "", (member) => {
  //   return (
  //       <li key={member.id}>{member.clientId}</li>
  //   )
  // });

  // const presenceList = presenceData.map((member) => {
  //   //const isItMe = member.clientId === ably.auth.clientId ? "(me)" : "";

  //   return (
  //     <li>
  //       <span>{member.clientId}</span>
  //       {/* <span>{isItMe}</span> */}
  //     </li>
  //   );
  // });
  
  return (
    <ul>          
    </ul>
  )
}

