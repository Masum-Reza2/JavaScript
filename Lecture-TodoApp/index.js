let key = document.getElementsByTagName('input')[0];
let note = document.getElementsByTagName('input')[1];

let myfunc = () =>{
    localStorage.setItem(key.value,note.value)
    key.value = '';
    note.value = '';
    let infobox = document.getElementById('infobox');
    infobox.innerHTML = 'Saved Successfully'
}

let myfunc2 = ()=>{
    localStorage.removeItem(localStorage.key(0));
    let infobox = document.getElementById('infobox');
    infobox.innerHTML = 'Deleted Successfully'
    show_note.innerHTML = ''
}

let show_note = document.getElementById('show_note');

let myfunc3 = () =>{
    show_note.innerHTML = localStorage.getItem(localStorage.key(0));
    let infobox = document.getElementById('infobox');
    infobox.innerHTML = 'Showing you the result'
}

let myfunc4 = () => {
    show_note.innerHTML = ""; // Clear the existing content
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      show_note.innerHTML += value + "<br>";
    }
    infobox.innerHTML = 'Showing All Notes'
  };

  let myfunc5 = () =>{
    localStorage.clear()
    infobox.innerHTML = 'Cleared all notes'
    show_note.innerHTML = ''
  }