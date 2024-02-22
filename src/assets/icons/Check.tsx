const Check = ({ color, size }: Props) => {
  color = color || 'green'
  size = size || '17'
  return (
    <svg height={size} viewBox="0 0 13 13" width={size}>
        <path fill={color} d="m2.98388672 5.98193359 1.99316406 1.85986329 3.79589844-3.56103516.7109375.76171875-4.50048828 4.22119141-2.71044922-2.52001954z" />
    </svg>
  )
}

export default Check

type Props = {
  color?: string 
  size?: string 
}
