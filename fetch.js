const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTc4MTA4NzM5NSwiZXhwIjoxNzgxMTczNzk1fQ.8QqIJsYs_F0E9ffc2K-P40BMU9OBA4OuXsy3IANTiD8";
async function getCars() {
  const response = await fetch(
    "https://carsharing-backend-production.up.railway.app/cars",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  console.log(data);
}

getCars();