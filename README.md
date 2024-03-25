# Datepicker React components created using `create-react-app` by SW49GO

## Presentation :
This is a reusable React component that allows you to display a custom Datepicker in your application.

The component is TypeScript compatible and includes a type definition file (DatepickerReact.d.ts) for an improved development experience. In a TypeScript project, the TypeScript compiler will automatically use this definition file.

### Examples Custom style :
<img src="https://raw.githubusercontent.com/SW49GO/React-Datepicker/master/public/assets/example.jpg" alt="datepicker"/>

## Installing the package in your project:
```bash
npm i datepicker-react-sw49go
```
## Prerequisites :
- Node.js v18.16.0

## Dependencies to install :
- "react": "^18.2.0"
- "react-dom": "^18.2.0"
- "prop-types": "^15.8.1"
- "react-icons": "^5.0.1"
- "dropdown-react-sw49go": "^0.1.2"

## Imported the component into your project :
```
import { DatePickerReact } from 'datepicker-react-sw49go'

function App() {
  const handleSeletedDate = (dateSelected) =>{
    console.log('The date selected in datepicker:', dateSelected)
  }

  return (
   <div>
    <DatePickerReact onSelect={handleSeletedDate} 
                     language={'fr'} 
                     textLabel={'Votre texte ici' } 
                     iconInputColor={'blue' }
                     positionDPR={'top'}
                     bckColor={'blue'}
                     dateColor={'red'}/>
   </div>
  )
}
```

# Using the different component options (Props):

- textLabel (string) : the text for your Label
- idInput (string) : the name for the id of input
- iconInputColor (string) : color for calendar icon in input
- language (string) : language for informations of datepicker ('fr' default, 'en', or 'de')
- positionDPR (string) : position of the datepicker, 'bottom' is default position, 'top' for above the input
- bckColor (string) : background color of the datepicker
- dateColor (string) : color of the day when mouseOver
- onSelect (function) : callback function to return the date choosen

#### 📌 See Dropdown Configuration for the 2 dropdowns in the datepicker.