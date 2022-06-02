import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

import { setModal } from '../../store/app/app.actions'
import { utilService } from '../../services/util.service'

import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker'

export const ModalDates = ({ task, updateTask, element }) => {

  // const [searchLabel, setSearchLabel] = useState('')
  // const [taskLabels, setTaskLabels] = useState(task.labelIds)

  const modalRef = useRef()
  const [value, setValue] = React.useState(task.dueDate)
  const dispatch = useDispatch()

  const onSave = () => {
    const updatedTask = { ...task }
    updatedTask.dueDate = value
    updateTask(updatedTask)
    dispatch(setModal(null))
  }

  return (
    <div className="modal-dates" ref={modalRef}>

      <div className='display-date position'>{utilService.getYearMonthFormat(value)}</div>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="day"
          value={value}
          toolbarTitle={utilService.getYearMonthFormat(value)}
          onChange={(newValue) => {
            setValue(new Date(newValue).getTime())
          }}
          onViewChange={console.log('here')}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>


      <div className='display-date'>{utilService.getTimeFormat(value).displayDate}</div>
      <div className="save" onClick={onSave}>Save</div>
      <div className="save gray">Remove</div>

    </div>




  )

}
