import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, href: "/dashboard" },
  {
    text: "Machine Management",
    icon: <AnalyticsRoundedIcon />,
    href: "/dashboard/machine-management",
  },
  {
    text: "Monitoring Points",
    icon: <PeopleRoundedIcon />,
    href: "/dashboard/monitoring",
  },
  {
    text: "Sensors",
    icon: <AssignmentRoundedIcon />,
    href: "/dashboard/sensors",
  },
];

export default function MenuContent() {
  const pathname = usePathname();

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link
              href={item.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItemButton selected={pathname === item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
