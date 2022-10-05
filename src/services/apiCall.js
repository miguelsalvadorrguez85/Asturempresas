async function apiCall() {
  const response = await fetch(
    'https://akabab.github.io/superhero-api/api/all.json'
  );
  const result = await response.json();
  return result;
}

export { apiCall };
