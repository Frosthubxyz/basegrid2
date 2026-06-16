import { Header } from "@/components/Header";

export default function CreateTaskPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Post a New Task</h1>
          <p className="text-zinc-400">
            Create a micro-task, fund it with ETH on Base, and workers will complete it instantly.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="title" className="text-sm font-medium text-zinc-300">
                Task Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="e.g., Label 100 images for AI training"
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="text-sm font-medium text-zinc-300">
                Task Details / Instructions
              </label>
              <textarea
                id="description"
                rows={5}
                placeholder="Describe exactly what the worker needs to do..."
                className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-sm font-medium text-zinc-300">
                  Category
                </label>
                <select
                  id="category"
                  className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                >
                  <option value="data_labeling">Data Labeling</option>
                  <option value="verification">Verification</option>
                  <option value="content_review">Content Review</option>
                  <option value="surveys">Surveys</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="reward" className="text-sm font-medium text-zinc-300">
                  Reward (in ETH)
                </label>
                <input
                  type="number"
                  id="reward"
                  step="0.0001"
                  placeholder="0.01"
                  className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="deadline" className="text-sm font-medium text-zinc-300">
                  Deadline
                </label>
                <input
                  type="datetime-local"
                  id="deadline"
                  className="bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <button
              type="button"
              className="mt-4 w-full py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            >
              Fund & Post Task
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
