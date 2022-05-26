import { useNavigate, useParams } from "react-router-dom"

export function TaskDetails () {
    
    const navigate = useNavigate()
    const {boardId} = useParams()

    const onGoBack = () => {
        navigate(`/board/${boardId}`)
    }

    const onDetailsClick = (ev) => {
        ev.stopPropagation()
    }

    return <section className="task-details" onClick={onGoBack}>
        <div className="task-details-container" onClick={onDetailsClick}>
        <button className="go-back-button" onClick={onGoBack}> X </button>
        <h1> Task Details</h1>
        <h1>bla</h1>
        <h1>bla</h1>
        <h1>bla</h1>
        <h1>bla</h1>
        </div>
    </section>
}