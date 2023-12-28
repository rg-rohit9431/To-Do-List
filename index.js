// document.addEventListener('DOMContentLoaded', function () {
    var textCreate = document.getElementById('text-box');
    var submitButton = document.getElementById('submit');
    var createBox = document.getElementById('create-box');

    submitButton.addEventListener("click", function () {
        if (textCreate.value.trim() === "") {
            showNotification("Enter some tasks!", "#2880e5");
            return;
        }

        // Create box
        var newBox = document.createElement("div");
        newBox.className = "new-box";

        // Create paragraph
        var newPara = document.createElement("div");
        newPara.className = "new-para";
        newPara.innerHTML = textCreate.value;

        // Create delete icon
        var icons = document.createElement("i");
        icons.className = "fas fa-times icon";

        // Append elements
        newBox.appendChild(newPara);
        newBox.appendChild(icons);
        createBox.appendChild(newBox);

        // Clear the input
        textCreate.value = "";
        showNotification("Tasks Added...", "#9be9a8"); //show notification
        saveData();
    });

    createBox.addEventListener("click", function (event) {
        if (event.target && event.target.className === "fas fa-times icon") {
            var parentBox = event.target.parentNode;
            createBox.removeChild(parentBox);
            showNotification("Task deleted!");
            saveData();
        }
    });


    function showNotification(val, coloR) {
        var noticeBox = document.createElement("div");
        noticeBox.className = "notice";
        noticeBox.innerHTML = val;

        document.getElementById("notification").appendChild(noticeBox);

        noticeBox.style.transform = "translate(0,0)";
        noticeBox.style.backgroundColor = coloR;
        setTimeout(function () {
            noticeBox.style.transform = "translate(150%,0)";
            document.getElementById("notification").removeChild(noticeBox);
        }, 4000);
        console.log(noticeBox.innerHTML);

    }



function saveData() {
    localStorage.setItem("data", createBox.innerHTML);
}

function getData() {
    createBox.innerHTML = localStorage.getItem("data");
}

getData();