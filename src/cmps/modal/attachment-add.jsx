export const AttachmentAdd = () => {
  return (
    <section className="attachment-add">
      <button className="computer">Computer</button>
      <hr />
      <form>
        <label htmlFor="linkInput"></label>
        <input id="linkInput" className="link-input" type="text" placeholder="Paste any link here..." />
      </form>
    </section>
  )
}