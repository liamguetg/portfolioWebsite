export function Card({ children, className, onClick, ...props }) {
  return <div className={`rounded-lg bg-white ${className}`} onClick={onClick} {...props}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}