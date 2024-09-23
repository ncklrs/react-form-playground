import React from "react";
import { Form, Input, Select } from "./components";

const formElements = [
  {
    type: "input",
    name: "firstName",
    label: "First name",
    placeholder: "What is your name?",
  },
  {
    type: "input",
    name: "lastName",
    label: "Last name",
    placeholder: "What is your last name?",
  },
  {
    type: "input",
    inputType: "email",
    name: "email",
    label: "Email",
    placeholder: "hello@world.com",
  },
  {
    type: "select",
    name: "gender",
    label: "Gender",
    options: [
      { label: "Female", value: "female" },
      { label: "Male", value: "male" },
      { label: "Other", value: "other" },
    ],
  },
  {
    type: "select",
    name: "fav-color",
    label: "Favorite Colors",
    options: [
      { label: "Blue", value: "blue" },
      { label: "Black", value: "black" },
      { label: "Red", value: "red" },
      { label: "Other", value: "other" },
    ],
  },
  {
    type: "input",
    inputType: "submit",
    name: "submit",
    value: "Submit",
  },
];

export default function FormEmbed() {
  const onSubmit = (data: any) => console.log(data);

  return (
    <Form onSubmit={onSubmit} defaultValues={{}}>
      {formElements.map((element, index) => {
        switch (element.type) {
          case "input":
            return (
              <Input
                key={index}
                type={element.inputType || "text"}
                name={element.name}
                label={element.label}
                placeholder={element.placeholder}
                value={element.value}
              />
            );
          case "select":
            return (
              <Select
                key={index}
                name={element.name}
                label={element.label}
                options={element.options || []}
              />
            );
          default:
            return null;
        }
      })}
      {/* <Input
        name="firstName"
        label="First name"
        placeholder="What is your name?"
      />
      <Input
        name="lastName"
        label="Last name"
        placeholder="What is your last name?"
      />
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="hello@world.com"
      />
      <Select
        name="gender"
        label="Gender"
        options={[
          { label: "Female", value: "female" },
          { label: "Male", value: "male" },
          { label: "Other", value: "other" },
        ]}
      />
      <Select
        name="fav-color"
        label="Favorite Colors"
        options={[
          { label: "Blue", value: "blue" },
          { label: "Black", value: "black" },
          { label: "Red", value: "red" },
          { label: "Other", value: "other" },
        ]}
      />
      <Input type="submit" name="submit" value="Submit" /> */}
    </Form>
  );
}
