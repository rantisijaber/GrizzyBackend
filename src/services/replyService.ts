import type { Reply } from "../types";
import { supabase} from "../supabaseClient.js";

export const createReply = async (reply: Reply): Promise<Reply> => {
    const { data, error } = await supabase.from("replies").insert([reply]).select();
    if (error) throw new Error("Could not create reply");

    return data[0] as Reply;
}

export const getReplies = async (commentId: number): Promise<Reply[]> => {
    const { data, error } = await supabase.from("replies").select("*").eq('comment_id', commentId);
    if (error) throw new Error("Could not get replies");

    return data as Reply[];
}
