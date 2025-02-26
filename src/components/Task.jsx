export default function Task({task}) {
    return (
        <>
            <input type="checkbox" />
            {task.text}
            <button>Edit</button>
            <button>Delete</button>
        </>
    )
}