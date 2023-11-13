

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
    // if (!res.ok){
    //   throw new Error(res.error)
    // }
    return res.json()
  } catch (error) {
    console.log(error)
    console.error(error)
    return { message: "Error creating account"}
  }
}

export default createUser