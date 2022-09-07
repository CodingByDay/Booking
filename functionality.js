

 function toggle() {
    if (document.getElementById("myForm").style.display !== "block") {    
        document.getElementById("myForm").style.display = "block";
    } else {    
        document.getElementById("myForm").style.display = "none";  
    }     
 }

function AddElement() {

    var values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
 
    var select = document.createElement("select");
    select.name = "Years";
    select.id = "years"
 
    for (const val of values)
    {
        var option = document.createElement("option");
        option.value = val;
        option.text = val.charAt(0).toUpperCase() + val.slice(1);
        select.appendChild(option);
    }
 
    var label = document.createElement("label");
    label.innerHTML = "Age of the child: "
    label.htmlFor = "years";
 
    document.getElementById("dinamic").appendChild(label).appendChild(select);
}
/**
 * This function is called when the user clicks on the form button.
 * @param {*} name 
 */
 function increment_decrement(name) {
    switch (name) { 

        case "up_adult":
            try {
            var counter = document.getElementById("adult_counter").value;
            var integer_counter = parseInt(counter);
            if(isNaN(integer_counter)) {
                integer_counter = 0;
            }

            counter = integer_counter + 1;
            if(counter < 0) {
                counter = 0;
            }
            document.getElementById("adult_counter").value = '';
            document.getElementById("adult_counter").value = counter;
            AddElement();
            } catch (e) {
            } finally
            
            { break; }



        case "down_adult":
            try {
                var counter = document.getElementById("adult_counter").value;
                var integer_counter = parseInt(counter);
                if(isNaN(integer_counter)) {
                    integer_counter = 0;
                }
                counter = integer_counter - 1;
                if(counter < 0) {
                    counter = 0;
                }
                document.getElementById("adult_counter").value = '';
                document.getElementById("adult_counter").value = counter;
            } catch (e) {   
            } finally 
            
            { break; }  



        case "up_child":
            try {
                var counter = document.getElementById("child_counter").value;
                var integer_counter = parseInt(counter);
                if(isNaN(integer_counter)) {
                    integer_counter = 0;
                }

                counter = integer_counter + 1;
                if(counter < 0) {
                    counter = 0;
                }
                document.getElementById("child_counter").value = '';
                document.getElementById("child_counter").value = counter;
            } catch (e) { 
            } finally 
            
            { break; }  
            
            

        case "down_child":
            try {
                var counter = document.getElementById("child_counter").value;
                var integer_counter = parseInt(counter);
                document.getElementById("child_counter").value = '';
                if(isNaN(integer_counter)) {
                    integer_counter = 0;
                }
                
                counter = integer_counter - 1;
                if(counter < 0) {
                    counter = 0;
                }
                document.getElementById("child_counter").value = counter;
            } catch (e) {   
            } finally 
            
            { break; }
    }
 }