export default class ApiController {

    constructor() {}
  
    async getInfo(req, res) {
  
      try {
  
        res.json({
          msg: "API web em Node e Express."
        });
  
      } catch (error) {
  
        return res.status(500).json({
          error: "Erro ao exibir dados da API"
        });
  
      }
    }
  
    async getInfoByParamId(req, res, next) {
  
      try {
  
        const id = Number(req.params.id);
  
        if (id === 42) {
          throw new Error("Resposta incorreta!");
        }
  
        res.json({
          message: `ID: ${id}`
        });
  
      } catch (error) {
  
        next(error);
  
      }
    }
  }
