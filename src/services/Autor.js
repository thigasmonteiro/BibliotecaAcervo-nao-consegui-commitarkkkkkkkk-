import api from "../plugins/api";

class AutorService {
  async getAllAutores() {
    const response = await api.get("/autores/");
    return response.data;
  }
}

export default new AutorService();