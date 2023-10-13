"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import github from "./assets/GitHub.png";
import gitlab from "./assets/gitlab.png";
import bitBucket from "./assets/bitbucket.jpg";
import jira from "./assets/jira.jpg";
export default function Home() {
  const [buttons, setButtons] = useState([
    { name: "GitHub", icon: github, route: "/github" },
    { name: "GitLab", icon: gitlab, route: "/gitlab" },
    { name: "Bitbucket", icon: bitBucket, route: "/bitbucket" },
    { name: "Jira", icon: jira, route: "/jira" },
  ]);
  return (
    <div className="button-card">
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
          alignItems: "center",
          justifyItems: "center",
          height: "32vh",
        }}
      >
        {buttons.map((res) => {
          return (
            <>
              <div className="button-div">
                <Image
                  src={res.icon}
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="btn-icon"
                />
                <Button
                  href={res.route}
                  className="m-3 button"
                  variant="outlined"
                >
                  {res.name}
                </Button>
              </div>
            </>
          );
        })}
      </Box>
    </div>
  );
}
