
const getAllFeedback = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/feedback/${id}`);
    return res.json()
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch feedback data");
  }
};

export default getAllFeedback;
