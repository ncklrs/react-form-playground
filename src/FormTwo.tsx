import { useForm, SubmitHandler } from "react-hook-form";
import {
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
  Button,
} from "@headlessui/react";

interface Option {
  label: string;
  value: string;
}

interface FormElement {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  inputType?: string;
  options?: Option[];
}

interface Fieldset {
  fieldset?: string;
  elements: FormElement[];
}

const formElements: Fieldset[] = [
  {
    fieldset: "Personal Information",
    elements: [
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
    ],
  },
  {
    fieldset: "Contact Information",
    elements: [
      {
        type: "input",
        inputType: "email",
        name: "email",
        label: "Email",
        placeholder: "hello@world.com",
      },
    ],
  },
  {
    fieldset: "Preferences",
    elements: [
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
    ],
  },
  //   {
  //     elements: [
  //       {
  //         type: "input",
  //         inputType: "submit",
  //         name: "submit",
  //         value: "Submit",
  //       },
  //     ],
  //   },
];

const FormTwo = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="text-left m-10">
      {formElements.map((fieldset, index) => (
        <Fieldset key={index} className="space-y-8 pt-10">
          {fieldset.fieldset && (
            <Legend className="text-lg font-bold">{fieldset.fieldset}</Legend>
          )}
          {fieldset.elements.map((element, elemIndex) => {
            switch (element.type) {
              case "input":
                return (
                  <Field key={elemIndex}>
                    <Label className="block">{element.label}</Label>
                    <Input
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      type={element.inputType || "text"}
                      {...register(element.name)}
                      placeholder={element.placeholder}
                    />
                  </Field>
                );
              case "select":
                return (
                  <Field key={elemIndex}>
                    <Label className="block">{element.label}</Label>
                    <Select
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      {...register(element.name)}
                    >
                      {element.options?.map((option, optionIdx) => (
                        <option key={optionIdx} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                  </Field>
                );
              case "textarea":
                return (
                  <Field key={elemIndex}>
                    <Label className="block">{element.label}</Label>
                    <Textarea
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      {...register(element.name)}
                      placeholder={element.placeholder}
                    />
                  </Field>
                );
              default:
                return null;
            }
          })}
        </Fieldset>
      ))}
      <Button className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[hover]:data-[active]:bg-sky-700">
        Save changes
      </Button>
    </form>
  );
};

export default FormTwo;
