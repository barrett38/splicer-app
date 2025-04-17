export default function handleSplicer(
  inputText,
  removeNumbers,
  removeSpecialChars,
  frequency,
  setResult
) {
  let text = inputText;

  // Remove all whitespace
  text = text.replace(/\s+/g, "");

  if (removeNumbers) {
    text = text.replace(/[0-9]/g, "");
  }

  if (removeSpecialChars) {
    text = text.replace(/[.,;?!"'@#$%^&*()\-_=+[\]{}<>\\|/:`~]/g, "");
  }

  // Get every nth letter
  let filtered = "";
  for (let i = frequency - 1; i < text.length; i += frequency) {
    filtered += text[i];
  }

  setResult(filtered);
}
