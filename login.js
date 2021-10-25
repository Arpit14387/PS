function execute() {

    var i=document.getElementById("ID").value;
    var p=document.getElementById("pass").value;
    
    if(i==="arpit" & p==="14387")
    {
        var x=0;
        window.location = "https://youtu.be/orJSJGHjBLI";
    }
    else
    {
    var x=1;
    alert("try again...");
    window.location = "index.html";
    }
    }
    
    
    var input = document.getElementById("pass");
    input.addEventListener("keyup", function(event) {
        // Number 13 is the "Enter" key on the keyboard
        if (event.key === 'Enter') {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          execute();
        }
      });
