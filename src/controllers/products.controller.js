export default class ProductsController {
    constructor() {}
  
    async getProducts(req, res, next) {
      try {
        const products = [
          {id: 1, nome: "Degradê", disponivel: true},
          {id: 2, nome: "Social", disponivel: true},
          {id: 3, nome: "Platinado", disponivel: false},
          {id: 4, nome: "Barba", disponivel: false},
        ];
        res.json({productsList: products});
      } catch (error) {
        next(error);
      }
    }
  }