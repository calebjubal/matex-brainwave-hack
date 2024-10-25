'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BarChart, GitBranch, GitCommit, GitPullRequest, Settings, Users } from 'lucide-react';

// Define the type for a commit object
type Commit = {
  id: number;
  repo: string;
  message: string;
  date: string;
  language: string;
};

// Mock data for commits
const commits: Commit[] = [
  { id: 1, repo: 'matex-ai/code-review', message: 'Update AI model', date: '2024-10-25', language: 'Python' },
  { id: 2, repo: 'matex-ai/frontend', message: 'Refactor dashboard component', date: '2024-10-24', language: 'TypeScript' },
  { id: 3, repo: 'matex-ai/docs', message: 'Add API documentation', date: '2024-10-23', language: 'Markdown' },
];

export default function Dashboard() {
  const [selectedCommit, setSelectedCommit] = useState<Commit | null>(null);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-orange-600">Matex Dashboard</h2>
        </div>
        <nav className="mt-4">
          {[
            { name: 'Overview', icon: BarChart },
            { name: 'Repositories', icon: GitBranch },
            { name: 'Pull Requests', icon: GitPullRequest },
            { name: 'Commits', icon: GitCommit },
            { name: 'Team', icon: Users },
            { name: 'Settings', icon: Settings },
          ].map((item) => (
            <Link
              key={item.name}
              href="#"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Overview cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: 'Total Repositories', stat: '12' },
              { name: 'Open Pull Requests', stat: '7' },
              { name: 'Code Review Score', stat: '92%' },
            ].map((item) => (
              <motion.div
                key={item.name}
                className="bg-white overflow-hidden shadow rounded-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 py-5 sm:p-6">
                  <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                  <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Recent activity */}
          <h2 className="mt-8 text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-4 space-y-4">
            {commits.map((commit) => (
              <motion.div
                key={commit.id}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedCommit(commit)}>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={`https://github.com/${commit.repo.split('/')[0]}.png`} />
                      <AvatarFallback>{commit.repo[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{commit.repo}</h3>
                      <p className="text-sm text-gray-500">{commit.message}</p>
                    </div>
                    <div className="text-sm text-gray-500">{commit.date}</div>
                    <div className="text-sm font-semibold">{commit.language}</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </main>
      </div>

      {/* Commit details dialog */}
      <Dialog open={selectedCommit !== null} onOpenChange={() => setSelectedCommit(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedCommit?.message || 'Commit Details'}</DialogTitle>
            <DialogDescription>{selectedCommit ? `${selectedCommit.repo} • ${selectedCommit.date}` : ''}</DialogDescription>
          </DialogHeader>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded">
              <h4 className="font-semibold mb-2">Updated Code</h4>
              <pre className="text-sm overflow-x-auto">
                <code>{`
function exampleFunction() {
  // Updated code here
  console.log("Hello, Matex!");
}
                `}</code>
              </pre>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI Review</h4>
              <div className="mb-2">
                <span className="font-semibold">Rating: </span>
                <span className="text-yellow-500">⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm">
                Great job on the update! The code is clean and follows best practices. 
                Consider adding more comments to explain the function&apos;s purpose and parameters.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
