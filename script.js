// Manipulate the DOM using JavaScript.
window.onload = function() {
    
    let textButton = document.getElementById("textButton");
    let messageElement = document.getElementById("message");
    
        textButton.onclick = function() {
        
            messageElement.textContent = "JavaScript DOM in action!";
        };
 
// Change the background color of the page   
    let styleButton = document.getElementById("styleButton");
    let styleText = document.getElementById("styleText");
    let isStyled = false;
    
        styleButton.onclick = function() {
            if (isStyled === false) {
                styleText.style.color = "red";
                styleText.style.fontSize = "20px";
                styleText.style.fontWeight = "bold";
                styleText.style.backgroundColor = "#f0f0f0";
                styleText.style.padding = "10px";
                
                isStyled = true;
            } else {
                styleText.style.color = "";
                styleText.style.fontSize = "";
                styleText.style.fontWeight = "";
                styleText.style.backgroundColor = "";
                styleText.style.padding = "";
                
                isStyled = false;
            }
        };

// Add and remove items from a list        
    let addButton = document.getElementById("addButton");
    let removeButton = document.getElementById("removeButton");
    let itemList = document.getElementById("itemList");
    let itemCount = 2;  
    
    addButton.onclick = function() {
       
        itemCount++;
        
        let newItem = document.createElement("li");
        
        newItem.textContent = "Item #" + itemCount;
        newItem.className = "highlight";
        
        itemList.appendChild(newItem);
        
            setTimeout(function() {
                newItem.className = "";
            }, 1000);
    };
    
    removeButton.onclick = function() {
       
        if (itemList.children.length > 0) {
           
            itemList.removeChild(itemList.lastElementChild);
             
            itemCount--;
        } else {
            
            alert("No more items to remove!");
        }
    };
};