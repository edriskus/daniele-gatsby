import { useState, useCallback } from "react";

interface Variables {
  name: string;
  email: string;
  message: string;
}

type Bundle<T = any> = [
  (options: Variables) => Promise<void>,
  { data: T; loading: boolean }
];

export function useSendEmail(): Bundle {
  const [data, setData] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const doFetch = useCallback(async ({ name, email, message }: Variables) => {
    try {
      setLoading(true);
      await fetch(
        `https://maker.ifttt.com/trigger/krauze_contact/with/key/6xcNcK2H1fjFsXQM19LAa?value1=${encodeURIComponent(
          name
        )}&value2=${encodeURIComponent(email)}&value3=${encodeURIComponent(
          message
        )}`,
        {
          method: "GET",
          mode: "no-cors"
        }
      );
      setData(true);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }, []);

  return [doFetch, { data, loading }];
}
