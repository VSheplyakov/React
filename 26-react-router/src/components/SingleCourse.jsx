import { useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import courses from "../data/courses"
// import NotFound from "./NotFound"


function SingleCourse() {
  const params = useParams()
  const navigate = useNavigate()
  const course = courses.find(el => el.slug === params.courseSlug)

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' })
    }
  }, [course, navigate])

  // Simply show NotFound component
  // if (!course) {
  //   return <NotFound />
  // }

  return (
    <>
      <h1>{course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>{course?.id}</h3>
      {/* <Link to='/courses'>All Courses</Link>  */}
      {/* статична лінка */}
      <Link to='..' relative="path">All Courses</Link>
      {/* відносна лінкаб якщо зміняться шляхи то буде працювати*/}
    </>
  )
}

export default SingleCourse