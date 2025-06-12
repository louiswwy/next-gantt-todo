import { useState } from 'react';
import { createTask } from '@/lib/supabase';

export default function TaskForm() {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({
      title,
      start: new Date(),
      end: new Date(Date.now() + 86400000)
    });
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 mr-2"
        placeholder="新任务"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        添加任务
      </button>
    </form>
  );
}