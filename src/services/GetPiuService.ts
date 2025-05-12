import PiusRepository from "../repositories/PiusRepository";
import { Piu } from "../models/PiuModels";

class GetPiuService {
  constructor(private piuRepository: PiusRepository) {}

  execute(id: string): Piu {
    const piu = this.piuRepository.getById(id);

    if (!piu) {
      throw new Error("Piu não encontrado.");
    }

    return piu;
  }
}

export default GetPiuService;
