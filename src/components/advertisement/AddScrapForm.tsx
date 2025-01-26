"use client";

import { useState } from "react";
import AddScrapFormStepOne from "./AddScrapFormStepOne";
import { AddScrapFormStepTow } from "./AddScrapFormStepTow";

export function AddScrapForm() {
  const [stepTow, setStepTow] = useState<boolean>(false);

  return (
    <>
      {!stepTow ? (
        <AddScrapFormStepOne setStepTow={setStepTow} />
      ) : (
        <AddScrapFormStepTow />
      )}
    </>
  );
}
