export default function PayButton({ children }) {
  return (
    <button className="px-8 py-2 rounded-xl border-2 border-[#E9782D] bg-[#F7C9A3] text-[#2E2E2E] font-semibold">
      {children}
    </button>
  );
}