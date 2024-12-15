import { FolderType } from './types';

export const folders: FolderType[] = [
  {
    name: "home",
    folders: [
      {
        name: "user",
        folders: [
          {
            name: "Documents",
            folders: [
              { name: "report.docx" },
              { name: "invoice.pdf" },
              { name: "resume.txt" },
            ],
            
          },
          {
            name: "Pictures",
            folders: [
              { name: "vacation.jpg" },
              { name: "family.png" },
              { name: "friends.gif" },
            ],
            
          },
          {
            name: "Videos",
            folders: [
              { name: "movie.mp4" },
              { name: "tv_show.mkv" },
              { name: "music_video.avi" },
            ],
            
          },
          {
            name: "Music",
            folders: [
              { name: "song.mp3" },
              { name: "album.flac" },
              { name: "playlist.m3u" },
            ],
            
          },
          {
            name: "Downloads",
            folders: [
              { name: "software.exe" },
              { name: "ebook.epub" },
              { name: "compressed_file.zip" },
            ],
           
          },
        ],
      },
      {
        name: "Public",
        folders: [
          { name: "Shared Documents" },
          { name: "Shared Pictures" },
          { name: "Shared Videos" },
        ],
      },
    ],
  },
  {
    name: "etc",
    folders: [
      { name: "nginx", folders: [{ name: "config.conf" }, { name: "logs.log" }] },
      { name: "ssh", folders: [{ name: "keys.pub" }, { name: "config.cfg" }] },
      { name: "mail", folders: [{ name: "inbox.eml" }, { name: "sent.eml" }] },
    ],
  },
  {
    name: "var",
    folders: [
      { name: "log", folders: [{ name: "system.log" }, { name: "error.log" }] },
      { name: "www", folders: [{ name: "index.html" }, { name: "style.css" }, { name: "script.js" }] },
      { name: "tmp", folders: [{ name: "cache.tmp" }, { name: "sessions.sess" }] },
    ],
  },
];