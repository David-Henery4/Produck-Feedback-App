

export async function deleteFeedback(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/feedback/${id}`, {
      method: "DELETE"
    });
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}
