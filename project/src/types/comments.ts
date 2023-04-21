export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: CommentUser;
};

export type CommentUser = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type AuthUser =
  | (CommentUser & {
      email: string;
      token: string;
    })
  | null;

export type NewComment = {
  comment: string;
  rating: number;
  id: number;
};

export type Comments = Comment[];
