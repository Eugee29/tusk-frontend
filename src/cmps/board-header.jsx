export function BoardHeader ({board}) {
    // console.log(board)

    return <section className="board-header">
        <h1> {board.title} </h1>
        <button> ⭐ </button>
    </section>
}