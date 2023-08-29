import Ably from "ably/promises";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

export default async function handler(req, res) {
  
  const client = new Ably.Rest(process.env.ABLY_SERVER_API_KEY);

  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, animals, colors],
    length: 2,
  });

  const tokenRequestData = await client.auth.createTokenRequest({
    clientId: randomName,
  });

  res.status(200).json(tokenRequestData);
}

// const clientId = req.body["clientId"] || process.env.DEFAULT_CLIENT_ID || "NO_CLIENT_ID";
//   const client = new Ably.Rest(process.env.ABLY_API_KEY);
//   const tokenRequestData = await client.auth.createTokenRequest({ clientId: clientId });

//   console.log(`ABLY TOKEN ${tokenRequestData}`)
  
//   return res.status(200).json(tokenRequestData)
