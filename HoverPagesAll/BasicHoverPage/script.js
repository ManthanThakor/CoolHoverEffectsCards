// Function to copy the code to clipboard
function copyCode() {
  // Get the text from the code block
  const codeText = document.getElementById("code-block").innerText;

  // Create a temporary textarea element to select and copy the text
  const textarea = document.createElement("textarea");
  textarea.value = codeText;
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand("copy");

  // Remove the temporary textarea element
  document.body.removeChild(textarea);

  // Show an alert or change button text to notify user
  alert("Code copied to clipboard!");
}
