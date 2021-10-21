import React from "react";
import { useRouter } from "next/router";

const CharacterInfo = () => {
  const router = useRouter();
  const { name } = router.query;

  return <div>{name}</div>;
};

export default CharacterInfo;
