
export async function updateFeedback(id,dataToUpdate) {
  try {
    const res = await fetch(`http://localhost:3000/api/feedback/${id}`, {
      method: "PUT",
      body:{
        formData: dataToUpdate
      }
    });
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

