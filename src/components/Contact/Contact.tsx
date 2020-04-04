import React, { useState, FormEvent, useCallback, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  TextFieldProps,
  CircularProgress
} from "@material-ui/core";
import { useStyles } from "./Contact.styles";
import { ArrowRightAlt, Favorite } from "@material-ui/icons";
import { useSendEmail } from "../../utils/Email";
import { handleChange, findError } from "../../utils/Form";
import * as yup from "yup";

const commonProps: TextFieldProps = {
  fullWidth: true,
  variant: "filled",
  margin: "normal"
};

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  message: yup.string().required()
});

export default function Contact() {
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loves, setLoves] = useState(0);
  const [errors, setErrors] = useState<yup.ValidationError[]>([]);

  const [doSend, { data, loading }] = useSendEmail();

  useEffect(() => {
    setErrors([]);
    // eslint-disable-next-line
  }, [
    name,
    email,
    message
  ]);

  useEffect(() => {
    if (!!data) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [data]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      if (!loading && !data) {
        const variables = {
          name,
          email,
          message
        };
        schema
          .validate(variables, { abortEarly: false })
          .then(() => {
            doSend(variables);
          })
          .catch(function(err) {
            setErrors(err.inner);
          });
      } else if (!loading && loves < 3) {
        setLoves(val => val + 1);
      }
    },
    [data, doSend, email, loading, loves, message, name]
  );

  const emailError = findError(errors, "email")?.message;
  const nameError = findError(errors, "name")?.message;
  const messageError = findError(errors, "message")?.message;

  return (
    <Box>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          {...commonProps}
          value={name}
          error={!!nameError}
          helperText={nameError ? "Please enter your name" : null}
          onChange={handleChange(setName)}
          label="Name"
        />
        <TextField
          {...commonProps}
          value={email}
          error={!!emailError}
          helperText={emailError ? "Please enter a valid email" : null}
          onChange={handleChange(setEmail)}
          label="Email"
        />
        <TextField
          {...commonProps}
          value={message}
          error={!!messageError}
          helperText={messageError ? "Please enter a message" : null}
          onChange={handleChange(setMessage)}
          label="Message"
          multiline={true}
          rows={5}
        />
        <Box display="flex" justifyContent={"flex-end"} marginX={-1}>
          <Button
            variant="text"
            color="primary"
            disabled={loading || loves >= 3}
            type="submit"
          >
            {!!data ? "Thank you!" : "Send"}
            <Box marginLeft={1} display="flex" alignItems="center">
              {loading ? (
                <CircularProgress size={24} thickness={5} />
              ) : !!data ? (
                <Favorite
                  className={classes.loveIcon}
                  color="primary"
                  style={{
                    transform: `scale(${1 + loves * 0.75})`,
                    opacity: 1 - loves * 0.3
                  }}
                />
              ) : (
                <ArrowRightAlt />
              )}
            </Box>
          </Button>
        </Box>
      </form>
    </Box>
  );
}
