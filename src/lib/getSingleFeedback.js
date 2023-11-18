
const getSingleFeedback = async (id) => {
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/feedback/${id}`);
    return res.json()
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch feedback data");
  }
};

export default getSingleFeedback;
