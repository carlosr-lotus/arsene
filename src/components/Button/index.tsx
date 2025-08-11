type Props = {
  name?: string;
  className?: string;
};

export default function Button({ name = "Click", className = "" }: Props) {
  return (
    <button
      className={`p-5 bg-main-black text-light-text cursor-pointer ${className}`}
    >
      {name}
    </button>
  );
}
