import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);
  return (
    //
    <>
      <Head>
        <title>Error | Not Found</title>
        <meta name="keywords" content="restAPI" />
      </Head>
      <div className="error-page"></div>
      <div className="go-back-your-home">
        <Link href="/">
          <a> Back To Your Home</a>
        </Link>
      </div>
    </>
  );
}
