

async function getFeedbackList() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/feedback`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: {revalidate: 3600}
    });
    //
    return res.json()
  } catch (error) {
    console.error(error)
  }
}

export default getFeedbackList;
