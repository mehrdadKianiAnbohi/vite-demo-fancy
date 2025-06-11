import React, { useState } from "react";
import { Button, Modal, DatePicker } from "@kianianbohi/fancy";
import "@kianianbohi/fancy/dist/index.css";

import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="text-2xl bg-blue-500"
      >
        Pick a date!
      </Button>
      <Modal isOpen={open} onOpenChange={setOpen} title={"modal"}>
        <DatePicker />
      </Modal>
    </div>
  );
}

export default App;
