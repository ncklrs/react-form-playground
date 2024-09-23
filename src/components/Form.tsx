import React, { ReactNode } from "react";
import { useForm, FieldValues, DefaultValues } from "react-hook-form";

interface FormProps<T extends FieldValues> {
  defaultValues: DefaultValues<T>; // Explicitly type defaultValues
  onSubmit: (data: T) => void;
  children: ReactNode;
}

export default function Form<T extends FieldValues>({
  defaultValues,
  children,
  onSubmit,
}: FormProps<T>) {
  const methods = useForm<T>({ defaultValues }); // Type is now compatible
  const { handleSubmit } = methods;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props.name) {
          return React.createElement(child.type, {
            ...{
              ...child.props,
              register: methods.register,
              key: child.props.name,
            },
          });
        }
        return child;
      })}
    </form>
  );
}
