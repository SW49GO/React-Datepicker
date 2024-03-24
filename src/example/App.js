import './index.css'
import { DatePickerReact } from '../lib'

function App() {
  const handleSeletedDate = (dateSelected) =>{
    console.log('dateSelected:', dateSelected)
    
  }
  return (
   <div style={{margin:'5rem'}}>
    <DatePickerReact onSelect={handleSeletedDate} language={'en'} textLabel={'Date of birth'} bckColor={'red'} dateColor={'yellow'}/>
   </div>
  )
}

export default App
