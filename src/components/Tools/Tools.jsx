import React, { useContext, useState } from "react";
import Tool from "../Tool/Tool";
import "./Tools.css";
// import { Link } from "react-router-dom";
import { ApiContext } from "../../Context/DataContext";
import { Button, Text, Title, createStyles, em, rem } from "@mantine/core";
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

  container: {
    display: "flex",
    alignItems: "center",
    gap: "11px",
  },
  title: {
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    lineHeight: 1.05,
    fontSize: rem(12),
    textAlign: "center",
    marginTop: "5px",
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(12),
      lineHeight: 1.15,
    },
    [theme.fn.smallerThan("lg")]: {
      maxWidth: "100%",
      fontSize: rem(14),
      lineHeight: 1.15,
    },
  },
  heading: {
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: rem(42),
    textAlign: "center",
    marginTop: "25px",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(24),
      lineHeight: 1.15,
    },
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(36),
      lineHeight: 1.15,
    },
  },

  tool_container: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "12px",
    width: "70%",
    margin: "auto",
    marginTop: "29px",

    [`@media (max-width: ${em(576)})`]: {
      display: "grid",
      gridTemplateColumns: "repeat(1,1fr)",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "12px",
      // width: "70%",
      // margin: "auto",
      marginTop: "29px",
    },
    [`@media (max-width: ${em(991)}) and (min-width: ${em(577)})  `]: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "12px",
      width: "70%",
      margin: "auto",
      marginTop: "29px",
    },
  },
}));

const Tools = () => {
  const { classes } = useStyles();
  const { tools } = useContext(ApiContext);
  const [showMore, setShowMore] = useState(8);
  const showMoreTools = () => {
    setShowMore((preValue) => preValue + 4);
  };

  return (
    <div>
      <section className={classes.root}>
        <div className="text-center">
          <Title className={classes.heading}>
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "teal", to: "blue" }}
            >
              Our seo Tools
            </Text>{" "}
          </Title>
          <Text mb={75} className={classes.title}>
            Always Know What You Are Pricing
          </Text>
        </div>
        <div className={classes.tool_container}>
          {tools &&
            tools
              ?.slice(0, showMore)
              .map((tool) => <Tool tool={tool} key={tool.id}></Tool>)}
        </div>
        <div className="flex justify-between items-center mt-10 w-2/4 mx-auto">
          <Button
            variant="light"
            color="red"
            fullWidth
            mt="md"
            radius="md"
            onClick={showMoreTools}
          >
            Show more
          </Button>
          <Button
            component="a"
            href="/allTools"
            variant="light"
            color="red"
            fullWidth
            mt="md"
            radius="md"
          >
            See all tools
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Tools;
