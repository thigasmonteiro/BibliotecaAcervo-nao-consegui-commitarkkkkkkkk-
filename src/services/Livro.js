import api from "../plugins/api";

class LivroService {
  async getAllLivros() {
    const response = await api.get("/livro/");
    return response.data;
  }
}

export default new LivroService();