const form = document.getElementById('my-form');
form.addEventListener('submit',store);
function store(e){
    e.preventDefault()
    const name = document.getElementById('exampleInputEmail1').value;
    const pass = document.getElementById('exampleInputPassword1').value;
    const userdetail= {
        name:name,
        pass:pass
    }
    localStorage.setItem('Name',userdetail.name)
    localStorage.setItem('Pass',userdetail.pass)
}