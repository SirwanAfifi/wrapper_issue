import * as React from "react";
import { useMemo } from "react";
import { InfoWrapper } from "./components/InfoWrapper";

type PType = {
  data: {
    generalQuizDto: {
      quizDtos: [];
    };
  };
};

export const App = () => {
  const [participantsData, setParticipantsData] = React.useState<PType[]>([]);

  React.useEffect(() => {
    fetch("http://localhost:4000/api")
      .then((data) => data.json())
      .then((data) => setParticipantsData(data));
  }, []);

  const isGeneralExist = useMemo<boolean>(
    () => participantsData[0]?.data?.generalQuizDto?.quizDtos.length > 0,
    [participantsData]
  );

  return <InfoWrapper general={isGeneralExist} />;
};
