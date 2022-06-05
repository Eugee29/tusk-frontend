import { Fragment, useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'

import debounce from 'lodash/debounce'

import { setFilter } from '../../store/board/board.action'

export const TaskFilter = ({ board }) => {

  const boardModule = useSelector(({ boardModule }) => boardModule)
  const [filterBy, setFilterBy] = useState(boardModule.filterBy)
  const dispatch = useDispatch()



  useEffect(() => {
    dispatch(setFilter(filterBy))
    console.log(filterBy)
  }, [filterBy])

  // useEffect(() => {
  //   debouncedChangeHandler()
  // }, [filterBy.keyword])


  // const debounceDispatch = () => {
  //   console.log(filterBy)
  //   dispatch(setFilter(filterBy))
  // }

  // const debouncedChangeHandler = useCallback(
  //   debounce(debounceDispatch, 1000)
  //   , [filterBy])

  const handleChange = ({ target }) => {
    setFilterBy({ ...filterBy, keyword: target.value })

  }

  const initials = (member) => ([...member.fullname])

  const unCheckMember = (memberId) => {
    filterBy.memberIds = filterBy.memberIds.filter(currMemberId => currMemberId !== memberId)
    setFilterBy({ ...filterBy })
  }

  const checkMember = (memberId) => {
    setFilterBy({ ...filterBy, memberIds: [...filterBy.memberIds, memberId] })
  }

  const unCheckLabel = (labelId) => {
    filterBy.labelIds = filterBy.labelIds.filter(currLabelId => currLabelId !== labelId)
    setFilterBy({ ...filterBy })
  }

  const checkLabel = (labelId) => {
    setFilterBy({ ...filterBy, labelIds: [...filterBy.labelIds, labelId] })
  }


  return (
    <section className='task-filter'>

      {/* KEYWORD */}
      <section className='by-keyword'>
        <label htmlFor='keyword' className='keyword-search-label'>Keyword</label>
        <input id='keyword' className='keyword-search' name='keyword' type='text' placeholder='Enter a keyword...' onChange={handleChange} value={filterBy.keyword} />
        <p className='instructions'>Look for tasks.</p>
      </section>

      {/* MEMBER */}
      <section className='by-member'>
        <h2 className='member-label'>Members</h2>
        {board.members.map(member =>
          <div className='member-preview' key={member._id}>
            <div className='checkbox-container' >
              {filterBy.memberIds.includes(member._id) ?
                <ImCheckboxChecked className='checkbox checked' onClick={() => unCheckMember(member._id)} />
                :
                <ImCheckboxUnchecked className='checkbox unchecked' onClick={() => checkMember(member._id)} />
              }
            </div>
            <div className='member-img-container'>{member.imgURL ? <img className='member-img' src={member.imgURL} alt={member.username} /> : <Fragment>{`${initials(member)[0]}${initials(member)[1]}`}</Fragment>}</div>
            <h3 className='member-name'>{member.fullname}</h3>
          </div>
        )}
      </section>

      {/* LABEL */}
      < section className='by-label' >
        <h2 className='labels-label'>Labels</h2>
        {
          board.labels.map(label =>
            <div className='label-preview' key={label.id}>
              <div className='checkbox-container' >
                {filterBy.labelIds.includes(label.id) ?
                  <ImCheckboxChecked className='checkbox checked' onClick={() => unCheckLabel(label.id)} />
                  :
                  <ImCheckboxUnchecked className='checkbox unchecked' onClick={() => checkLabel(label.id)} />
                }
              </div>
              <div className='label' style={{ backgroundColor: label.color }}>{label.title}</div>
            </div>
          )
        }
      </section>
    </section>
  )
}