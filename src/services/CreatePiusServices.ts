import { v4 as uuidv4 } from "uuid";

import Piu from "../models/PiuModels";
import PiusRepository from "../repositories/PiusRepository";

interface CreatePiuDTO {
  userId: string;
  content: string;
}

class PiusService {
  constructor(private piuRepository: PiusRepository) {}

  execute({ userId, content }: CreatePiuDTO): Piu {
    if (!content || content.length > 280) {
      throw new Error("O conteúdo deve ter até 280 caracteres.");
    }

    const piu: Piu = {
      id: uuidv4(),
      userId,
      content,
      created_at: new Date(),
      updated_at: new Date()
    };

    return this.piuRepository.create(piu);
  }
}

export default PiusService;
