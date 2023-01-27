export function Card({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) {
  return (
    <div className={`rounded-md shadow-md ${className}`}>
      {children}
    </div>
  );
}
