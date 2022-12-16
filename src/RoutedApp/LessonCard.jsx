import { Paper } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { useLoaderData } from 'react-router-dom'

export default function LessonCard() {
  const {
    type,
    name,
    title,
    keyPoints,
    prerequisite,
    links,
    hometask,
    youtube,
  } = useLoaderData()

  return (
    <Paper sx={{ p: 3, mt: 4 }} style={{ backgroundColor: 'lightgrey' }}>
      <h2>
        {type} {name} "{title}"
      </h2>
      {keyPoints && (
        <ul className="keypoints">
          <h4>Lesson Topics</h4>
          {keyPoints?.map((keypoint, i) => (
            <li key={i}>
              <p>{keypoint}</p>
            </li>
          ))}
        </ul>
      )}
      {prerequisite && (
        <ul>
          <h4>Prepare for lesson</h4>
          {prerequisite?.map((prerequisite, i) => (
            <li key={i}>
              <p>{prerequisite}</p>
            </li>
          ))}
        </ul>
      )}
      {links && (
        <ul>
          <h4>Links</h4>
          {links?.map((link, i) => (
            <li key={i}>
              <a href={link[1]}>{link[0]}</a>
            </li>
          ))}
        </ul>
      )}
      {hometask && (
        <ul>
          <h4>Hometask</h4>
          {hometask?.map((hometask, i) => (
            <li key={i}>
              <p>{hometask}</p>
            </li>
          ))}
        </ul>
      )}
      {youtube && (
        <ul>
          <h4>Lesson video</h4>
          <a target="_blank" href={youtube}>
            <YouTubeIcon fontSize="large" color="error" />
          </a>
        </ul>
      )}
    </Paper>
  )
}
