import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Container,
} from "@mantine/core";
// import { GoogleButton, TwitterButton } from "../SocialButtons/SocialButtons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthenticationForm = () => {
  const [error, setError] = useState("");
  console.log(error);
  const navigate = useNavigate();

  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;

    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });

    const userInfo = {
      name,
      email,
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("user created successfully ");
        } else {
          toast.error(data.message);
        }
      });
  };

  //   google sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      if (user) {
        fetch("http://localhost:5000/users", {
          method: "post",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.acknowledged) {
              toast.success(" successfully SignIn");
              navigate("/allTools");
            } else {
              toast.error(data.message);
            }
          });
      }
    });
  };

  return (
    <div>
      <Container size="25rem" mx="auto" mt={150}>
        <Paper radius="md" p="xl" withBorder>
          <Text size="lg" weight={500}>
            Welcome to GroupBuy Seo Tools <br />
            {type} with
          </Text>

          <Group grow mb="md" mt="md">
            <Button fullWidth variant="outline" onClick={handleGoogleSignIn}>
              <FcGoogle radius="xl" className="mr-2"></FcGoogle>Google
            </Button>
            <Button fullWidth variant="outline" c="blue">
              <FaFacebookF radius="xl" className="mr-2"></FaFacebookF>Facebook
            </Button>
          </Group>

          <Divider
            label="Or continue with email"
            labelPosition="center"
            my="lg"
          />

          <form onSubmit={handleSubmit}>
            <Stack>
              {type === "register" && (
                <TextInput
                  type="text"
                  label="Name"
                  id="name"
                  placeholder="Your name"
                  value={form.values.name}
                  onChange={(event) =>
                    form.setFieldValue("name", event.currentTarget.value)
                  }
                  radius="md"
                />
              )}

              <TextInput
                type="email"
                required
                label="Email"
                id="email"
                placeholder="hello@mantine.dev"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
                radius="md"
              />

              <PasswordInput
                type="password"
                required
                label="Password"
                id="password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  "Password should include at least 6 characters"
                }
                radius="md"
              />

              {type === "register" && (
                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue("terms", event.currentTarget.checked)
                  }
                />
              )}
            </Stack>

            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {type === "register"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
              <Button type="submit" radius="xl">
                {upperFirst(type)}
              </Button>
            </Group>
          </form>
        </Paper>
      </Container>
    </div>
  );
};
