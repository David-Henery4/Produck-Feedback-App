

async function createFeedback(newFeedbackData) {
  try {
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      body:{
        formData: newFeedbackData
      }
    });
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export default createFeedback