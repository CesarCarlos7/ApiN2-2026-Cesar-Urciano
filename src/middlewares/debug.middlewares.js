export const debug = (request, response, next) => {

    const now = new Date().toLocaleString("pt-BR", {
      dateStyle: "short",
      timeStyle: "short",
    });
  
    console.log(`
  [${now}] ${request.ip}
  MÉTODO HTTP: ${request.method}
  URL: ${request.url}
  BODY:`, request.body);
  
    next();
  };