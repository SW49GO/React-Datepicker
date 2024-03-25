import './index.css'
import { DatePickerReact } from '../lib'

function App() {
  const handleSeletedDate = (dateSelected) =>{
    console.log('dateSelected:', dateSelected)
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

export default App
