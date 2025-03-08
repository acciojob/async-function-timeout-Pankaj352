//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
  const text = document.getElementById("text").value;
  const delay = parseInt(document.getElementById("delay").value);

  if (!text) {
    alert("Please enter a message.");
    return;
  }

  if (isNaN(delay) || delay < 0) {
    alert("Please enter a valid delay in milliseconds.");
    return;
  }

  await delayMessage(text, delay);
});

async function delayMessage(message, delay) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  document.getElementById("output").innerText = message;
}
