import React from "react";
import {
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Text,
  rem,
  Image,
  Title,
} from "@mantine/core";
// import {
//   IconUserPlus,
//   IconDiscount2,
//   IconReceipt2,
//   IconCoin,
//   IconArrowUpRight,
//   IconArrowDownRight,
// } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    width: "70%",
    margin: "auto",
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  // title: {
  //   fontWeight: 700,
  //   textTransform: "uppercase",
  // },

  container: {
    display: "flex",
    // justifyContent: "space-evenly",
    alignItems: "center",
    gap: "11px",
  },
  title: {
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    // maxWidth: rem(500),
    fontSize: rem(18),
    textAlign: "center",
    // marginTop: "25px",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },
  heading: {
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    // maxWidth: rem(500),
    fontSize: rem(42),
    textAlign: "center",
    marginTop: "25px",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },
}));

const data = [
  {
    // title: "one",
    title: "ahrefs",
    description: "our most popular tool",
    image: "https://i.ibb.co/8jxsY61/ahrefs-cloud.png",
  },
  {
    //  title: "one",
    title: "udemy",
    description: "our most popular tool",
    image: "https://i.ibb.co/Wy47z9W/udemy.png",
  },
  {
    // title: "one",
    title: "canva",
    description: "our most popular tool",
    image: "https://i.ibb.co/1TW87K0/canva.png",
  },
];

const PopularTools = () => {
  const { classes } = useStyles();
  const stats = data.map((stat) => {
    return (
      <Paper withBorder radius="md" className={classes.container}>
        <div>
          <Image
            radius="sm"
            src={stat.image}
            alt=""
            srcset=""
            height={100}
            width={110}
            m={9}
          />
        </div>
        <div>
          <Group position="apart">
            <Text size="xs" color="dimmed" className={classes.title}>
              {stat.title}
            </Text>
          </Group>

          <Group align="flex-start" spacing="xs" mt={5}>
            {/* <Text className={classes.value}>{stat.value}</Text> */}
            <Text
              color={stat.diff > 0 ? "teal" : "red"}
              fz="sm"
              fw={500}
              className={classes.diff}
            >
              <span>{stat.description}</span>
            </Text>
          </Group>

          <Text fz="xs" c="dimmed" mt={5}>
            Compared to previous month
          </Text>
        </div>
      </Paper>
    );
  });
  return (
    <>
      <Title className={classes.heading}>
        Our{" "}
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{ from: "teal", to: "lime" }}
        >
          Most Popular
        </Text>{" "}
        Seo Tools
      </Title>
      <div className={classes.root}>
        <SimpleGrid
          cols={3}
          breakpoints={[
            { maxWidth: "md", cols: 2 },
            { maxWidth: "xs", cols: 1 },
          ]}
        >
          {stats}
        </SimpleGrid>
      </div>
    </>
  );
};

export default PopularTools;
