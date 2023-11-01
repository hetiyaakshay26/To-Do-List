const taskBox = document.querySelector(".task-box");
function addTask() {
  const input = document.querySelector(".input-val").value;
  if (input === "") {
    alert("You Should Type Something Before Adding any Task...");
  } else {
    const html = `<div class="task flex">
  <h3 class="click">${input}</h3>
  <i class="fa-solid fa-xmark close"></i>
</div>`;
    taskBox.insertAdjacentHTML("beforeend", html);
    document.querySelector(".input-val").value = "";
  }
  savaData();
}

taskBox.addEventListener("click", function (e) {
  if (e.target.tagName === "H3" || e.target.tagName === "SPAN") {
    e.target.classList.toggle("completed");
    savaData();
  } else if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    savaData();
  }
});

// saving data to local storage
function savaData() {
  localStorage.setItem("tasks", taskBox.innerHTML);
}

// getting the stored data from local storeage on page reload
function getData() {
  taskBox.innerHTML = localStorage.getItem("tasks");
}

getData();
