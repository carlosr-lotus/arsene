type Props = {
  className?: string;
};

export default function Button({ className = "" }: Props) {
  return (
    <button className={`p-5 bg-main-black text-light-text ${className}`}>
      Meet Parfum
    </button>
  );
}
