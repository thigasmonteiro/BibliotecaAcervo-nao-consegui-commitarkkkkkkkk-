import api from "../plugins/api";

class CategoriaService {
  async getAllLCategorias() {
    const response = await api.get("/categorias/");
    return response.data;
  }
}

export default new CategoriaService();