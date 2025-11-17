import type { Comment } from "../types.ts"
import { supabase} from "../supabaseClient.ts";

export const createComment = async (comment: Omit<Comment, "replies">): Promise<Comment> => {
    const { data, error } = await supabase.from("comments").insert([comment]).select();

    if (error) throw new Error(error.message);

    if (!data || data.length === 0) throw new Error("Failed to create comment");

    return data[0] as Comment;
}

export const getAllComments = async (): Promise<Comment[]> => {
    const { data, error } = await supabase.from("comments").select("*");
    if (error) throw new Error(error.message);

    return data as Comment[];
}
