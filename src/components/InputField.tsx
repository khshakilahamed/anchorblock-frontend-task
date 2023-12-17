import { twMerge } from "tailwind-merge";
import { Controller, useFormContext } from "react-hook-form";

interface InputTypeProps {
  type?: React.HTMLInputTypeAttribute;
  label?: string | React.ReactNode | React.ReactElement;
  name: string;
  id?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  // additional props if needed
}

const InputField = ({
  type = "text",
  label,
  name,
  id,
  placeholder,
  className,
  labelClassName,
}: InputTypeProps) => {
  const {
    control,
    // formState: { errors },
  } = useFormContext();

  const classStyles = twMerge(
    `input input-bordered input-primary w-full max-w-xs `,
    className
  );
  return (
    <>
      {label && (
        <label htmlFor={id} className={labelClassName}>
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            // className="input input-bordered w-full max-w-xs"
            {...field}
            className={classStyles}
            type={type}
            id={id}
            placeholder={placeholder}
            value={field.value}
          />
        )}
      />
    </>
  );
};

export default InputField;
