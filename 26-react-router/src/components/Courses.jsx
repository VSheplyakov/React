import { Link, useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import courses from '../data/courses'
import { useEffect, useState } from 'react'

const SORT_KEYS = ['title', 'slug', 'id']

function sortCourses(courses, key) {
  const sortedCourses = [...courses]
  if (!key || !SORT_KEYS.includes(key)) {
    return sortedCourses
  }
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1))
  return sortedCourses
}

function Courses() {
  // const course = () => { courses.map(el => <p>{el.title}</p>) }
  // const courseId = () => {
  // courses.map((el) => el.id)
  // }
  const location = useLocation()
  const query = queryString.parse(location.search)
  const navigate = useNavigate()
  const [sortKey, setSortKey] = useState(query.sort)
  const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))
  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate('.')
      setSortKey()
      setSortedCourses([...courses])
    }
  }, [sortKey, navigate])

  return (
    <>
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      {sortedCourses.map((el) => (
        <div key={el.id}>
          <Link to={el.slug} className='courseLink'>{el.title}</Link>
        </div>
      ))}
    </>
  )
}

export default Courses