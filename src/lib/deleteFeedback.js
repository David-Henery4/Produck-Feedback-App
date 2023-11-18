

async function deleteFeedback(id) {
  try {
    const res = await fetch(`/api/feedback/${id}`, {
      method: "DELETE",
    });
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export default deleteFeedback