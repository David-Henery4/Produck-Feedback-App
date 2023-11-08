

const createUser = async (userData) => {
  try {
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData: { ...userData },
      }),
    });
    return res.json()
  } catch (error) {
    console.log(error)
    console.error(error)
    return error
  }
}

export default createUser