const baseUrl = 'https://localhost:7107/api'

export const fetchGET = async (url) => {
  try {
    const response = await fetch(baseUrl+url, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    });
    const jsonData = await response.json();
    
    return jsonData;
  } catch (err) {
    console.error(err);
  }
}

export const fetchPOST = async (url, data) => {
  try {
    const response = await fetch(baseUrl+url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (err) {
    console.error(err);
  }
}
