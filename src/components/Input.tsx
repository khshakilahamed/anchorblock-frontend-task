import { twMerge } from "tailwind-merge";

interface InputTypeProps {
  type?: React.HTMLInputTypeAttribute;
  label?: string | React.ReactNode | React.ReactElement;
  name: string;
  id?: string;
  placeholder?: string;
  className?: string;
  labelClassName?: string;
  onChange?: (e: never) => void;
  onFocus?: (e: never) => void;
  rest?: never;
  // additional props if needed
}

const Input = ({
  type = "text",
  label,
  name,
  id,
  placeholder,
  className,
  labelClassName,
  onFocus,
  onChange,
  ...rest
}: InputTypeProps) => {
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
      <input
        // className="input input-bordered w-full max-w-xs"
        className={classStyles}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onFocus={onFocus}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};

export default Input;
