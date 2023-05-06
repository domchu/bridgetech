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
    }, 5000);
  }, []);

  return (
    <>
      <Box className="not-found">
        <Box>
          <h2>Oooops</h2>
        </Box>
        <Box>
          <h3>That page cannot be found</h3>
        </Box>
        <Box>
          Go back to the <Link href="/">Home page</Link>
        </Box>
      </Box>
    </>
  );
};

export default NotFound;
