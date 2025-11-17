import type {ClassDiscussion, Comment, Reply} from "../types.ts";
import { supabase } from "../supabaseClient.ts";

export const getAllDiscussions = async (): Promise<ClassDiscussion[]> => {
    const { data, error } = await supabase
        .from("class_discussions")
        .select(`id, name, date, 
     comments (id, name, content, date,
        replies (id, name, content, date))`);
    if (error) throw new Error("Could not get all discussions from the database");

    return data as ClassDiscussion[];
};

export const getDiscussion = async (id: number): Promise<ClassDiscussion | null> => {
    const { data, error } = await supabase.from("class_discussions").select('id, name, date' +
        'comments (id, name, content, date, ' +
        'replies (id, name, content, date))')
        .eq('id', id);

    if (error || !data || data.length === 0) {
        throw new Error("Could not get discussion from database");
    }

    return data[0] as unknown as ClassDiscussion;

}

export const createDiscussion = async (
    discussion: Omit<ClassDiscussion, "comments">): Promise<ClassDiscussion> => {
    const { data, error } = await supabase
        .from("class_discussions")
        .insert([discussion])
        .select();

    if (error || !data || data.length === 0) throw new Error("Failed to create discussion");

    return data[0] as ClassDiscussion;
};

