// import {
//   Avatar,
//   Card,
//   Group,
//   Image,
//   Text,
//   Title,
//   createStyles,
//   em,
//   rem,
// } from "@mantine/core";
// import { Icon24Hours } from "@tabler/icons-react";
// import { IconAntennaBars5, IconCheck, IconCoin } from "@tabler/icons-react";
// import React from "react";
// const useStyles = createStyles((theme) => ({
//   card: {
//     backgroundColor:
//       theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
//     height: "170px",
//   },

//   title: {
//     fontWeight: 700,
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     lineHeight: 1.2,
//   },

//   body: {
//     padding: theme.spacing.md,
//   },
//   card_container: {
//     display: "grid",
//     gridTemplateColumns: "repeat(3,1fr)",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "12px",
//     width: "70%",
//     margin: "auto",
//     // Static media query
//     [`@media (max-width: ${em(576)})`]: {
//       display: "grid",
//       gridTemplateColumns: "repeat(1,1fr)",
//       justifyContent: "space-evenly",
//       alignItems: "center",
//       gap: "12px",
//       // width: "70%",
//       // margin: "auto",
//       marginTop: "29px",
//     },
//     [`@media (max-width: ${em(991)}) and (min-width : ${em(577)}) `]: {
//       display: "grid",
//       gridTemplateColumns: "repeat(2,1fr)",
//       justifyContent: "space-evenly",
//       alignItems: "center",
//       gap: "12px",
//       // width: "70%",
//       // margin: "auto",
//       marginTop: "29px",
//     },
//   },
//   heading: {
//     color: theme.dark,
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontWeight: 900,
//     lineHeight: 1.05,

//     fontSize: rem(42),
//     textAlign: "center",
//     marginTop: "25px",

//     [theme.fn.smallerThan("md")]: {
//       maxWidth: "100%",
//       fontSize: rem(34),
//       lineHeight: 1.15,
//     },
//   },

//   //   icon: {
//   //     padding: "5px",
//   //   },
// }));

// const data = [
//   {
//     // title: "one",
//     title: "Tools Uptime",
//     description:
//       "We take care about tools uptime. We always try our best to keep our tools active maximum time.",
//     image: "https://i.ibb.co/8jxsY61/ahrefs-cloud.png",
//     category: "string",
//     icon: IconAntennaBars5,
//     author: {
//       name: "string",
//       avatar: "string",
//     },
//   },
//   {
//     //  title: "one",
//     title: "Instant Access",
//     description: "Instant Access after Purchase. One click to Access System",
//     image: "https://i.ibb.co/Wy47z9W/udemy.png",
//     category: "string",
//     icon: IconCheck,
//     author: {
//       name: "string",
//       avatar: "string",
//     },
//   },
//   {
//     // title: "one",
//     title: "Easy Payment Gateway",
//     description:
//       "We accept PayPal internationally and locally bKash, Rocket and Nagad.",
//     image: "https://i.ibb.co/1TW87K0/canva.png",
//     category: "string",
//     icon: IconCoin,
//     author: {
//       name: "string",
//       avatar: "string",
//     },
//   },
//   {
//     // title: "one",
//     title: "Quality Support",
//     description: "You can contact us directly via chat or facebook.",
//     image: "https://i.ibb.co/1TW87K0/canva.png",
//     category: "string",
//     icon: Icon24Hours,
//     author: {
//       name: "string",
//       avatar: "string",
//     },
//   },
// ];

// const ServiceCard = () => {
//   const { classes } = useStyles();
//   return (
//     <div>
//       <div className="py-12">
//         <Title className={classes.heading}>
//           See{" "}
//           <Text
//             component="span"
//             inherit
//             variant="gradient"
//             gradient={{ from: "teal", to: "lime" }}
//           >
//             Our
//           </Text>{" "}
//           Services
//         </Title>
//       </div>
//       <div className={classes.card_container}>
//         {data.map((item) => (
//           <>
//             <Card withBorder radius="md" p={0} className={classes.card}>
//               <Group spacing={0}>
//                 <div className={classes.body}>
//                   {
//                     <item.icon
//                       height={40}
//                       width={40}
//                       className={classes.icon}
//                     />
//                   }
//                   <Text
//                     transform="uppercase"
//                     color="dimmed"
//                     weight={700}
//                     size="xs"
//                   >
//                     {item.title}
//                   </Text>
//                   <Text className={classes.title} mt="xs" mb="md">
//                     {item.description}
//                   </Text>
//                   {/* <Group noWrap spacing="xs">
//                     <Group spacing="xs" noWrap>
//                       <Avatar size={20} src={item.author.avatar} />
//                       <Text size="xs">{item.author.name}</Text>
//                     </Group>
//                     <Text size="xs" color="dimmed">
//                       •
//                     </Text>
//                     <Text size="xs" color="dimmed">
//                       {item.date}
//                     </Text>
//                   </Group> */}
//                 </div>
//               </Group>
//             </Card>
//           </>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
  createStyles,
  rem,
} from "@mantine/core";
import { isEmail } from "@mantine/form";
// import IMAGES from "./images";
import {
  Icon24Hours,
  IconAntennaBars5,
  IconCheck,
  IconCoin,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    // paddingTop: rem(80),
    // paddingBottom: rem(50),
    width: "70%",
    margin: "auto",
  },

  item: {
    display: "flex",
  },

  itemIcon: {
    padding: theme.spacing.xs,
    marginRight: theme.spacing.md,
  },

  itemTitle: {
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
  },

  supTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: 800,
    fontSize: theme.fontSizes.sm,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
    letterSpacing: rem(0.5),
  },

  title: {
    lineHeight: 1,
    textAlign: "center",
    // marginTop: theme.spacing.xl,
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    // lineHeight: 1.05,

    fontSize: rem(42),
    // textAlign: "center",
    marginTop: "25px",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    textAlign: "center",
    marginTop: theme.spacing.xs,
  },

  highlight: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    padding: rem(5),
    paddingTop: 0,
    borderRadius: theme.radius.sm,
    display: "inline-block",
    color: theme.colorScheme === "dark" ? theme.white : "inherit",
  },
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
  const { classes, theme } = useStyles();

  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={60}
        radius="md"
      >
        <item.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle}>
          {item.title}
        </Text>
        <Text c="dimmed">{item.description}</Text>
      </div>
    </div>
  ));

  return (
    <div size={700} className={classes.wrapper}>
      {/* <Text className={classes.supTitle}>{supTitle}</Text> */}
      <Title className={classes.title}>
        Our{" "}
        <Text
          component="span"
          inherit
          variant="gradient"
          gradient={{ from: "teal", to: "lime" }}
        >
          SEO Tools Service
        </Text>{" "}
        Benefit
      </Title>

      <Container size={660} p={0}>
        {/* <Text color="dimmed" className={classes.description}>
          {description}
        </Text> */}
      </Container>

      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 550, cols: 1, spacing: 40 }]}
        style={{ marginTop: 60 }}
      >
        {items}
      </SimpleGrid>
    </div>
  );
};

export default ServiceCard;
