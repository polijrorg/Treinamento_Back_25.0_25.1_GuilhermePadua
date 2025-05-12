import PiusRepository from "../repositories/PiusRepository";
import { Piu } from "../models/PiuModels";

class ListPiusService {
  constructor(private piuRepository: PiusRepository) {}

  execute(): Piu[] {
    return this.piuRepository.getAll();
  }
}

export default ListPiusService;
