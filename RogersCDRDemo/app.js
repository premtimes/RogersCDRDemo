function addRow(jobId, searchCriteria) {
      
    var myName = document.getElementById("ascii");
    var age = document.getElementById("asn1");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 //type="image" src="logg.png"  Results-Button
 //<img src="images/refresh.png" alt="Refresh" style="width:30px;height:22px;">
   // row.insertCell(0).innerHTML= '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';
   //
   
 //  row.insertCell(0).innerHTML= '<img src="images/stop.png" id="stopJob" alt="Stop" style="width:30px;height:30px;"  //value = "Stop" onClick="Javacsript:stopJob(this)">';
   
    row.insertCell(0).innerHTML= '<button class="btn btn-sm btn-warning" id="stopJob"  onClick="Javacsript:stopJob(this)"><span class="glyphicon glyphicon-ban-circle"></span> Kill </button>';
   
	 row.insertCell(1).innerHTML= '<button class="btn btn-sm btn-danger" type="submit" onClick="Javacsript:deleteRow(this)"> <span class="glyphicon glyphicon-trash"></span> Delete</Button>';
	 
	// row.insertCell(1).innerHTML= '<td contenteditable='true'></td> onClick="Javacsript:listFiles()">';
 row.insertCell(2).innerHTML= '<button class="btn btn-sm btn-success" type="submit" id="tableResult"onClick="Javacsript:showResult()"><span class="glyphicon glyphicon-file"></span> Result</button>';  
    row.insertCell(3).innerHTML= jobId;
	row.insertCell(4).innerHTML= '<label id="lbltipAddedComment"> Running</label>  ';
    row.insertCell(5).innerHTML= '/root/hsm/cdr/job/'+jobId;
	//row.insertCell(5).innerHTML= '<img onmouseover="showSearchCriteria()" src="smiley.gif" alt="Smiley">';
    row.insertCell(6).innerHTML= '<button class="btn btn-sm btn-primary" type="submit"  onClick="Javacsript:showSearchCriteria()"><span class="glyphicon glyphicon-search"></span> Search Criterion</Button>';
	row.insertCell(7).innerHTML= '398562';
	 row.insertCell(8).innerHTML= '';

	row.insertCell(9).innerHTML= '60 Sec';
 //  addResultRow();
 
}
function label() {

  alert("rrr");
  

}

function showResult() {

  $("#example").toggle('slow');

   // $('#example').DataTable();

  $("#jobResult").toggle('slow');

$("#hideResult").text("Hide");
$('#example').DataTable();
}
function showSearchCriteria() {
	alert($("#costumeQuery").val());

}


function addResultRow() {
          
    
    var table = document.getElementById("resultData");

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
	

	// row.insertCell(0).innerHTML= '<input type="Checkbox" value = "Delete" onClick="Javacsript:deleteRow(this)">';
	 row.insertCell(0).innerHTML= '<input type="Checkbox" value = "Delete" >';
	 alert("jjjlll");
	 
	 row.insertCell(1).innerHTML= ShowFolderFileList("//C:/D-Drive/menubar/css");
	 alert("1");
	 

   
 
}





	
 function ShowFolderFileList(folderspec){
 alert("2");
        var s = "";
        var f = fso.GetFolder(folderspec);

    // recurse subfolders
    var subfolders = new Enumerator(f.SubFolders);
    for(; !subfolders.atEnd(); subfolders.moveNext()){s+=ShowFolderFileList((subfolders.item()).path);}  

    // display all file path names.
    var fc = new Enumerator(f.files);
        for (; !fc.atEnd(); fc.moveNext()){s += fc.item() + "<br>";}

        return s; 
    }

    function listFiles(){
		alert("5")
    document.getElementById('files').innerHTML = ShowFolderFileList('css');
    }
 
function deleteRow(obj) {
      
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
   // $("#jobResult").load(location.href + " #jobResult");
	$("#jobResult").load(location.href+" #jobResult>*","");
	
}
 
function stopJob(obj) {
       document.getElementById('lbltipAddedComment').innerHTML = 'Stopped';
  //  var index = obj.parentNode.parentNode.rowIndex;
   // var table = document.getElementById("myTableData");
    
    
}
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}

