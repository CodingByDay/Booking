

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
    var counter = document.getElementById("child_counter").value;
    var integer_counter = parseInt(counter);
    select.id = `years_${integer_counter}`;
 
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
    select.addEventListener('change', function(e) {
        updateCRUD(e.target.id);
    });
    document.getElementById("dinamic").appendChild(label).appendChild(select);

    incHeight();
}




function updateCRUD(id) {
    var element = document.getElementById(id);
    var selected = element.value;
    var id = id.split("_")[1];
    people.children[id] = selected;
}

function incHeight() {
    var el = document.getElementById("myForm")
    var height = el.offsetHeight;
    var newHeight = height + 25;
    el.style.height = newHeight + 'px';
}
function decHeight() {
    var el = document.getElementById("myForm")
    var height = el.offsetHeight;
    var newHeight = height - 25;
    el.style.height = newHeight + 'px';
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
            UpdateUI("adult", counter);
            listCRUD("adult", "i", counter)
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
                UpdateUI("adult", counter);
                listCRUD("adult", "d", counter)

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
                AddElement();

                document.getElementById("child_counter").value = '';
                document.getElementById("child_counter").value = counter;
                UpdateUI("child", counter);
                listCRUD("child", "i", 1)

            } catch (e) { 
            } finally 
            
            { break; }  
            
            

        case "down_child":
            try {
 
                DeleteElement()

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
                UpdateUI("child", counter);
                listCRUD("child", "d", 1)


            } catch (e) {   
            } finally 
            
            { break; }
    }
 }



 function listCRUD(type, i_d, age, id) {
  
        if(type == "child" && i_d == "i") {
            people.addChild();
        } else if(type == "child" && i_d == "d") {
            people.removeChild();
        } else if(type == "adult" && i_d == "i") {  
            people.incrementAdults();
        } else {
             people.removeAdult();
        }
    
 }

class Human {
    constructor(type, age) {
        this.type = type;
        this.age = age;
    }
} 

class People {
    constructor() {
        this.adults = 0
        this.children = new Array();
    }

    incrementAdults() { 
        this.adults += 1;      
    }
    addChild() {
        this.children.push("1");
    }
    removeChild() {    
        this.children.splice(this.children.length-1,1);
    }
    toJSONString() { 


    }

}
function UpdateUI(type_person, n) {
    if(type_person == "child") {
        document.getElementById("nChildren").innerText = n + " children";
    } else {
        document.getElementById("nAdults").innerText = n + " adults";

    }
}

 function DeleteElement() {
    var counter = document.getElementById("child_counter").value;
    var integer_counter = parseInt(counter);
    var pr = `years_${integer_counter}`; 
    var element = document.getElementById(`years_${integer_counter-1}`).parentElement.remove();
    decHeight();
 }


 var people = new People();
