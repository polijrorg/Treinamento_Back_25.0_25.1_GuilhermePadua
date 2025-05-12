import PiusRepository from "../repositories/PiusRepository";

class DeletePiuService {
  constructor(private piuRepository: PiusRepository) {}

  execute(id: string): void {
    const piuExists = this.piuRepository.getById(id);

    if (!piuExists) {
      throw new Error("Piu não encontrado.");
    }

    this.piuRepository.delete(id);
  }
}

export default DeletePiuService;
