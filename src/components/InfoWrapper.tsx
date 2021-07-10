import * as React from "react";

type InforWrapper = { general: boolean };
export const InfoWrapper = ({
  general,
}: React.PropsWithChildren<InforWrapper>) => {
  return <div>{general ? "Generated Enabled" : "Not Selected"}</div>;
};
