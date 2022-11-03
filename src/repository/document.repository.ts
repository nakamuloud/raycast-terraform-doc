import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export const fetchMarkdown = (url: string) => {
  const [doc, setUrl] = useState<string>();
  useEffect(() => {
    async function fetch(url: string) {
      const res: AxiosResponse = await axios.get(url).catch((error) => {
        console.log("Failed", error);
        throw new Error(error);
      });
      const doc = String(res.data);
      setUrl(doc);
    }
    fetch(url);
  }, [url, doc]);
  console.log(doc);
  return doc;
};
