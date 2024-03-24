import { FaCaretLeft, FaCaretRight,  FaHome, FaCalendarDay} from "react-icons/fa"
import { DropdownReact } from "dropdown-react-sw49go"
import  * as parms  from './parameters'
import React, { useState, useEffect, useRef } from "react"
import PropTypes from 'prop-types'

function DatePickerReact({onSelect, 
                          textLabel, 
                          idInput, 
                          language, 
                          positionDPR,
                          bckColor,
                          dateColor}){
    // Default French Values
    let objMonth = parms.frMonth
    let days = parms.frDay
    let textPlaceholder = parms.frPlaceholder
    // Switch language to display informations
    switch (language){
        case 'fr': objMonth = parms.frMonth
                   days = parms.frDay
                   textPlaceholder = parms.frPlaceholder
            break
        case 'en': objMonth = parms.enMonth
                    days = parms.enDay
                    textPlaceholder = parms.enPlaceholder
            break
        case 'de': objMonth = parms.deMonth
                    days = parms.deDay
                    textPlaceholder = parms.dePlaceholder
            break
        default : 
    }
    // Position datepicker over or under the Input
    const position = positionDPR ==='top' ? {top:'-535%'} : {top:'120%'}

    const mergedContainer = {
        ...parms.styleDatepicker.container,
        backgroundColor: bckColor ?? parms.styleDatepicker.container,
        ...position
    }

    // Default value for the Date
    const date = new Date()
    const todayDate = date.getDate()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()

 
    // States for Day/Month/year
    const [currentDate, setCurrentDate]= useState(todayDate)
    const [choiceMonth, setChoiceMonth] = useState(currentMonth)
    const [choiceYear, setChoiceYear] = useState(currentYear)

    // Number of Days in the chosen month and year
    const nbDaysofMonth = new Date(choiceYear, choiceMonth + 1, 0).getDate()

    /**
     * Function to change the Month and Year after December or before January
     * @param {string} choice 
     */
    const ChangeMonth=(choice)=>{
        let newMonth
        let newYear = choiceYear
        if(choice==='next'){ 
            newMonth = (choiceMonth + 1) % 12
            if (newMonth === 0) {
                newYear++
            }
            }else{
            newMonth = (choiceMonth - 1 + 12) % 12
            if (newMonth === 11) {
                newYear--
            }
        }
        setChoiceMonth(newMonth)
        setChoiceYear(newYear)
    }
    // State for the firt day of the month chosed
    const [firstDaysMonth, setFirstDaysMonth]= useState()
    useEffect(()=>{
        const firstDayOfMonth = new Date(choiceYear, choiceMonth, 1)
        const dayOfWeek = firstDayOfMonth.getDay()
        setFirstDaysMonth(dayOfWeek) 
    }, [choiceYear, choiceMonth])

    // State to store an array of years
    const [yearsDrop, setYearsDrop] = useState([])
    const startYear = 1950
    useEffect(() => {
        const yearArray = []
        for (let i = startYear; i <= currentYear + 50; i++) {
        yearArray.push({ name: `${i}` })
        }
        setYearsDrop(yearArray)
    }, [currentYear])

    // State for the selected day
    const [selectedDay, setSelectedDay] = useState(todayDate)
    // State opening of the DatePicker
    const [isDateOpen, setIsDateOpen]=useState(false)

    const HandleDayClick=(dayIndex)=>{
        setSelectedDay(dayIndex === selectedDay ? selectedDay : dayIndex)
        setCurrentDate(dayIndex)
    }
    const handleMonth=(selectOption)=>{
        const selectedMonthIndex = objMonth.findIndex(month => month.name === selectOption)
        setChoiceMonth(selectedMonthIndex)
    }
    const handleYear=(selectOption)=>{
        setChoiceYear(selectOption)
    }
    // When click on Icon Home
    const StartHomeDate=()=>{
        setChoiceMonth(currentMonth)
        setChoiceYear(currentYear)
        setCurrentDate(todayDate)
        setSelectedDay(todayDate)
    }
    // When click on Cancel button
    const CancelDatePicker=()=>{
        setIsDateOpen(false)
        StartHomeDate()
    }
    // State placeholder of the Input
    const [dateChoose, setDateChoose]=useState('')

    // Ref for Input
    const inputRef = useRef(null)

    // Handle Icon click
    const handleClickIcon = () => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
      }

    const ValidDatePicker=()=>{
        const currentMonth = choiceMonth +1
        const validDate = `${selectedDay< 10 ? '0' + selectedDay : selectedDay}/${currentMonth< 10 ? '0' + currentMonth : currentMonth}/${choiceYear}`
        setDateChoose(validDate)
        onSelect(validDate)
        setIsDateOpen(false)
        StartHomeDate()
    }
    const handleFocus=()=>{
        setIsDateOpen(true)
    }
    // Manage Enter Key
    const handleKeyEnter = (event) => {
        if (event.keyCode === 13) {
            ValidDatePicker()
        }
      }

    return (
    <div style={parms.styleDatepicker.datepickerStyle}>
        <div>
             <label style={parms.styleDatepicker.labelStyle} htmlFor={idInput}>{textLabel}</label>
             <div style={parms.styleDatepicker.dateInput}>
                <input ref={inputRef} id={idInput} style={parms.styleDatepicker.dateInputInput} type="text" placeholder={textPlaceholder} defaultValue={dateChoose} required onClick={()=>setIsDateOpen(true)}  onFocus={handleFocus} onKeyDown={handleKeyEnter}/>
                <FaCalendarDay style={parms.styleDatepicker.dateIcon} onClick={handleClickIcon}/>
            </div>
        </div>
       {isDateOpen && <div style={mergedContainer}>
            <div style={parms.styleDatepicker.header}>
                <FaCaretLeft onClick={() =>ChangeMonth('preview')} style={{paddingRight:5}}/>
                <DropdownReact data={objMonth} initialOption={objMonth[choiceMonth].name}  onSelect={handleMonth} styleContainer={{width:'10rem',paddingRight:'.3125rem'}} styleContainerList={{width:'87%'}}/>
                {yearsDrop.length>0 && <DropdownReact data={yearsDrop}  initialOption={choiceYear} onSelect={handleYear} styleContainer={{width:'8rem'}} styleContainerList={{width:'87%'}}/>}
                <FaHome style={{padding:5, fontSize:'2rem'}} onClick={()=>StartHomeDate()}/>
                <FaCaretRight onClick={() =>ChangeMonth('next')}/>
            </div>
            <div>
                <table style={parms.styleDatepicker.calendar}>
                    <thead>
                        <tr>
                        {days.map((item,index)=>(
                            <th key={index}>{item.slice(0,2).toLowerCase()} </th>
                        ))}
                        </tr>
                    </thead>
                    <tbody>
                    {(() => {
                        const rows = []

                        // Loop for each week ->0 to firstDaysMonth = empty box
                        for (let i = 0; i < Math.ceil((firstDaysMonth + nbDaysofMonth) / 7); i++) {
                            const rowItems = []

                            // Loop for each day of the week
                            for (let j = 0; j < 7; j++) {

                                const dayIndex = i * 7 + j - firstDaysMonth + 1

                                //Check if it's a valid day of the month
                                if (dayIndex > 0 && dayIndex <= nbDaysofMonth) {
                                rowItems.push(
                                    <td key={dayIndex} style={{
                                        textAlign:'center',
                                        color: dayIndex === currentDate ? '#fff' : '#000',
                                        backgroundColor: dayIndex === currentDate ?(bckColor ?? '#3fb0b8')  : dayIndex === selectedDay ? (bckColor ?? '#3fb0b8') : '#fff',
                                        borderRadius: '5px',
                                        fontWeight: dayIndex === currentDate || dayIndex === selectedDay ? 'bold' : 'normal',
                                      }}
                                      onClick={() => HandleDayClick(dayIndex)}
                                      onMouseOver={(event) => {
                                        event.target.style.backgroundColor = dateColor ?? '#3fb0b8'
                                        event.target.style.color = '#fff'
                                      }}
                                      onMouseOut={(event) => {
                                        event.target.style.backgroundColor = dayIndex === selectedDay ? (bckColor ?? '#3fb0b8') : '#fff'
                                        event.target.style.color = dayIndex === selectedDay ? '#fff' : '#000'
                                      }}
                                    >
                                      {dayIndex}</td>
                                )
                                } else {
                                rowItems.push(<td key={`empty-${j}`} style={{backgroundColor:'transparent'}}></td>)
                                }
                            }
                            rows.push(<tr key={i}>{rowItems}</tr>)
                        }
                        return rows
                    })()}
                    </tbody>
                </table>
                <div style={parms.styleDatepicker.dateFooter}>
                    <button style={parms.styleDatepicker.dateFooterButton} onClick={()=>CancelDatePicker()}>Annuler</button>
                    <button style={parms.styleDatepicker.dateFooterButton} onClick={()=>ValidDatePicker()}>Ok</button>
                </div>
            </div>
        </div>
        }
    </div>)
}

DatePickerReact.propTypes = {
    onSelect: PropTypes.func, 
    textLabel: PropTypes.string, 
    idInput: PropTypes.string,
    language: PropTypes.string,
    positionCalendar: PropTypes.string,
    bckColor: PropTypes.string,
    dateColor: PropTypes.string
}
export default DatePickerReact