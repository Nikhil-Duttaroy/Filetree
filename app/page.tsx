"use client";
import {
  ChevronRightIcon,
  DocumentIcon,
  FolderIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

type FolderType = {
  name: string;
  folders?: FolderType[];
};

export default function Home() {
  const folders: FolderType[] = [
    {
      name: "home",
      folders: [
        {
          name: "user",
          folders: [
            {
              name: "Documents",
              folders: [{ name: "resume.pdf" }],
            },
            {
              name: "Pictures",
              folders: [{ name: "vacation.jpg" }],
            },
            {
              name: "Downloads",
              folders: [{ name: "setup.exe" }],
            },
          ],
        },
      ],
    },
    {
      name: "etc",
      folders: [
        { name: "nginx", folders: [{ name: "nginx.conf" }] },
        { name: "ssh", folders: [{ name: "sshd_config" }] },
      ],
    },
    {
      name: "var",
      folders: [
        { name: "log", folders: [{ name: "syslog" }] },
        { name: "www", folders: [{ name: "index.html" }] },
      ],
    },
  ];
  return (
    <main className="min-h-screen mx-auto max-w-sm p-12">
      <ul>
        {folders.map((folder) => (
          <Folder key={folder.name} folder={folder} />
        ))}
      </ul>
    </main>
  );
}

function Folder({ folder }: { folder: FolderType }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <li key={folder.name} className="my-1">
      <span
        className={`flex items-center gap-1 text-white ${
          folder?.folders && "cursor-pointer"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {folder?.folders ? (
          <>
            {folder?.folders.length > 0 && (
              <ChevronRightIcon
                className={`size-6  ${isOpen && "rotate-90"}`}
              />
            )}
            <FolderIcon className="size-6 text-sky-400 " />
          </>
        ) : (
          <DocumentIcon className="size-6 text-white " />
        )}
        {folder.name}
      </span>
      {isOpen && (
        <ul className="pl-6">
          {folder?.folders?.map((folder) => (
            <Folder key={folder.name} folder={folder} />
          ))}
        </ul>
      )}
    </li>
  );
}
