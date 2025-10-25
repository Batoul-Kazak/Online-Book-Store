"use client";

import { useState, useRef, useCallback } from "react";

import backgroundImg from "@/app/assets/website/dark-image.jpg";

interface BlogEntry {
  id: string;

  username: string;

  userInfo: {
    blogNum: number;

    title: string;

    content: string;
  };
}

const bgImage = {
  backgroundImage: `url(${backgroundImg.src})`,

  backgroundPosition: "center",

  backgroundRepeat: "no-repeat",

  backgroundSize: "cover",

  height: "10rem",

  width: "100%",
};

const RichTextEditor = () => {
  const editorRef = useRef<HTMLDivElement>(null);

  const [color, setColor] = useState<string>("");

  const [fontSize, setFontSize] = useState<string>("16px");

  const [direction, setDirection] = useState<"ltr" | "rtl">("ltr");

  const [title, setTitle] = useState<string>("");

  const [savedNotes, setSavedNotes] = useState<BlogEntry[]>([]);

  const [currentBlogNum, setCurrentBlogNum] = useState(1);

  const execCommand = useCallback((command: string, value: string = "") => {
    document.execCommand(command, false, value);

    editorRef.current?.focus();
  }, []);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;

    setColor(newColor);

    execCommand("foreColor", newColor);
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const size = e.target.value;

    setFontSize(size);

    execCommand("fontSize", size);
  };

  const toggleBold = () => execCommand("bold");

  const toggleItalic = () => execCommand("italic");

  const toggleUnderline = () => execCommand("underline");

  const toggleDirection = () => {
    const newDir = direction === "ltr" ? "rtl" : "ltr";

    setDirection(newDir);

    if (editorRef.current) {
      editorRef.current.dir = newDir;
    }
  };

  const handleSave = () => {
    if (!editorRef.current) return;

    const content = editorRef.current.innerHTML.trim();

    if (!title.trim() && !content) return;

    const newNote: BlogEntry = {
      id: Date.now().toString(),

      username: "",

      userInfo: {
        blogNum: currentBlogNum,

        title: title.trim() || "(No Title)",

        content: content || "<p>(No content)</p>",
      },
    };

    setSavedNotes((prev) => [...prev, newNote]);

    setCurrentBlogNum((prev) => prev + 1);
  };

  const handleClear = () => {
    setTitle("");

    if (editorRef.current) {
      editorRef.current.innerHTML = "";
    }

    setColor("");

    setFontSize("16px");

    setDirection("ltr");

    if (editorRef.current) {
      editorRef.current.dir = "ltr";
    }
  };

  const handleLoadNote = (note: BlogEntry) => {
    setTitle(note.userInfo.title);

    if (editorRef.current) {
      editorRef.current.innerHTML = note.userInfo.content;
    }
  };

  const handleDeleteNote = (id: string) => {
    setSavedNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div
      className="max-w-6xl mx-auto p-4 min-h-screen bg-cover bg-center bg-no-repeat"
      style={bgImage}
    >
      <div className="flex flex-col lg:flex-row gap-6">
               
        <div className="flex-1">
                   
          <div className="mb-4">
                       
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Note title..."
              className="w-full px-3 py-2 text-lg border border-silver-light text-2xl text-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
                     
          </div>
                   
          <div className="flex flex-wrap gap-2 p-3 bg-gray-100 rounded-lg border border-silver-light mb-4">
                       
            <div className="flex items-center gap-1">
                           
              <label className="text-sm font-medium text-silver-dark">
                                Color:              
              </label>
                           
              <input
                type="color"
                value={color || "#374151"}
                onChange={handleColorChange}
                className="w-7 h-7 cursor-pointer rounded border"
              />
                         
            </div>
                       
            <div className="flex items-center gap-1">
                           
              <label className="text-sm font-medium text-silver-dark">
                                Size:              
              </label>
                           
              <select
                value={fontSize}
                onChange={handleFontSizeChange}
                className="text-sm border rounded px-2 py-1 text-silver-dark"
              >
                                <option value="12px">Small</option>             
                  <option value="16px">Normal</option>               
                <option value="20px">Large</option>               
                <option value="24px">X-Large</option>               
                <option value="32px">XX-Large</option>             
              </select>
                         
            </div>
                       
            <div className="flex items-center gap-1">
                           
              <button
                onClick={toggleBold}
                className="px-2 py-1 text-sm bg-white border rounded hover:bg-silver-very-light text-silver-dark font-bold"
              >
                                B              
              </button>
                           
              <button
                onClick={toggleItalic}
                className="px-2 py-1 text-sm bg-white border rounded hover:bg-silver-very-light text-silver-dark italic"
              >
                                I              
              </button>
                           
              <button
                onClick={toggleUnderline}
                className="px-2 py-1 text-sm bg-white border rounded hover:bg-silver-very-light text-silver-dark underline"
              >
                                U              
              </button>
                         
            </div>
                       
            <button
              onClick={toggleDirection}
              className="px-2 py-1 text-sm bg-white border rounded hover:bg-silver-very-light text-silver-dark"
            >
                            {direction === "ltr" ? "← RTL" : "LTR →"}           
            </button>
                     
          </div>
                   
          <div
            ref={editorRef}
            contentEditable
            dir={direction}
            className="min-h-[200px] p-4 border border-silver-light rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-silver-dark"
            style={{
              fontSize,

              ...(color && { color }),
            }}
            suppressContentEditableWarning={true}
          />
                   
          <div className="mt-4 flex gap-3">
                       
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
            >
                            Save Note            
            </button>
                       
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-silver text-white font-medium rounded hover:bg-silver-dark transition-colors"
            >
                            Clear            
            </button>
                     
          </div>
                 
        </div>
               
        <div className="lg:w-80">
                   
          <h2 className="text-2xl font-semibold text-white mb-3">
                        Saved Notes          
          </h2>
                   
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                       
            {savedNotes.length === 0 ? (
              <p className="text-blue-500 text-sm">No notes saved yet.</p>
            ) : (
              savedNotes.map((note) => (
                <div
                  key={note.id}
                  className="border border-silver-very-light rounded p-3 bg-gray-50 hover:bg-gray-100 relative"
                >
                                   
                  <button
                    onClick={() => handleLoadNote(note)}
                    className="w-full text-left"
                  >
                                       
                    <h3 className="font-medium text-silver-very-dark">
                                            {note.userInfo.title}               
                         
                    </h3>
                                       
                    <p
                      className="text-sm text-silver mt-1 line-clamp-2"
                      dangerouslySetInnerHTML={{
                        __html: note.userInfo.content,
                      }}
                    />
                                       
                    <span className="text-xs text-gray-100 block mt-1">
                                            Note #{note.userInfo.blogNum}       
                                 
                    </span>
                                     
                  </button>
                                   
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="absolute top-2 right-2 text-silver hover:text-red-600"
                    title="Delete note"
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
  );
};

export default RichTextEditor;
