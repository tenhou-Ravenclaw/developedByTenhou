import { apps } from '../data/apps';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">公開中Webアプリ一覧</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {apps.map((app) => (
          <div key={app.url} className="bg-white border rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Image src={app.image} alt={app.title} width={80} height={80} className="mb-2" />
            <h2 className="text-xl font-semibold mb-1">{app.title}</h2>
            <p className="text-gray-600 mb-2">{app.description}</p>
            <Link href={app.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              サイトを見る
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
