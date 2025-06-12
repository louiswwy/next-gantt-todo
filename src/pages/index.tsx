import GanttChart from '@/components/GanttChart';
import TaskForm from '@/components/TaskForm';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">项目甘特图</h1>
      <TaskForm />
      <GanttChart />
    </div>
  );
}