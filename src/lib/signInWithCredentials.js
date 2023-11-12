

const signInWithCredentials = async (userData) => {
  try {
    const res = await fetch("/api/auth/callback/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData: { ...userData }
      }),
    });
    return res
  } catch (error) {
    console.log(error)
    console.error(error)
    return {
      res: error,
      msg: "no credentials"
    }
  }
  
}

export default signInWithCredentials