import React, { useState } from "react";

// IMPORT IMAGES (YOUR FILE NAMES)
import Cpp from "../assets/img/C.png";
import Flutter from "../assets/img/Flutter.png";
import JavaSql from "../assets/img/Java_Sql.png";
import Python from "../assets/img/Python.png";
import ReactJs from "../assets/img/ReactJs.png";

function Skill() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [desc, setDesc] = useState("");

  const openModal = (img, text) => {
    setSelectedImg(img);
    setDesc(text);
    setOpen(true);
  };

  return (
    <>
      <div className="w-full h-full px-4 md:px-16 py-8 md:py-10 flex flex-col gap-8">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
          Skill & <span className="text-cyan-400">Certificate</span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* C */}
          <div
            onClick={() =>
              openModal(
                Cpp,
                "Certificate of completion for C programming language."
              )
            }
            className="cursor-pointer rounded-xl overflow-hidden bg-[#1f232d] shadow-lg hover:scale-105 transition"
          >
            <div className="w-full h-[180px] md:h-[220px] bg-[#2a2f3a] flex items-center justify-center p-3">
              <img
                src={Cpp}
                alt="C Language"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* C++ */}
          <div
            onClick={() =>
              openModal(
                Cpp,
                "Certificate of completion for C++ programming language."
              )
            }
            className="cursor-pointer rounded-xl overflow-hidden bg-[#1f232d] shadow-lg hover:scale-105 transition"
          >
            <div className="w-full h-[180px] md:h-[220px] bg-[#2a2f3a] flex items-center justify-center p-3">
              <img
                src={Cpp}
                alt="C++ Language"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Java + SQL */}
          <div
            onClick={() =>
              openModal(
                JavaSql,
                "Certificate of completion for Java and SQL training."
              )
            }
            className="cursor-pointer rounded-xl overflow-hidden bg-[#1f232d] shadow-lg hover:scale-105 transition"
          >
            <div className="w-full h-[180px] md:h-[220px] bg-[#2a2f3a] flex items-center justify-center p-3">
              <img
                src={JavaSql}
                alt="Java SQL"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Python */}
          <div
            onClick={() =>
              openModal(
                Python,
                "Certificate of completion for Python programming."
              )
            }
            className="cursor-pointer rounded-xl overflow-hidden bg-[#1f232d] shadow-lg hover:scale-105 transition"
          >
            <div className="w-full h-[180px] md:h-[220px] bg-[#2a2f3a] flex items-center justify-center p-3">
              <img
                src={Python}
                alt="Python"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* React */}
          <div
            onClick={() =>
              openModal(
                ReactJs,
                "Certificate of completion for ReactJS development."
              )
            }
            className="cursor-pointer rounded-xl overflow-hidden bg-[#1f232d] shadow-lg hover:scale-105 transition"
          >
            <div className="w-full h-[180px] md:h-[220px] bg-[#2a2f3a] flex items-center justify-center p-3">
              <img
                src={ReactJs}
                alt="React"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Flutter */}
          <div
            onClick={() =>
              openModal(
                Flutter,
                "Certificate of completion for Flutter mobile development."
              )
            }
            className="cursor-pointer rounded-xl overflow-hidden bg-[#1f232d] shadow-lg hover:scale-105 transition"
          >
            <div className="w-full h-[180px] md:h-[220px] bg-[#2a2f3a] flex items-center justify-center p-3">
              <img
                src={Flutter}
                alt="Flutter"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

          <div
            className="
              bg-[#20232C]
              w-full max-w-[600px]
              rounded-2xl
              p-6
              shadow-[0_20px_60px_rgba(0,0,0,0.9)]
            "
          >
            {/* IMAGE */}
            <img
              src={selectedImg}
              alt="Selected"
              className="w-full h-[220px] md:h-[320px] object-contain bg-[#2a2f3a] rounded-lg p-3"
            />

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-center mt-4 leading-relaxed">
              {desc}
            </p>

            {/* CLOSE */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => setOpen(false)}
                className="px-6 py-2 bg-cyan-400 text-black font-semibold rounded-full hover:bg-cyan-300 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Skill;
