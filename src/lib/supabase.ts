import { createClient } from '@supabase/supabase-js';

type Task = {
  title: string;
  start: Date;
  end: Date;
  progress?: number;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

export const createTask = async (task: Task) => {
  const { data, error } = await supabase
    .from('tasks')
    .insert([{
      ...task,
      start: task.start.toISOString(),
      end: task.end.toISOString()
    }]);
  return { data, error };
};