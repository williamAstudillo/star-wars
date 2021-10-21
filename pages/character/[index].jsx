import React from "react";
import { useRouter } from "next/router";
import CharacterDetail from "components/CharacterDetail/CharacterDetail";

const CharacterInfo = () => {
  const router = useRouter();
  const { index } = router.query;

  return (
    <>
      <CharacterDetail index={index} />
    </>
  );
};

export default CharacterInfo;
