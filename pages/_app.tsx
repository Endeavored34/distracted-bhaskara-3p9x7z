import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { apiService } from "../src/axiosInit";

function MyApp({ Component, pageProps }: AppProps) {
  const [response, setResponse] = useState("");
  const requestExample = async () => {
    const { data } = await apiService.loginUser("username", "passsword");
    console.log(data);
    setResponse(data);
  };
  useEffect(() => {
    requestExample();
  }, []);

  return (
    <div>
      {response ? (
        <div>
          <p>response received</p>
          <pre>{JSON.stringify(response, null, "\t")}</pre>
        </div>
      ) : (
        <div>no response</div>
      )}

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
