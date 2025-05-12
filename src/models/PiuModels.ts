import { v4 as uuidv4 } from "uuid";

class Piu {
  id: string;
  userId: string;
  content: string;
  created_at: Date;
  updated_at: Date;

  constructor({
    id,
    userId,
    content
  }: Omit<Piu, 'created_at' | 'updated_at'>) {
    this.id = id || uuidv4();
    this.userId = userId;
    this.content = content;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export default Piu;
