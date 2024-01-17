import {
  Box,
  Divider,
  Link,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { JobType, job } from "../../models/jobs.enum";
import "./jobs.scss";
import React from "react";
import { Skills } from "../skills/Skills";

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const Jobs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      alignItems="center"
      sx={{
        flexGrow: 1,
        bgcolor: "primary",
        display: "flex",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{ borderRight: 1, borderColor: "divider", width: "200px" }}
      >
        {job.map((jobType: JobType) => (
          <Tab label={jobType.company} {...a11yProps(jobType.id)} />
        ))}
      </Tabs>
      {job.map((jobType: JobType) => (
        <TabPanel value={value} index={jobType.id}>
          <Stack spacing={2} maxWidth={700}>
            <Stack>
              <Typography variant="h6">
                {jobType.jobTitle} -{" "}
                <Link
                  fontWeight={600}
                  color="secondary"
                  underline="none"
                  target="_blank"
                  href="https://edison365.com/"
                  variant="overline"
                  sx={(theme: any) => ({
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  })}
                >
                  @ {jobType.company}
                </Link>
              </Typography>
              <Typography variant="caption" color="grey">
                {jobType.dates}
              </Typography>
              <Typography variant="subtitle1" color="grey">
                {jobType.content}
              </Typography>
            </Stack>
            <Skills jobSkills={jobType.skills} />
          </Stack>
        </TabPanel>
      ))}
    </Box>
  );
};
