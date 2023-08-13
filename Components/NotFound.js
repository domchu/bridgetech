import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 7000);
  }, []);

  return (
    <>
      <Box className="not-found">
        <Box>
          <h2>Oooops</h2>
        </Box>
        <Box>
          <h3>Error 404</h3>
          <h3>That page cannot be found in bridgekode website. Please!!!</h3>
        </Box>
        <Box>
          Go back to the
          <Link href="/" className="router-back-home">
            Home page
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
