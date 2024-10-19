import { Button } from "@/components/UI";
import { UserInformationForm } from "@/forms";
import { useState } from "react";

export const Profile = () => {
  const [mode, setMode] = useState<"preview" | "edit">("preview");
  return (
    <div className="w-full p-2.5">
      <div className="w-full">
        <h2 className="h2-bold text-center w-full p-3.5">پروفایل</h2>
        <div className="w-full flex justify-end p-3.5">
          <Button
            type="info"
            className="p-2.5"
            onClick={() =>
              setMode((mode) => (mode === "edit" ? "preview" : "edit"))
            }
          >
            {mode === "edit" ? "لغو تغییرات" : "تغییر اطلاعات"}
          </Button>
        </div>
        <UserInformationForm mode={mode} />
      </div>
    </div>
  );
};
