import { GroupPreview } from "./group-preview"

export function GroupList({ groups }) {
    console.log(groups)

    return <section className="group-list">
        {groups.map(group => {
            return (<div key={group.id}>
                <GroupPreview group={group} />
            </div>)
        })}
    </section>
}