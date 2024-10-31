import React, { useState } from "react";
import { useAppDispatch } from "@/lib/hooks/redux-hook";
import { addMachine } from "@/lib/store/features/machine/machineSlice";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const AddMachineForm = () => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState<"Pump" | "Fan">("Pump");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addMachine({ id: Date.now().toString(), name, type }));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Machine Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormControl>
        <InputLabel>Type</InputLabel>
        <Select
          value={type}
          onChange={(e) => setType(e.target.value as "Pump" | "Fan")}
        >
          <MenuItem value="Pump">Pump</MenuItem>
          <MenuItem value="Fan">Fan</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained">
        Add Machine
      </Button>
    </form>
  );
};

export default AddMachineForm;
