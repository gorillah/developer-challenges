import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MachineList from "@/components/tables/machine";

export default function MainGrid() {
  return (
    <Box sx={{ width: "100%", maxWidth: { sm: "100%", md: "1700px" } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <MachineList />
    </Box>
  );
}
