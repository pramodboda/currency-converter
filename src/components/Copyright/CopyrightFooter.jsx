import React from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from "@mui/material/styles";

const socialData = [
  { name: "github", url: "https://github.com/pramodboda", icon: <FaGithub /> },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/pramodkumarboda/",
    icon: <FaLinkedin />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/pramodboda.dev/",
    icon: <FaInstagram />,
  },
  {
    name: "twitter",
    url: "https://x.com/pramodkumarboda",
    icon: <FaXTwitter />,
  },
];

function CopyrightFooter() {
  const theme = useTheme();
  return (
    <Box sx={{ color: "text.secondary" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="body2">
            Proudly based in Hyderabad, India
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2">Made by Pramod Boda</Typography>
        </Box>
        <Box>
          <Stack direction="row" spacing={1}>
            {socialData.map((social) => (
              <IconButton
                href={social.url}
                target="_blank"
                aria-label={social.name}
                size="small"
                color={theme.palette.mode === "dark" ? "primary" : "secondary"}
              >
                {social.icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default CopyrightFooter;