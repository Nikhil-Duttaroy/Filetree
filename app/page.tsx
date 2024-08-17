import { DocumentIcon, FolderIcon } from "@heroicons/react/16/solid";

export default function Home() {
  const folders = ["Desktop", "Documents", "Downloads"];

  return (
    <main className="min-h-screen mx-auto max-w-sm">
      <ul>
        <li className="my-1">
          <span className="flex items-center  gap-1">
            <FolderIcon className="w-4 h-4" />
            Folder
          </span>

          <ul className="pl-6">
            {folders.map((folder) => (
              <li key={folder} className="my-1">
                <span className="flex items-center gap-1">
                  <FolderIcon className="w-4 h-4" />
                  {folder}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </main>
  );
}
