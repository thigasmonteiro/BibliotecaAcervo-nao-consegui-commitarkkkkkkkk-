import api from "../plugins/api";

class LivroService {
  async getAllLivros() {
    const response = await api.get("/livros/");
    return response.data;
  }
}

export default new LivroServiceService();