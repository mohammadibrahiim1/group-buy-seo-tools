import React from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Autocomplete, Input, createStyles } from "@mantine/core";
import { IconAt } from "@tabler/icons-react";

const useStyles = createStyles(() => ({
  container: {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    width: "842px",
    height: "583px",
    margin: "auto",
  },
  img: {
    width: "329px",
  },
  form: {
    padding: "30px",
    width: "393px",
    height: "405px",
    border: "1px solid gray",
    borderRadius: "7px",
  },
  heading: {
    color: "#00A551",
    fontFamily: "Roboto",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    textAlign: "center",
    // textDecoration: "underline",
  },
  sub_title: {
    color: "#474749",
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginTop: "11px",
  },
}));

const LogIn = () => {
  const { classes } = useStyles();
  return (
    <div>
      <section>
        <div className="">
          <div className={classes.container}>
            <div className="">
              <h1 className="">You order and we deliver</h1>

              <img
                src="https://i.ibb.co/rt1TZ6L/Image.png"
                alt=""
                className={classes.img}
              />
            </div>

            <div className={classes.form}>
              <form action="" className="">
                <div>
                  <h1 className={classes.heading}>Create Account</h1>
                </div>
                <div>
                  <h1 className={classes.sub_title}>
                    Log in With your account
                  </h1>
                </div>

                <Input.Wrapper label="Email" className="">
                  <Input
                    icon={<IconAt />}
                    variant="filled"
                    placeholder="Your email"
                    radius="md"
                  />
                </Input.Wrapper>

                <Input.Wrapper label="Password" className="">
                  <Input
                    icon={<IconAt />}
                    variant="filled"
                    placeholder="Your email"
                    radius="md"
                  />
                </Input.Wrapper>

                <div>
                  <button class="">Submit</button>
                </div>
                <div className="">
                  <p className="">Don't Have An Account? </p>
                  <Link to="/signUp" className="">
                    Sign Up{" "}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
