import React from "react";
import "./LogIn.css";
import { Link } from "react-router-dom";

import { Button, Group, Input, createStyles, rem } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconPassword,
} from "@tabler/icons-react";
import { IconAt } from "@tabler/icons-react";

const useStyles = createStyles(() => ({
  container: {
    paddingTop: "50px",
    width: "442px",
    height: "583px",
    margin: "auto",
  },
  img: {
    width: "329px",
  },
  form: {
    padding: "50px",
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
  submit_button: {
    backgroundColor: "#00A551 !important",
    color: "#FFFFFF",
    marginTop: "19px",
  },
}));

const LogIn = () => {
  const { classes } = useStyles();
  return (
    <div>
      <section>
        <div className="">
          <div className={classes.container}>
            {/* <div className="">
              <h1 className="">You order and we deliver</h1>

              <img
                src="https://i.ibb.co/rt1TZ6L/Image.png"
                alt=""
                className={classes.img}
              />
            </div> */}

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

                <Input.Wrapper mt={15} label="Email" className="">
                  <Input
                    type="email"
                    icon={<IconAt />}
                    variant="filled"
                    placeholder="Your email"
                    radius="md"
                  />
                </Input.Wrapper>

                <Input.Wrapper mt={15} label="Password" className="">
                  <Input
                    type="password"
                    icon={<IconPassword />}
                    variant="filled"
                    placeholder="Your password"
                    radius="md"
                  />
                </Input.Wrapper>

                <Group position="center">
                  <Button className={classes.submit_button}>Submit</Button>
                </Group>
                <Group
                  position="center"
                  className="flex items-center gap-2 mt-5"
                >
                  <p className={classes.sub_title}>Don't Have An Account? </p>
                  <Link color="red" to="/signUp" className={classes.sub_title}>
                    Sign Up
                  </Link>
                </Group>

                <p className={classes.sub_title}>--or--</p>

                <Group position="center" className="mt-10">
                  <Button
                    // component="a"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // href="https://twitter.com/mantinedev"
                    leftIcon={<IconBrandGoogle size={rem(18)} />}
                    styles={(theme) => ({
                      root: {
                        backgroundColor: "#00acee !important",
                        border: 0,
                        height: rem(42),
                        paddingLeft: rem(20),
                        paddingRight: rem(20),
                        "&:not([data-disabled])": theme.fn.hover({
                          backgroundColor: theme.fn.darken("#00acee", 0.05),
                        }),
                      },

                      leftIcon: {
                        marginRight: theme.spacing.md,
                      },
                    })}
                  >
                    Log in with Google
                  </Button>
                  <Button
                    // component="a"
                    // target="_blank"
                    // rel="noopener noreferrer"
                    // href="https://twitter.com/mantinedev"
                    leftIcon={<IconBrandFacebook size={rem(18)} />}
                    styles={(theme) => ({
                      root: {
                        backgroundColor: "#00acee !important",
                        border: 0,
                        height: rem(42),
                        paddingLeft: rem(20),
                        paddingRight: rem(20),
                        "&:not([data-disabled])": theme.fn.hover({
                          backgroundColor: theme.fn.darken("#00acee", 0.05),
                        }),
                      },

                      leftIcon: {
                        marginRight: theme.spacing.md,
                      },
                    })}
                  >
                    Log in With Facebook
                  </Button>
                </Group>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
