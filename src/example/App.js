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
                     styleLabel={{fontSize:'1.5rem'}}
                     styleInput={{width:'10rem'}}
                     iconInputColor={'black' }
                     bckColor={'blue'}
                     dateColor={'red'}/>
   </div>
  )
}

export default App
