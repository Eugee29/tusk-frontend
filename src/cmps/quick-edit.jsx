
import { useState } from "react"
import { utilService } from "../services/util.service"
import { LabelList } from "./group/label-list"
import { TaskPreviewIcons } from "./group/task-preview-icons"

export function QuickEdit({ toggleQuickEdit, task,
    board, getTimeStyle, getChecklistLength,
    onUpdateBoard, toggleLabels,
    isLabelsOpen, element, getTaskStyle, getTaskClass }) {

    const [taskText, setTaskText] = useState(task.title)

    const handleFocus = (event) => {
        event.target.select()
        // event.target.select()
    }

    return <section className="quick-edit-container" onClick={toggleQuickEdit} >
        <div className="quick-edit" onClick={(ev) => ev.stopPropagation()} style={utilService.getPosition(element)}>
            <section className="quick-edit-body" style={{ width: element.offsetWidth }}>
                <div className={getTaskClass(true)} style={getTaskStyle(true)}>

                    {task.style.imgURL && task.style.isCover &&
                        <img style={{height: element.offsetHeight }} src={task.style.imgURL} alt="..." />
                    }

                    {task.style.imgURL && !task.style.isCover &&
                        <img src={task.style.imgURL} alt="..." />
                    }

                    <div className='task-info'>
                        {!!task.labelIds.length && (!task.style.isCover) && <LabelList board={board} labelIds={task.labelIds} toggleLabels={toggleLabels} isLabelsOpen={isLabelsOpen} />}

                        <textarea autoFocus defaultValue={taskText} onFocus={handleFocus}></textarea>
                        <TaskPreviewIcons task={task} board={board} getTimeStyle={getTimeStyle}
                            getChecklistLength={getChecklistLength} onUpdateBoard={onUpdateBoard} />
                    </div>
                </div>
                <button className="save-btn"> Save </button>
            </section>
            <section className="quick-edit-actions">
                <button className="quick-edit-btn"> Open card </button>
                <button className="quick-edit-btn">  Edit labels </button>
                <button className="quick-edit-btn"> Change members </button>
                <button className="quick-edit-btn"> Change cover </button>
                <button className="quick-edit-btn"> Edit dates </button>
                <button className="quick-edit-btn"> Archive </button>
            </section>
        </div>
    </section>

}