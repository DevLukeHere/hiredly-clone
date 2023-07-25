import BookmarkIcon from "@heroicons/react/24/outline/BookmarkIcon";

interface BookmarkButtonProps {
  disabled: boolean;
  id?: string;
  onClick?: () => void;
}

export default function BookmarkButton(props: BookmarkButtonProps) {
  const { disabled, id, onClick } = props;

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      aria-label="boomark this job"
      className="h-[3rem] w-[3rem] border-[1.5px] border-solid border-primary rounded-full p-2 bg-tertiary hover:bg-background-grey items-center text-center inline-flex justify-center"
    >
      <BookmarkIcon className="w-6 h-6" />
    </button>
  );
}
