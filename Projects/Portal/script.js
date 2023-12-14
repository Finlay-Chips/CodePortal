const apiKey = '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';
const apiUrl = 'https://api.openai.com/v1/chat/completions'; // ChatGPT endpoint
const question = 'What is the capital of France?'; // Your question here
const analysisResult = document.getElementById('analysis-result');
const analyzeButton = document.getElementById('analyze-button');
const codeInput = document.getElementById('code-input');
analyzeButton.addEventListener('click', askQuestion);
async function askQuestion() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'model': 'gpt-3.5-turbo',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        prompt: question,
        max_tokens: 50, // You can adjust the max_tokens as needed
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const answer = data.choices[0].text.trim();
    console.log(`Answer: ${answer}`);
    analysisResult.innerHTML = `<p>Analysis:</p><pre>${answer}</pre>`;
  } catch (error) {
    console.error('Error:', error);
  }
}

