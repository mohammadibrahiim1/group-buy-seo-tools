import {
  Avatar,
  Card,
  Group,
  Image,
  Text,
  Title,
  createStyles,
  em,
  rem,
} from "@mantine/core";
import React from "react";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
  card_container: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    width: "70%",
    margin: "auto",
    // Static media query
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
    [`@media (max-width: ${em(991)}) and (min-width : ${em(577)}) `]: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "12px",
      // width: "70%",
      // margin: "auto",
      marginTop: "29px",
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
  },
}));

const data = [
  {
    // title: "one",
    title: "ahrefs",
    description: "our most popular tool",
    image: "https://i.ibb.co/8jxsY61/ahrefs-cloud.png",
    category: "string",
    date: "string",
    author: {
      name: "string",
      avatar: "string",
    },
  },
  {
    //  title: "one",
    title: "udemy",
    description: "our most popular tool",
    image: "https://i.ibb.co/Wy47z9W/udemy.png",
    category: "string",
    date: "string",
    author: {
      name: "string",
      avatar: "string",
    },
  },
  {
    // title: "one",
    title: "canva",
    description: "our most popular tool",
    image: "https://i.ibb.co/1TW87K0/canva.png",
    category: "string",
    date: "string",
    author: {
      name: "string",
      avatar: "string",
    },
  },
  {
    // title: "one",
    title: "canva",
    description: "our most popular tool",
    image: "https://i.ibb.co/1TW87K0/canva.png",
    category: "string",
    date: "string",
    author: {
      name: "string",
      avatar: "string",
    },
  },
];

const ServiceCard = () => {
  const { classes } = useStyles();
  return (
    <div>
      <div className="py-12">
        <Title className={classes.heading}>
          See{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "teal", to: "lime" }}
          >
            Our
          </Text>{" "}
          Services
        </Title>
      </div>
      <div className={classes.card_container}>
        {data.map((item) => (
          <>
            <Card withBorder radius="md" p={0} className={classes.card}>
              <Group noWrap spacing={0}>
                <Image src={item.image} height={140} width={140} />
                <div className={classes.body}>
                  <Text
                    transform="uppercase"
                    color="dimmed"
                    weight={700}
                    size="xs"
                  >
                    {item.category}
                  </Text>
                  <Text className={classes.title} mt="xs" mb="md">
                    {item.title}
                  </Text>
                  <Group noWrap spacing="xs">
                    <Group spacing="xs" noWrap>
                      <Avatar size={20} src={item.author.avatar} />
                      <Text size="xs">{item.author.name}</Text>
                    </Group>
                    <Text size="xs" color="dimmed">
                      •
                    </Text>
                    <Text size="xs" color="dimmed">
                      {item.date}
                    </Text>
                  </Group>
                </div>
              </Group>
            </Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
