import api from "../plugins/api";

class EditoraService {
  async getAllEditoras() {
    const response = await api.get("/editoras/");
    return response.data;
  }
}

export default new EditoraService();