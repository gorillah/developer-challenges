import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux-hook";
import {
  deleteMachine,
  Machine,
} from "@/lib/store/features/machine/machineSlice";
import { Button, Table, TableBody, TableCell, TableRow, Box, Typography } from "@mui/material";

const MachineList = () => {
  const dispatch = useAppDispatch();
  const machines = useAppSelector((state) => state.machines.machines);

  const handleDelete = (id: string) => {
    dispatch(deleteMachine(id));
  };

  if (machines.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          No machines found
        </Typography>
        <Button variant="contained" color="primary">
          Add New Machine
        </Button>
      </Box>
    );
  }

  return (
    <Table>
      <TableBody>
        {machines.map((machine: Machine) => (
          <TableRow key={machine.id}>
            <TableCell>{machine.name}</TableCell>
            <TableCell>{machine.type}</TableCell>
            <TableCell>
              <Button onClick={() => handleDelete(machine.id)}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MachineList;
