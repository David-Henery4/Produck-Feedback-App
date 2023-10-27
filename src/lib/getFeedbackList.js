

async function getFeedbackList() {
  try {
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

export default getFeedbackList;