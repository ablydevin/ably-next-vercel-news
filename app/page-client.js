'use client'

import { AblyProvider } from "@ably-labs/react-hooks";
import Participants from "../components/Participants";

export default function Home(props) {
  return (
    <div>
      <main>
        <AblyProvider options={{ authUrl: `/api/createTokenRequest` }}>
            <Participants />
        </AblyProvider>
      </main>
    </div>
  );
}