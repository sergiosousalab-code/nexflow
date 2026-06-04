exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01'
      },
      body: event.body
    });
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(data)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
