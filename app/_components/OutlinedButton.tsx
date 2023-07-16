interface ButtonOutlinedProps {
  disabled: boolean;
  fontSize: string; // rem
  height: string; // rem
  id?: string;
  onClick?: () => void; 
  text: string; // lowercase
  width: string; // rem
}

export default function OutlinedButton(props: ButtonOutlinedProps) {
  const {
    disabled,
    fontSize,
    height,
    id,
    onClick,
    text,
    width,
  } = props;
  const buttonWidth = ["h-[7.5rem]", "h-[4.75rem]", "h-[12.5rem]", "h-[7rem]"]
  const buttonHeight = ["h-[3rem]", "h-[2.75rem]", "h-[2.25rem]", "h-[1.875rem]", "h-[1.5rem]"]
  const buttonFont = ["text-[1rem]", "text-[0.875rem]", "text-[0.75rem]"]

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`h-[${height}rem] w-[${width}rem] text-[${fontSize}rem] border border-solid border-primary rounded-[6.25rem] py-[0] px-[1rem] font-[700] text-primary capitalize bg-transparent hover:bg-tertiary
       disabled:text-tertiary disabled:bg-disabled-grey`}
    >
      {text}
    </button>
  );
}
