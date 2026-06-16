import { Header } from "@/components/Header";
import Link from "next/link";

// Mock data for the placeholder UI
const MOCK_TASKS = [
  {
    id: 1,
    title: "Label 100 images of handwritten text",
    reward: "0.05",
    status: "Open",
    creator: "0x1234...5678",
    deadline: "2026-06-20",
  },
  {
    id: 2,
    title: "Verify sentiment analysis on 500 tweets",
    reward: "0.15",
    status: "Open",
    creator: "0xABCD...EF01",
    deadline: "2026-06-18",
  },
  {
    id: 3,
    title: "Categorize support tickets into 5 buckets",
    reward: "0.02",
    status: "In Progress",
    creator: "0x9876...5432",
    deadline: "2026-06-19",
  },
];

export default function TasksMarketplacePage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-6xl mx-auto w-full px-6 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Explore Tasks</h1>
            <p className="text-zinc-400">
              Browse available micro-tasks and earn crypto instantly upon completion.
            </p>
          </div>
          
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="Search tasks..." 
              className="bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
            />
            <button className="px-4 py-2.5 bg-zinc-800 text-white text-sm font-medium rounded-xl hover:bg-zinc-700 transition-colors">
              Filter
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_TASKS.map((task) => (
            <div 
              key={task.id} 
              className="group flex flex-col bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${task.status === 'Open' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-orange-500/10 text-orange-400 border border-orange-500/20'}`}>
                  {task.status}
                </span>
                <span className="text-xs text-zinc-500 font-medium font-mono">
                  {task.creator}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                {task.title}
              </h3>

              <div className="flex-1 mt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Reward</span>
                  <div className="flex items-center gap-1.5 font-bold text-white">
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-[10px]">ETH</div>
                    {task.reward}
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-500">Deadline</span>
                  <span className="text-zinc-300 font-medium">{task.deadline}</span>
                </div>
              </div>

              <Link 
                href={`/tasks/${task.id}`}
                className="mt-6 w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-white text-sm font-bold text-center rounded-xl transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
