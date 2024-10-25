
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...props }: ButtonProps): JSX.Element {
  return (
    <button
      {...props}
    >
      {children}
    </button>
  )
}