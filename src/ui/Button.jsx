//Reusable Button component
export default function Button({ bg, children, ...extraAttr }) {
  return (
    <button
    {...extraAttr}
      className={`rounded-md ${bg} px-3.5 py-2.5 text-sm font-semibold disabled:bg-gray-500 cursor-pointer`}
    >
      {children}
    </button>
  );
}
