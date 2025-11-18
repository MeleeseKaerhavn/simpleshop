export default function PayButton({ children }) {
  return (
    <button className="px-8 py-2 rounded-xl border-2  text-[#2E2E2E] font-semibold">
      {children}
    </button>
  );
}