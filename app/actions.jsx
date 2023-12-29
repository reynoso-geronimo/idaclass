"use server";
export async function getCursos() {
  try {
    const response = await fetch("http://localhost:1337/api/cursos", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.PUBLIC_KEY}`,
      },
      next: { revalidate: 10 },
    });
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.log(error);
  }
}
