import { IAluno } from 'app/entities/aluno/aluno.model';

export interface IMeta {
  id: number;
  area?: string | null;
  nota?: number | null;
  aluno?: IAluno | null;
}

export type NewMeta = Omit<IMeta, 'id'> & { id: null };
