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
import { Icon24Hours } from "@tabler/icons-react";
import { IconAntennaBars5, IconCheck, IconCoin } from "@tabler/icons-react";
import React from "react";
const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    height: "170px",
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
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  //   icon: {
  //     padding: "5px",
  //   },
}));

const data = [
  {
    // title: "one",
    title: "Tools Uptime",
    description:
      "We take care about tools uptime. We always try our best to keep our tools active maximum time.",
    image: "https://i.ibb.co/8jxsY61/ahrefs-cloud.png",
    category: "string",
    icon: IconAntennaBars5,
    author: {
      name: "string",
      avatar: "string",
    },
  },
  {
    //  title: "one",
    title: "Instant Access",
    description: "Instant Access after Purchase. One click to Access System",
    image: "https://i.ibb.co/Wy47z9W/udemy.png",
    category: "string",
    icon: IconCheck,
    author: {
      name: "string",
      avatar: "string",
    },
  },
  {
    // title: "one",
    title: "Easy Payment Gateway",
    description:
      "We accept PayPal internationally and locally bKash, Rocket and Nagad.",
    image: "https://i.ibb.co/1TW87K0/canva.png",
    category: "string",
    icon: IconCoin,
    author: {
      name: "string",
      avatar: "string",
    },
  },
  {
    // title: "one",
    title: "Quality Support",
    description: "You can contact us directly via chat or facebook.",
    image: "https://i.ibb.co/1TW87K0/canva.png",
    category: "string",
    icon: Icon24Hours,
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
              <Group spacing={0}>
                <div className={classes.body}>
                  {
                    <item.icon
                      height={40}
                      width={40}
                      className={classes.icon}
                    />
                  }
                  <Text
                    transform="uppercase"
                    color="dimmed"
                    weight={700}
                    size="xs"
                  >
                    {item.title}
                  </Text>
                  <Text className={classes.title} mt="xs" mb="md">
                    {item.description}
                  </Text>
                  {/* <Group noWrap spacing="xs">
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
                  </Group> */}
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
