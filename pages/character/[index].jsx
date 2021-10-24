import React from "react";
import { useRouter } from "next/router";
import ContainerCharacterDetail from "components/ContainerCharacterDetail/ContainerCharacterDetail";

const CharacterInfo = () => {
  const router = useRouter();
  const { index } = router.query;

  return <ContainerCharacterDetail index={index} />;
};

export default CharacterInfo;
