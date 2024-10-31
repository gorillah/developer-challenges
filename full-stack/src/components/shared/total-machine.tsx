import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import Settings from "@mui/icons-material/Settings";

interface TotalMachinesProps {
  totalMachines: number;
}

const TotalMachines: React.FC<TotalMachinesProps> = ({ totalMachines }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        textAlign: "center",
        p: 2,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Settings fontSize="large" sx={{ mr: 2 }} />
      <CardContent>
        <Typography variant="h5" component="div">
          Total Machines
        </Typography>
        <Typography variant="h4" color="primary" component="p">
          {totalMachines}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TotalMachines;
