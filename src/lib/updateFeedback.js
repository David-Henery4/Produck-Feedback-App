async function updateFeedback(id, dataToUpdate) {
  try {
    const res = await fetch(`http://localhost:3000/api/feedback/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        formData: { ...dataToUpdate },
      }),
      next: { revalidate: 3600 },
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
}

export default updateFeedback;
