import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineSupport } from "react-icons/md";
import { FaCheck, FaDollarSign } from "react-icons/fa";
import { Text, Title, createStyles, rem } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  root: {
    // padding: `calc(${theme.spacing.xl} * 1.5)`,
    width: "70%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "15px",
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
    height: "28px",
    width: "28px",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[5]
        : theme.colors.orange[5],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    lineHeight: 1.05,
    fontSize: rem(16),
    textAlign: "start",
    marginTop: "22px",
    color: "#1CBA7E",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },
  sub_title: {
    color: "#000000",
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: rem(12.5),
    textAlign: "justify",
    marginTop: "11px",

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

    fontSize: rem(42),
    textAlign: "center",
    marginTop: "25px",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
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
  },
}));

const data = [
  {
    icon: GiNetworkBars,
    title: "Tools Uptime",
    text: "We take care about tools uptime. We always try our best to keep our tools active maximum time.",
    ratings: "4.5",
  },
  {
    icon: FaCheck,
    title: "Instant Access",
    text: "Instant Access after Purchase. One click to Access System",
    ratings: "4.7",
  },
  {
    icon: FaDollarSign,
    title: "Easy Payment Gateway",
    text: "We accept PayPal internationally and locally bKash, Rocket and Nagad.",
    ratings: "4.8",
  },
  {
    icon: MdOutlineSupport,
    title: "Quality Support",
    text: "You can contact us directly via chat or facebook.",
    ratings: "4.9",
  },
];

const ServiceCard = () => {
  const { classes } = useStyles();
  return (
    <div className="pt-32">
      <div className="py-12">
        <Title className={classes.heading}>
          Our{" "}
          <Text
            component="span"
            inherit
            variant="gradient"
            gradient={{ from: "teal", to: "lime" }}
          >
            Seo Tools Services
          </Text>{" "}
          Benefits
        </Title>
      </div>
      <div className={classes.tool_container}>
        {data?.map((item) => (
          <>
            <div>
              <div class="relative flex items-start justify-between h-48 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
                <div class="pt-4 text-gray-500">
                  {<item.icon class={classes.icon} />}

                  <Text class={classes.title}>{item.title}</Text>

                  <p class={classes.sub_title}>{item.text}</p>
                </div>

                <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
                  {item.ratings}
                </span>
              </div>
            </div>{" "}
          </>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
