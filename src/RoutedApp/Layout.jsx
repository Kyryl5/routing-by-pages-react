import { useState } from 'react'
import onClickHandler from '../helpers/onClickHandler'
import CircularProgress from '@mui/material/CircularProgress'
import LessonsList from '../Components/LessonsList'

export default function Layout() {
  const [lessonsData, setLessonsData] = useState([])
  const [urlWord, setUrlWord] = useState('')
  const [notFindNotification, setNotFindNotification] = useState('')
  const [loading, setLoading] = useState(false)

  function onChangeHandler(e) {
    setUrlWord(e.target.value)
  }

  return (
    <>
      <header>
        <div className="input-button-group">
          <input
            onChange={onChangeHandler}
            type="text"
            placeholder="Find the lesson..."
          />
          <button
            onClick={(e) =>
              onClickHandler(
                e,
                urlWord,
                setLessonsData,
                setNotFindNotification,
                setLoading
              )
            }
          >
            Find lesson
          </button>
        </div>
      </header>
      <main>
        {loading ? <CircularProgress color="inherit" /> : ''}
        <div>
          {lessonsData.length > 0 ? (
            <LessonsList lessonsData={lessonsData} />
          ) : (
            <div>{notFindNotification}</div>
          )}
        </div>
      </main>
    </>
  )
}
