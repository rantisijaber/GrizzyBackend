import { supabase } from "../supabaseClient";
export const getAllDiscussions = async () => {
    const { data, error } = await supabase
        .from("class_discussions")
        .select(`id, name, date,
      comments (
        id,
        name,
        content,
        date,
        replies (
          id,
          name,
          content,
          date))`);
    if (error)
        throw new Error(error.message);
    return data;
};
export const getDiscussion = async (id) => {
    const { data, error } = await supabase.from("class_discussions").select('id, name, date,' +
        'comments (id, name, content, date, ' +
        'replies (id, name, content, date))')
        .eq('id', id);
    if (error)
        throw new Error(error.message);
    if (!data || data.length === 0) {
        return null;
    }
    return data[0];
};
export const createDiscussion = async (discussion) => {
    const { data, error } = await supabase
        .from("class_discussions")
        .insert([discussion])
        .select();
    if (error)
        throw new Error(error.message);
    if (!data || data.length === 0)
        throw new Error("Failed to create discussion");
    return data[0];
};
