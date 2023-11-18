

async function createFeedback(newFeedbackData) {
  try {
    const res = await fetch(`/api/feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData: { ...newFeedbackData },
      }),
    });
    return await res.json()
  } catch (error) {
    console.error(error)
  }
}

export default createFeedback