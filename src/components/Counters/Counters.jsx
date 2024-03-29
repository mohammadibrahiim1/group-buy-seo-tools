import { createStyles, Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, rem } from "@mantine/core";

// import {
//   IconReceiptOff,
//   IconFlame,
//   IconCircleDotted,
//   IconFileCode,
// } from "@tabler/icons-react";

import { FaFlag, FaUserCheck, FaUsers, FaHands } from "react-icons/fa";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    width: "70%",
    margin: "auto",
    paddingTop: "150px",
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      margin: "auto",
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(36),
    fontWeight: 900,
    lineHeight: 1.1,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

const features = [
  {
    icon: FaUsers,
    title: "Total Users",
    description: "5634",
  },
  {
    icon: FaUserCheck,
    title: "Active Users",
    description: "193",
  },
  {
    icon: FaFlag,
    title: "Countries",
    description: "105",
  },
  {
    icon: FaHands,
    title: "Since",
    description: "2018",
  },
];

export const Counters = () => {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon size={44} radius="md" variant="gradient" gradient={{ deg: 133, from: "blue", to: "cyan" }}>
        <feature.icon size={rem(26)} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Col span={12} sm={6}>
          <Title
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "teal", to: "blue" }}
            className={classes.title}
            order={2}
          >
            A fully featured React components library for your next project
          </Title>
          <Text c="dimmed" mt={11}>
            India, Bangladesh, Pakistan, Nepal, United States, Saudi Arabia, Malaysia, and many more countries peoples
            also can purchase our service. Our maximum tools have simple access system (One click to access system) -
            hope you'll like this system!
          </Text>
        </Col>
        <Col span={12} sm={6}>
          <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: "md", cols: 2 }]}>
            {items}
          </SimpleGrid>
        </Col>
      </Grid>
    </div>
  );
};
