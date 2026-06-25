export function cookie(){

    if ("cookieStore" in window) {
      console.log("Cookie Store API disponible");
    }else{
        console.log("Cookie Store API n'est pas disponible")
    }
}
