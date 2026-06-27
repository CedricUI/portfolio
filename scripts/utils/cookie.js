export async function setCookie(cookieName = "portfolio-my-univers", cookieValue = "false", cookieExpires = null) {

    if ("cookieStore" in window) {
      console.info("SET : Cookie Store API disponible")

      try {
        await cookieStore.set({
          name: cookieName,
          value: cookieValue,
          expires: cookieExpires,
          sameSite: "lax"
        })
      } catch (error) {
        console.warn(`Erreur de l'ajout du cookie: ${error}`);
      }

    }else{
      console.info("SET : Cookie Store API n'est pas disponible")

      try {
        document.cookie = `username=${cookieName}; SameSite=Lax; expires=${cookieExpires}`;
      } catch (error) {
        console.warn(`Erreur de l'ajout du cookie: ${error}`);
      }
    }
}

export async function getCookie(name = "portfolio-my-univers") {
  let ok = true

  if ("cookieStore" in window) {
    console.info("GET : Cookie Store API disponible")
    try {
      const cookie = await cookieStore.get(name);
        console.log("Cookie :", cookie);

      if (cookie.name === name) {
        ok
      }
    } catch (error) {
      console.warn(`Erreur de l'obtention du cookie: ${error}`);
      ok = false
    }
  }else{
      console.info("GET : Cookie Store API n'est pas disponible")
    try {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) {
          console.info("Cookie value:", value);
          ok
        }
      }
      
    } catch (error) {
      console.warn(`Erreur de l'obtention du cookie: ${error}`);
      ok = false
    }
  }
  return ok
}
