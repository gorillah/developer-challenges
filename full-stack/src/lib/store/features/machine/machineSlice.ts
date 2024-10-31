import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Machine {
  id: string;
  name: string;
  type: "Pump" | "Fan";
}

interface MachineState {
  machines: Machine[];
}

const initialState: MachineState = {
  machines: [],
};

const machineSlice = createSlice({
  name: "machines",
  initialState,
  reducers: {
    addMachine: (state, action: PayloadAction<Machine>) => {
      state.machines.push(action.payload);
    },
    updateMachine: (state, action: PayloadAction<Machine>) => {
      const index = state.machines.findIndex((m) => m.id === action.payload.id);
      if (index >= 0) state.machines[index] = action.payload;
    },
    deleteMachine: (state, action: PayloadAction<string>) => {
      state.machines = state.machines.filter((m) => m.id !== action.payload);
    },
  },
});

export const { addMachine, updateMachine, deleteMachine } =
  machineSlice.actions;
export const machineReducer = machineSlice.reducer;
