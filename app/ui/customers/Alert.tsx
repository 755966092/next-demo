import clsx from "clsx";

export default function Alert({ children, type }: { children: React.ReactNode; type: "blue" | "green" | "red" }) {
  const className = clsx("rounded-md p-4", {
    "bg-blue-500": type === "blue",
    "bg-green-500": type === "green",
    "bg-red-500": type === "red"
  });
  return <div className={className}>{children}</div>;
}
