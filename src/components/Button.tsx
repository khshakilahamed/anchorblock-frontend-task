import { twMerge } from "tailwind-merge";

type ButtonPropsType = {
  type?: "button" | "submit" | "reset";
  buttonType?: "default" | "light";
  children: string | React.ReactElement | React.ReactNode;
  className?: string;
  onClick?: (el?: unknown) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
};

const Button = ({
  type = "button",
  buttonType = "default",
  children = "button",
  className,
  onClick,
  disabled = false,
  style,
}: ButtonPropsType) => {
  const classDisableStyle =
    "bg-gray-200 text-black hover:bg-gray-200 cursor-not-allowed";

  const classStyles = twMerge(
    `py-2 px-5 rounded-lg text-white cursor-pointer ${
      buttonType === "default"
        ? "bg-primary hover:bg-primary-hover border-2 border-primary-hover"
        : "bg-secondary text-default border-2 border-gray-color hover:bg-gray-color"
    }  ${disabled && classDisableStyle}`,
    className
  );

  return (
    <button
      type={type}
      className={classStyles}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
