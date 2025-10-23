function addTask() {
  const taskText = document.getElementById("taskText").value.trim();
  const timeValue = document.getElementById("taskTimeValue").value.trim();
  const timeUnit = document.getElementById("taskTimeUnit").value;
  const taskList = document.getElementById("taskList");

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let formattedTime = "";
  if (timeValue !== "") {
    formattedTime = ${timeValue} ${timeUnit};
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const taskContent = document.createElement("div");
  taskContent.className = "task-text";
  taskContent.textContent = taskText;

  const timeElement = document.createElement("div");
  timeElement.className = "task-time";
  timeElement.textContent = formattedTime ? ⏱ ${formattedTime} : "";

  const controls = document.createElement("div");
  controls.className = "task-controls";

  const completeBtn = document.createElement("button");
  completeBtn.className = "complete-btn";
  completeBtn.textContent = "Complete";
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => {
    li.remove();
  };

  controls.appendChild(completeBtn);
  controls.appendChild(deleteBtn);

  li.appendChild(taskContent);
  if (formattedTime) li.appendChild(timeElement);
  li.appendChild(controls);

  taskList.appendChild(li);

  // Clear inputs
  document.getElementById("taskText").value = "";
  document.getElementById("taskTimeValue").value = "";
  document.getElementById("taskTimeUnit").value = "minutes";
}
