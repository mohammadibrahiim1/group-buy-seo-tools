// import { Image, Text, Title, createStyles, em, rem } from "@mantine/core";
// import React from "react";
// // import { FaCheck, FaDollarSign } from "react-icons/fa";
// // import { GiNetworkBars } from "react-icons/gi";
// // import { MdOutlineSupport } from "react-icons/md";
// const useStyles = createStyles((theme) => ({
//   root: {
//     width: "70%",
//     margin: "auto",
//     display: "grid",
//     gridTemplateColumns: "repeat(4,1fr)",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     gap: "15px",
//   },

//   image: {
//     width: "95px",
//     height: "95px",
//     border: "1px solid white",
//     borderRadius: "15px",
//   },

//   title: {
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontWeight: 700,
//     lineHeight: 1.05,
//     fontSize: rem(16),
//     textAlign: "start",
//     marginTop: "22px",
//     color: "#1CBA7E",

//     [theme.fn.smallerThan("md")]: {
//       maxWidth: "100%",
//       fontSize: rem(34),
//       lineHeight: 1.15,
//     },
//   },
//   sub_title: {
//     color: "#000000",
//     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//     fontWeight: 500,
//     lineHeight: 1.5,
//     fontSize: rem(12.5),
//     textAlign: "justify",
//     marginTop: "11px",

//     [theme.fn.smallerThan("md")]: {
//       maxWidth: "100%",
//       fontSize: rem(34),
//       lineHeight: 1.15,
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

//   tool_container: {
//     display: "grid",
//     gridTemplateColumns: "repeat(4,1fr)",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     gap: "12px",
//     width: "70%",
//     margin: "auto",
//     marginTop: "29px",

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

//   card: {
//     position: "relative",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "start",
//     border: "1px solid gray",
//     borderRadius: "11px",
//     padding: "15px",
//   },
// }));

// const data = [
//   {
//     title: "Rocket",
//     image:
//       "https://i.ibb.co/QncQsz2/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-com.png",
//     text: "Pay with Rocket",
//     ratings: "4.5",
//   },
//   {
//     title: "Nogad",
//     image: "https://i.ibb.co/7vvGN0j/Nagad-Logo-wine.png",
//     text: "Pay with Nogad",
//     ratings: "4.7",
//   },
//   {
//     title: "Bkash",
//     image: "https://i.ibb.co/4Jf59hR/BKash-b-Kash-Logo-wine.png",
//     text: "Pay with bkash",
//     ratings: "4.8",
//   },
//   {
//     title: "Paypal",
//     image: "https://i.ibb.co/dk4vfmd/Pay-Pal-Logo-wine.png",
//     text: "You can with paypal",
//     ratings: "4.9",
//   },
// ];

// const Payment = () => {
//   const { classes } = useStyles();
//   return (
//     <div>
//       <div className="py-16 my-16 bg-base-100">
//         <div className="py-12">
//           <Title className={classes.heading}>
//             Our{" "}
//             <Text
//               component="span"
//               inherit
//               variant="gradient"
//               gradient={{ from: "teal", to: "lime" }}
//             >
//               Payment
//             </Text>{" "}
//             Method
//           </Title>
//         </div>
//         <div className={classes.tool_container}>
//           {data?.map((payment) => (
//             <>
//               <div>
//                 <div class={classes.card}>
//                   <div class=" flex  gap-5 justify-between items-center  pt-4 text-gray-500">
//                     <img
//                       src={payment.image}
//                       alt=""
//                       srcset=""
//                       className={classes.image}
//                     />
//                     <div>
//                       <Text class={classes.title}>{payment.title}</Text>
//                       <p class={classes.sub_title}>{payment.text}</p>
//                     </div>
//                   </div>

//                   <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
//                     {payment.ratings}
//                   </span>
//                 </div>
//               </div>{" "}
//             </>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;

import {
  createStyles,
  Text,
  SimpleGrid,
  // Container,
  rem,
  // Image,
  Title,
  Container,
} from "@mantine/core";
import { FaMoneyCheckAlt, FaPaypal, FaRocket } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

const useStyles = createStyles((theme) => ({
  feature: {
    position: "relative",
    paddingTop: theme.spacing.xl,
    paddingLeft: theme.spacing.xl,
  },

  container: {
    width: "70%",
    margin: "auto",
    padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    [theme.fn.smallerThan("md")]: {
      width: "100%",
      margin: "auto",
    },
  },

  overlay: {
    position: "absolute",
    height: rem(100),
    width: rem(160),
    top: 0,
    left: 0,
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    zIndex: 1,
  },

  content: {
    position: "relative",
    zIndex: 2,
  },

  icon: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
  },

  heading: {
    lineHeight: 1,
    textAlign: "center",
    marginBottom: "35px",
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,

    fontSize: rem(42),

    marginTop: "25px",
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

function Feature({ icon: Icon, image, title, description, className, ...others }) {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.feature)} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon
          // src={image}
          size={rem(38)}
          className={classes.icon}
          stroke={1.5}
        />
    
        <Text fw={700} fz="lg" mb="xs" mt={3} ml={37} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: FaMoneyCheckAlt,
    image: "https://i.ibb.co/QncQsz2/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-com.png",
    title: "Bkash",
    description:
      "As electricity builds up inside its body, it becomes more aggressive. One theory is that the electricity.",
  },
  {
    icon: GiMoneyStack,
    title: "Nagad",
    description: "Slakoth’s heart beats just once a minute. Whatever happens, it is content to loaf around motionless.",
  },
  {
    icon: FaRocket,
    title: "Rocket",
    description:
      "Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.",
  },
  {
    icon: FaPaypal,
    title: "Paypal",
    description:
      "Thought to have gone extinct, Relicanth was given a name that is a variation of the name of the person who discovered.",
  },
];

const Payment = () => {
  const { classes } = useStyles();
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <section className={classes.container} mt={70} size="xl">
      <Title className={classes.heading} mb={75}>
        <Text component="span" inherit variant="gradient" gradient={{ from: "teal", to: "blue" }}>
          Our Payments Methods
        </Text>{" "}
      </Title>

      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: "sm", cols: 1 },
          { maxWidth: "md", cols: 2 },
          { maxWidth: "lg", cols: 3 },
        ]}
        spacing={50}
      >
        {items}
      </SimpleGrid>
    </section>
  );
};

export default Payment;
