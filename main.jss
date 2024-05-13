document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        
        var table = document.getElementById("contactTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = name;
        cell2.innerHTML = phone;
        
        
        document.getElementById("contactForm").reset();
    });