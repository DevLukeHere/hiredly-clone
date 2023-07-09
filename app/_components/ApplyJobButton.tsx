interface ApplyJobButtonProps {
  disabled: boolean;
  id?: string;
  onClick?: any; // TODO: Declare proper type for functions
  text: string; // lowercase
}

export default function ApplyJobButton(props: ApplyJobButtonProps) {
  const { disabled, id, onClick, text } = props;

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className="h-[3rem] w-[12.5rem] laptop:w-[10rem] text-[1rem] border border-solid border-primary rounded-[6.25rem] py-[0] px-[1rem] font-[700] text-tertiary capitalize bg-button-green hover:bg-hover-green disabled:text-disabled-grey"
    >
      {text}
    </button>
  );
}
