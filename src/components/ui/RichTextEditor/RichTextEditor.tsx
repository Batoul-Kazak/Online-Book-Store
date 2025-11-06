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

type ClickedType = {
  isBold: boolean,
  isItalic: boolean,
  isUnderlined: boolean
}

const clickedInitialState = {
  isBold: false,
  isItalic: false,
  isUnderlined: false,
}

const RichTextEditor = () => {
  const { currentLoggedinUser } = useContext(AppContext);
  const editorRef = useRef<HTMLDivElement>(null);
  const [color, setColor] = useState<string>("");
  const [fontSize, setFontSize] = useState<string>("16px");
  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");
  const [title, setTitle] = useState<string>("");
  const [savedNotes, setSavedNotes] = useState<BlogEntry[]>([]);
  const [currentBlogNumber, setCurrentNumber] = useState<number>(1);
  const [clicked, setClicked] = useState<ClickedType>(clickedInitialState);

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
    const clickedUpdated = { isItalic: clicked.isItalic, isUnderlined: clicked.isUnderlined, isBold: (clicked.isBold ? false : true) };
    setClicked(clickedUpdated);

  }

  function toggleItalic() {
    execCommand("italic");
    const clickedUpdated = { isItalic: (clicked.isItalic ? false : true), isUnderlined: clicked.isUnderlined, isBold: clicked.isBold };
    setClicked(clickedUpdated);
  }

  function toggleUnderline() {
    const clickedUpdated = { isItalic: clicked.isItalic, isUnderlined: (clicked.isUnderlined ? false : true), isBold: clicked.isBold };
    setClicked(clickedUpdated);
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
    <div
      className="max-w-6xl min-h-screen p-4 bg-center bg-no-repeat bg-cover pt-30 place-self-center"
      style={bgImage}
    >
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex-1">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title..."
              className="w-full p-5 px-10 text-xl border-silver-light text-silver-very-light rounded-2xl outline-0"
            />
          </div>
          <div className="flex flex-wrap text-silver-very-light gap-15 rounded-2xl">
            <div className="flex gap-3 place-items-center">
              <label htmlFor="" className="text-xl">
                Color:
              </label>
              <input
                type="text"
                value={color || "#333"}
                onChange={handleColorChange}
                className="rounded cursor-pointer w-15 h-7 text-primary outline-0"
              />
            </div>
            <div className="flex gap-3 place-items-center">
              <label htmlFor="" className="text-xl">
                Size:
              </label>
              <select
                name=""
                id=""
                onChange={handleFontChange}
                className="px-2 py-1 rounded text-primary outline-0"
              >
                <option value="12px">12</option>
                <option value="16px">16</option>
                <option value="20px">20</option>
                <option value="24px">24</option>
                <option value="32px">32</option>
              </select>
            </div>
            <div className="flex gap-1 pb-2 place-items-center">
              <button
                onClick={toggleBold}
                className={`px-4 py-2 text-sm font-bold ${clicked.isBold ? "bg-primary text-primary-very-light" : "bg-silver-very-light text-secondary-dark"} rounded-xl bold`}
              >
                B
              </button>

              <button
                onClick={toggleItalic}
                className={`px-4 py-2 text-sm italic font-bold ${clicked.isItalic ? "bg-primary text-primary-very-light" : "bg-silver-very-light text-secondary-dark"} rounded-xl`}
              >
                I
              </button>

              <button
                onClick={toggleUnderline}
                className={`px-4 py-2 text-sm font-bold ${clicked.isUnderlined ? "bg-primary text-primary-very-light" : "bg-silver-very-light text-secondary-dark"} underline rounded-xl`}
              >
                U
              </button>

              <button
                onClick={toggleDirection}
                className="px-4 py-2 text-sm font-bold bg-silver-very-light text-secondary-dark rounded-xl"
              >
                {direction === "ltr" ? "rtl" : "ltr"}
              </button>
            </div>
          </div>
          <div
            ref={editorRef}
            contentEditable
            dir={direction}
            className="min-h-[200px] p-4 border border-silver-light rounded-2xl bg-black focus:outline-none focus:ring-2 focus:ring-primary text-silver-dark"
            style={{ fontSize, ...(color && { color }) }}
            suppressContentEditableWarning
          />
          <div className="flex gap-3 pt-5">
            <button
              onClick={handleSave}
              className="px-4 py-2 font-bold text-white rounded bg-gradient-to-r from-primary to-primary-very-dark hover:bg-silver-dark"
            >
              Save Note
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 font-bold text-white rounded bg-linear-to-r from-primary to-primary-very-dark hover:bg-silver-dark"
            >
              Clear
            </button>
          </div>
          <div className="lg:w-80">
            <h2 className="text-xl text-silver-very-light">Saved Notes</h2>
            <div className="max-h-[500px] overflow-y-auto pr-2">
              {savedNotes.length === 0 ? (
                <p className="text-sm text-primary">No saved notes yet.</p>
              ) : (
                savedNotes.map((note) => (
                  <div
                    key={note.id}
                    className="relative p-3 border rounded border-silver-very-light bg-silver hover:bg-silver-light"
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
                      <span className="block text-xs text-gray-100">
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
  );
};

export default RichTextEditor;
