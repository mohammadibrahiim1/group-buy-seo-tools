import { Image, Text, Title, createStyles, rem } from "@mantine/core";
import React from "react";
// import { FaCheck, FaDollarSign } from "react-icons/fa";
// import { GiNetworkBars } from "react-icons/gi";
// import { MdOutlineSupport } from "react-icons/md";
const useStyles = createStyles((theme) => ({
  root: {
    width: "70%",
    margin: "auto",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "15px",
  },

  image: {
    width: "95px",
    height: "95px",
    border: "1px solid white",
    borderRadius: "15px",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    lineHeight: 1.05,
    fontSize: rem(16),
    textAlign: "start",
    marginTop: "22px",
    color: "#FF922B",

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },
  sub_title: {
    color: theme.dark,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
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
    title: "Rocket",
    image:
      "https://i.ibb.co/QncQsz2/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-com.png",
    text: "Pay with Rocket",
    ratings: "4.5",
  },
  {
    title: "Nogad",
    image: "https://i.ibb.co/7vvGN0j/Nagad-Logo-wine.png",
    text: "Pay with Nogad",
    ratings: "4.7",
  },
  {
    title: "Bkash",
    image: "https://i.ibb.co/4Jf59hR/BKash-b-Kash-Logo-wine.png",
    text: "Pay with bkash",
    ratings: "4.8",
  },
  {
    title: "Paypal",
    image: "https://i.ibb.co/dk4vfmd/Pay-Pal-Logo-wine.png",
    text: "You can with paypal",
    ratings: "4.9",
  },
];

const Payment = () => {
  const { classes } = useStyles();
  return (
    <div>
      <div className="py-16 my-16 bg-base-100">
        <div className="py-12">
          <Title className={classes.heading}>
            Our{" "}
            <Text
              component="span"
              inherit
              variant="gradient"
              gradient={{ from: "teal", to: "lime" }}
            >
              Payment
            </Text>{" "}
            Method
          </Title>
        </div>
        <div className={classes.tool_container}>
          {data?.map((payment) => (
            <>
              <div>
                <div class="relative flex items-start justify-between h-38 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-5">
                  <div class=" flex  gap-5 justify-between items-center  pt-4 text-gray-500">
                    <img
                      src={payment.image}
                      alt=""
                      srcset=""
                      className={classes.image}
                    />
                    <div>
                      <Text class={classes.title}>{payment.title}</Text>
                      <p class={classes.sub_title}>{payment.text}</p>
                    </div>
                  </div>

                  <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
                    {payment.ratings}
                  </span>
                </div>
              </div>{" "}
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
