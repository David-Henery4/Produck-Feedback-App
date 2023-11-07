

const signInWithCredentials = async (userData) => {
  try {
    console.log(userData)
    const res = await fetch("/api/auth/callback/credentials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData: { ...userData }
      }),
    });
    console.log(res)
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