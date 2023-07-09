interface ButtonContainedProps {
  buttonVariant: "primary" | "secondary";
  disabled: boolean;
  fontSize: string; // rem
  height: string; // rem
  id?: string;
  onClick?: any; // TODO: Declare proper type for functions
  text: string; // lowercase
  width: string; // rem
}

export default function ContainedButton(props: ButtonContainedProps) {
  const {
    buttonVariant,
    disabled,
    fontSize,
    height,
    id,
    onClick,
    text,
    width,
  } = props;

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`h-[${height}] w-[${width}] text-[${fontSize}] border border-solid border-primary rounded-[6.25rem] py-[0] px-[1rem] font-[700] text-tertiary capitalize ${
        buttonVariant === "primary" ? "bg-button-black" : "bg-button-green"
      } hover:${buttonVariant === "primary" ? "bg-primary" : "bg-hover-green"}
       disabled:text-disabled-grey`}
    >
      {text}
    </button>
  );
}
