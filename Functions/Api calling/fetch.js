async function apiCall() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data);
    
  } catch (error) {
    console.log("Error:Whats On Your Mind");
    
  }
}
apiCall();