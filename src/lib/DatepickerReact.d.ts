import * as React from 'react'

// Declaration of the different typings of the Component for compatibility with Typescrypt users

interface DatepickerReactProps {
  textLabel?: string;
  idInput?: string;
  iconInputColor?: string;
  language?: string;
  positionDPR?: string;
  bckColor?: string;
  dateColor?: string;
  onSelect: (...args: any[]) => void
}
declare const DatepickerReact: React.FunctionComponent<DatepickerReactProps>

export default DatepickerReact