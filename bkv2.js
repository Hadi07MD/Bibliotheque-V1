

form.addEventListener('submit', (e) => {
  let messages = []
  if (title.value === '' || title.value == null) {
    messages.push('WRONG')
  }
  if (title.value.length >= 30) {
    messages.push('title must be Less than 30 characters')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElementtitle.innerText = messages.join(', ')
  }

})

form.addEventListener('submit', (e) => {
  let messages = []
  if (author.value === '' || author.value == null) {
    messages.push('WRONG')
  }
  if (author.value.length >= 30) {
    messages.push('Author must be Less than 30 characters')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElementwriter.innerText = messages.join(', ')
  }

})

form.addEventListener('submit', (e) => {
  let messages = []
  if (languages.value === '' || languages.value == null) {
    messages.push('WRONG')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElementlanguage.innerText = messages.join(', ')
  }

})

form.addEventListener('submit', (e) => {
  let messages = []
  if (rd.value === '' || rd.value == null) {
    messages.push('WRONG')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElementcategory.innerText = messages.join(', ')
  }

})

form.addEventListener('submit', (e) => {
  let messages = []
  if (date.value === '' || date.value == null) {
    messages.push('WRONG')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElementdate.innerText = messages.join(', ')
  }

})

form.addEventListener('submit', (e) => {
  let messages = []
  if (price.value === '' || price.value == null) {
    messages.push('WRONG')
  }
  if (messages.length > 0) {
    e.preventDefault()
    errorElementprice.innerText = messages.join(', ')
  }

})




var selectedRow = null;
function onFormSubmit(e) {
  event.preventDefault();
  var formData = readFormData();
  if (selectedRow === null) {
    insertNewRecord(formData);
  }
  else {
    updateRecord(formData);
  }
  resetForm();
}
function readFormData() {
  var formData = {};
  formData["title"] = document.getElementById("title").value;
  formData["author"] = document.getElementById("author").value;
  formData["languages"] = document.getElementById("languages").value;
  formData["rd"] = document.querySelector('input[name="book-category"]:checked').value;
  formData["date"] = document.getElementById("date").value;
  formData["price"] = document.getElementById("price").value;
  return formData;
}
function insertNewRecord(data) {
  var header = document.getElementById("bookstor").getElementsByTagName('tbody')[0];
  var newRow = header.insertRow(header.length);
  var cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.title;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.author;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.languages;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.rd;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.date;
  var cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.price;
  var cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<button onClick='onEdit(this)'>Edit</button>
       <button onClick='onDelete(this)'>Delete</button>`
}


function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById('title').value = selectedRow.cells[0].innerHTML;
  document.getElementById('author').value = selectedRow.cells[1].innerHTML;
  document.getElementById('languages').value = selectedRow.cells[2].innerHTML;
  document.getElementsByClassName('rd').value = selectedRow.cells[3].innerHTML;
  document.getElementById('date').value = selectedRow.cells[4].innerHTML;
  document.getElementById('price').value = selectedRow.cells[5].innerHTML;
}


function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.title;
  selectedRow.cells[1].innerHTML = formData.author;
  selectedRow.cells[2].innerHTML = formData.languages;
  selectedRow.cells[3].innerHTML = formData.rd;
  selectedRow.cells[4].innerHTML = formData.date;
  selectedRow.cells[5].innerHTML = formData.price;
}
function onDelete(td) {

  if (confirm('Do you want to delete this book?')) {
    row = td.parentElement.parentElement;
    document.getElementById('tableID').deleteRow(row.rowIndex);
  }
  resetForm(); 
  // alert("this is the result of the else function")
}

function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('languages').value = '';
  document.getElementsByClassName('rd').value = '';
  document.getElementById('date').value = '';
  document.getElementById('price').value = '';
}

function validate() {
  isValid = true;
  if (document.getElementById("title").value == "" ) {
    isValid = false;
    
    document.getElementById("titleValidationError").classList.remove("hide");
  } 
  else if(title.value.length > 30) {
    alert("the titile must be less than 30 characters")
  }
  else {
    isValid = true;
    if (!document.getElementById("titleValidationError").classList.contains("hide"))
      document.getElementById("titleValidationError").classList.add("hide");
  }
  return isValid;
}
const btn = document.querySelector('#btn');

  // handle button click
rd.onclick = function () {
    const rbs = document.querySelectorAll('input[name="choice"]');
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    alert(selectedValue);
};

  

