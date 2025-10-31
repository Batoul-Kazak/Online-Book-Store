"use client";

import backgroundImage from "@/app/assets/website/dark-image.jpg";
import { AppContext } from "@/context/AppContext";
import { useCallback, useContext, useRef, useState } from "react";

type BlogEntry = {
  id: string;
  username: string;
  userInfo: {
    blogNum: number;
    title: string;
    content: string;
  };
};

const bgImage = {
  backgroundImage: `url(${backgroundImage.src})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "10rem",
  width: "100%",
};

const RichTextEditor = () => {
  const { currentLoggedinUser } = useContext(AppContext);
  const editorRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("16px");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const [title, setTitle] = useState<string>("");
  const [savedNotes, setSavedNotes] = useState<BlogEntry[]>([]);
  const [currentBlogNumber, setCurrentNumber] = useState<number>(1);

  const execCommand = useCallback((command: string, value: string = "") => {
    document.execCommand(command, false, value);
    editorRef.current?.focus();
  }, []);

  function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newColor = e.target.value;
    setColor(newColor);
    execCommand("foreColor", newColor);
  }

  function handleFontChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newFontSize = e.target.value;
    setColor(newFontSize);
    execCommand("fontSize", newFontSize);
  }

  function toggleBold() {
    execCommand("bold");
  }

  function toggleItalic() {
    execCommand("italic");
  }

  function toggleUnderline() {
    execCommand("underline");
  }

  function toggleDirection() {
    const newDir = direction === "rtl" ? "ltr" : "rtl";

    setDirection(newDir);
    if (editorRef.current) editorRef.current.dir = newDir;
  }

  function handleSave() {
    if (!editorRef.current) return;

    const content = editorRef.current.innerHTML.trim();

    if (!title.trim() && !content) return;

    const newNote = {
      id: Date.now().toString(),
      username: currentLoggedinUser.id || "anonymous",
      userInfo: {
        blogNum: currentBlogNumber,
        title: title.trim() || "(No Title)",
        content: content || "no content",
      },
    };

    setSavedNotes((prev) => [...prev, newNote]);
    setCurrentNumber((prev) => prev + 1);
  }

  function handleClear() {
    setTitle("");
    if (editorRef.current) editorRef.current.innerHTML = "";

    setColor("");
    setFontSize("16px");
    setDirection("ltr");
  }

  function handleLoadNote(note: BlogEntry) {
    setTitle(note.userInfo.title);

    if (editorRef.current) editorRef.current.innerHTML = note.userInfo.content;
  }

  function handleDeleteNote(id: string) {
    setSavedNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return (
    <div>
      {/* <NavBar /> */}
      <div
        className="max-w-6xl pt-30 p-4 min-h-screen bg-cover bg-center bg-no-repeat place-self-center"
        style={bgImage}
      >
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <div>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Note title..."
                className="w-full text-2xl border-silver-light text-primary rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex flex-wrap gap-2 bg-silver rounded-2xl border-2 border-silver-light">
              <div className="flex place-items-center gap-1">
                <label htmlFor="" className="text-xl text-silver-dark">
                  Color:
                </label>
                <input
                  type="text"
                  value={color || "#333"}
                  onChange={handleColorChange}
                  className="rounded w-7 h-7 cursor-pointer"
                />
              </div>
              <div className="flex place-items-center gap-1">
                <label htmlFor="" className="text-xl text-silver-dark">
                  Size:
                </label>
                <select
                  name=""
                  id=""
                  onChange={handleFontChange}
                  className="rounded px-2 py-1 text-silver-dark"
                >
                  <option value="12px">12</option>
                  <option value="16px">16</option>
                  <option value="20px">20</option>
                  <option value="24px">24</option>
                  <option value="32px">32</option>
                </select>
              </div>
              <div className="flex place-items-center gap-1">
                <button
                  onClick={toggleBold}
                  className="px-2 py-1 text-sm bg-silver-very-light text-silver-dark bold"
                >
                  B
                </button>

                <button
                  onClick={toggleItalic}
                  className="px-2 py-1 text-sm bg-silver-very-light text-silver-dark italic"
                >
                  I
                </button>

                <button
                  onClick={toggleUnderline}
                  className="px-2 py-1 text-sm bg-silver-very-light text-silver-dark underline"
                >
                  U
                </button>

                <button
                  onClick={toggleBold}
                  className="px-2 py-1 text-sm bg-silver-very-light text-silver-dark"
                >
                  {direction === "ltr" ? "rtl" : "ltr"}
                </button>
              </div>
            </div>
            <div
              ref={editorRef}
              contentEditable
              dir={direction}
              className="min-h-[200px] p-4 border border-silver-light rounded-2xl bg-silver-very-light focus:outline-none focus:ring-2 focus:ring-primary text-silver-dark"
              style={{ fontSize, ...(color && { color }) }}
              suppressContentEditableWarning
            />
            <div className="flex gap-3">
              <button
                onClick={handleSave}
                className="py-2 px-4 bg-primary text-silver-very-light rounded hover:bg-silver-dark"
              >
                Save Note
              </button>
              <button
                onClick={handleClear}
                className="py-2 px-4 bg-primary text-silver-very-light rounded hover:bg-silver-dark"
              >
                Clear
              </button>
            </div>
            <div className="lg:w-80">
              <h2 className="text-2xl text-silver-very-light">Saved Notes</h2>
              <div className="max-h-[500px] overflow-y-auto pr-2">
                {savedNotes.length === 0 ? (
                  <p className="text-primary text-sm">No saved notes yet.</p>
                ) : (
                  savedNotes.map((note) => (
                    <div
                      key={note.id}
                      className="border border-silver-very-light rounded p-3 bg-silver hover:bg-silver-light relative"
                    >
                      <button
                        onClick={() => handleLoadNote(note)}
                        className="w-full text-left"
                      >
                        <h3 className="text-silver-very-dark">
                          {note.userInfo.title}
                        </h3>
                        <p
                          className="text-sm text-silver line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: note.userInfo.content,
                          }}
                        />
                        <span className="text-xs text-gray-100 block">
                          #Note: {note.userInfo.content}
                        </span>
                      </button>
                      <button
                        onClick={() => handleDeleteNote(note.id)}
                        className="absolute top-2 right-2 text-silver hover:text-secondary-light"
                      >
                        🗑️
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default RichTextEditor;
