5econsole.log("connected 🎉");

class Book{
    constructor(bookname, Author, booktype){
        this.bookname=bookname,
        this.Author=Author,
        this.booktype=booktype
    }
}


const getData = document.getElementsByClassName("submit_btn")[0];

getData.addEventListener('click', submitted);

function submitted(e) {
    e.preventDefault()
    
    const bookname = document.getElementsByClassName('bookname')[0].value
    const Author = document.getElementsByClassName('Author')[0].value;
    const Adventure = document.getElementsByClassName('Adventure')[0].checked;
    const Action = document.getElementsByClassName('Action')[0].checked;
    const Infotainment = document.getElementsByClassName('Infotainment')[0].checked;
    const Technology = document.getElementsByClassName('Technology')[0].checked;
    const alerts = document.getElementsByClassName('alert')[0];
    
    var booktype;
    if(Adventure)
    {
        booktype='Adventure';
    }
    else if(Action)
    {
        booktype='Action';
    }
    else if(Infotainment)
    {
        booktype='Infotainment';
    }
    else
    {
        booktype='Technology';
    }
  
    const Bookdata = new Book(bookname, Author, booktype);
    console.log(Bookdata);
    
    if(bookname.length>2 && author.length>2){
        addrow(Bookdata)
    }
    else{
        alerts.classList.remove('hidden')
        setTimeout(()=>{
            alerts.classList.add('hidden')
        },1000)
    }
    const forms = document.getElementsByTagName('form')[1].reset();
}

const tbody = document.getElementsByTagName('tbody')[0];
var count=1;
function addrow(data){
    const newrow = document.createElement('tr');
    newrow.innerHTML =  `<th scope = "row">${count++}</th>
                        <td>${data.bookname}</td>
                        <td>${data.author}</td>
                        <td>${data.booktype}</td>`
        tbody.append(newrow)
}


