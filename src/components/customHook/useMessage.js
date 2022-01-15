import { useEffect, useState } from "react";

export default function useMessagesSocket({ user = "" }) {
  const [username, setUsername] = useState(user);

  const [socket, setSocket] = useState({ chatSocket: false });

  useEffect(() => {
    console.log("mounted");
  }, []);

  return socket;
}
