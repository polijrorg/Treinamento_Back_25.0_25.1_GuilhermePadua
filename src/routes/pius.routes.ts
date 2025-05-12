import { Router, Request, Response } from "express";

import PiusRepository from "../repositories/PiusRepository";
import CreatePiuService from "../services/CreatePiusServices";
import DeletePiuService from "../services/DeletePiuService";
import GetPiuService from "../services/GetPiuService";
import ListPiusService from "../services/ListPiusService";

const piusRouter = Router();
export const piusRepository = new PiusRepository();

piusRouter.post("/pius/create", (request: Request, response: Response) => {
  try {
    const { userId, content } = request.body;

    if (!userId || !content) {
      return response.status(400).json("Erro: envie userId e content.");
    }

    const createPiu = new CreatePiuService(piusRepository);
    const piu = createPiu.execute({ userId, content });

    return response.status(201).json(piu);
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Erro desconhecido";
    return response.status(400).json({ error: errorMessage });
  }
});

piusRouter.get("/pius/getAll", (request: Request, response: Response) => {
  const listPius = new ListPiusService(piusRepository);
  const pius = listPius.execute();

  return response.json(pius);
});

piusRouter.get("/pius/:id", (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const getPiu = new GetPiuService(piusRepository);
    const piu = getPiu.execute(id);

    return response.json(piu);
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Erro desconhecido";
    return response.status(404).json({ error: errorMessage });
  }
});
piusRouter.delete("/pius/:id", (request: Request, response: Response) => {
  const { id } = request.params;

  try {
    const deletePiu = new DeletePiuService(piusRepository);
    deletePiu.execute(id);

    return response.status(204).send(); // sucesso sem corpo
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : "Erro desconhecido";
    return response.status(404).json({ error: errorMessage });
  }
});


export default piusRouter;
