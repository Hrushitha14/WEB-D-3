var count = 3;
function addStudent() 
{
    
  var studentTable = document.getElementById("myTable");
  var row = studentTable.insertRow(-1);
  var Selectcell = row.insertCell(0);
  var studentcell = row.insertCell(1);
  var advisorcell = row.insertCell(2);
  var awardcell= row.insertCell(3);
  var semestercell = row.insertCell(4);
  var typecell = row.insertCell(5);
  var budgetcell= row.insertCell(6);
  var percentagecell = row.insertCell(7);
  var deletecell = row.insertCell(8);
  var editcell = row.insertCell(9);
  
  Selectcell.innerHTML = '<input type="checkbox" id="check" onclick="checkbox(this)"><br /><br/><img class="img1" src="down.png" width="25px" onclick="img_click(this)"/>';
  studentcell.innerHTML = "Student" +" "+(++count);
  advisorcell.innerHTML = "Teacher" +" "+count;
  awardcell.innerHTML = "Approved" ;
  semestercell.innerHTML = "Fall" ;
  typecell.innerHTML = "TA" ;
  budgetcell.innerHTML = count+count+"2"+count+"44" ;
  percentagecell.innerHTML = "100%" ;
  deletecell.setAttribute('class', 'Del');
  deletecell.classList.add('action');
  deletecell.innerHTML = '<button id="Delete" onclick="Delete(this)">Delete</button>' ;
  editcell.setAttribute('class', 'Edi');
  editcell.classList.add('action');
  editcell.innerHTML=  '<button id="Edit" onclick="Edit(this)">Edit</button>';
  alert("New Record Added");


  var descriptionrow = studentTable.insertRow(-1);
  var descriptioncell = descriptionrow.insertCell(0);



  descriptionrow.setAttribute('class', 'dropDownTextArea');
  descriptionrow.setAttribute('id', 'Area');
  descriptioncell.setAttribute('colspan', '8');
  descriptioncell.innerHTML='Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />';
  
}

function checkbox(row) 
{
    if( row.checked == true)
    {

       var cell = row.parentNode.parentNode;
       cell.style.backgroundColor="yellow";
       var form = document.getElementById('myTable');
       var inputs = form.getElementsByTagName('input');
       var is_checked = false;
       for(var x = 0; x < inputs.length; x++) 
       {
            if(inputs[x].type == 'checkbox') 
            {
                is_checked = inputs[x].checked;
                if(is_checked)
                    break;
            }
        }

        if(is_checked == true)
        {
            hidden1 = document.getElementById("hidden1")
            hidden2 = document.getElementById("hidden2")
            hidden1.style.display = "table-cell";
            hidden2.style.display = "table-cell";
            const collection1 = document.getElementById("button");
            collection1.style.backgroundColor="orange";
            collection1.disabled=false;
            var show_delete = cell.getElementsByClassName('Del')[0];
            show_delete.style.display = "table-cell";
            var show_edit = cell.getElementsByClassName('Edi')[0];
            show_edit.style.display = "table-cell";
        }
        
    }
    else
    {
        var cell = row.parentNode.parentNode;
        cell.style.backgroundColor="white";
        
        var form = document.getElementById('myTable');
        var inputs = form.getElementsByTagName('input');
        var is_checked = false;

        for(var x = 0; x < inputs.length; x++) {
            if(inputs[x].type == 'checkbox') {
                is_checked = inputs[x].checked;
                if(is_checked)
                    break;
            }
        }
        var show_delete = cell.getElementsByClassName('Del')[0];
        show_delete.style.display = "none";
        var show_edit = cell.getElementsByClassName('Edi')[0];
        show_edit.style.display = "none";
        if(is_checked == true)
        {
            hidden1 = document.getElementById("hidden1")
            hidden2 = document.getElementById("hidden2")
            hidden1.style.display = "table-cell";
            hidden2.style.display = "table-cell";
            const collection1 = document.getElementById("button");
            collection1.style.backgroundColor="orange";
            collection1.disabled=false;
            var show_delete=document.getElementById("Delete");
            show_delete.style.visibility="visible";
        }
        else
        {
            hidden1 = document.getElementById("hidden1")
            hidden2 = document.getElementById("hidden2")
            hidden1.style.display = "none";
            hidden2.style.display = "none";
            const collection1 = document.getElementById("button");
            collection1.style.backgroundColor="gray";
            collection1.disabled=true;
            
        }
                
                
    }
}

function Delete(Del) 
{
    

    var cells = document.getElementById('myTable').getElementsByTagName('tr');
    var i=Del.parentNode.parentNode.rowIndex;

  
        cells[i+1].style.display = "none";
    var i=Del.parentNode.parentNode.rowIndex;
    document.getElementById('myTable').deleteRow(i);
    alert("Record of the student deleted");
    

    
      

    var form = document.getElementById('myTable');
var inputs = form.getElementsByTagName('input');
var is_checked = false;
for(var x = 0; x < inputs.length; x++) {
    if(inputs[x].type == 'checkbox') {
        is_checked = inputs[x].checked;
        if(is_checked) break;
    }
}

if(is_checked == true)
{
    const collection1 = document.getElementById("button");
    collection1.style.backgroundColor="orange";
    var show_delete=document.getElementById("Delete");
    show_delete.style.display="table-cell";
}
else
{
    const collection1 = document.getElementById("button");
    collection1.style.backgroundColor="gray";
    collection1.disabled=true;
    var show_delete=document.getElementById("Delete");
    show_delete.style.display="table-cell";
}

}

function Edit(Edi)
{
    studentName = prompt("Edit the details");
    Edi.parentNode.parentNode.getElementsByTagName("td")[1].innerHTML = studentName;
    
}

function img_click(img)
{

    var cells = document.getElementById('myTable').getElementsByTagName('tr');
    var i=img.parentNode.parentNode.rowIndex;

    if (cells[i+1].style.display == "none") {
        cells[i+1].style.display = "block";
      } else {
        cells[i+1].style.display = "none";
      }

    }

        

