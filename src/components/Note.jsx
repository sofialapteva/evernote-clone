const Note = (props) => {
  const styles = {
    button: 'text-sm bg-green-400 rounded-full px-1 mx-1 hover:bg-green-500 focus:outline-none'
  }
  return (<div className='my-10 border-2 border-gray-200 p-5 hover:bg-gray-100'>
    <strong>{props.title}</strong>
    <button onClick={async () => { await fetch(`http://localhost:3001/delete/${props.id}`); document.location.reload(); }} className={styles.button}>Delete</button>
    <button className={styles.button}>Edit</button>
    <hr />
    <p>{props.text}</p>
    <small>{props.tags[0].map(el => (<a href={`/tags/${el}`} className='pr-2'>{el}</a>))}</small>
  </div>);
}

export default Note;
