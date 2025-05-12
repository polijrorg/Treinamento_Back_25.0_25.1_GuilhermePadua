import Piu from "../models/PiuModels";

class PiusRepository {
  delete(_id: string) {
    this.pius = this.pius.filter(piu => piu.id !== _id);
  }
  private pius: Piu[] = [];

  create(piu: Piu): Piu {
    this.pius.push(piu);
    return piu;
  }

  getAll(): Piu[] {
    return this.pius;
  }

  getById(id: string): Piu | undefined {
    return this.pius.find(piu => piu.id === id);
  }
}

export default PiusRepository;
