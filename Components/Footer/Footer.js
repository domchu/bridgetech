import React from "react";
import Link from "next/link";
import Image from "next/image";
import action from "../../public/images/action.png";

const Footer = () => {
  return (
    <>
      <Link href="/">
        <Image src={action} className="brand-logo" alt="brand Logo" />
      </Link>
      {/* <h1>footer</h1> */}
    </>
  );
};

export default Footer;
