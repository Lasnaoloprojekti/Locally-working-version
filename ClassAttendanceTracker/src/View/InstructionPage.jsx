import React, { useState } from 'react';

export const InstructionPage = () => {
    const questionsWithVideos = [
        { question: "How to create new course", videoUrl: "https://drive.google.com/file/d/13agszNzejhbYVl5HCJDQrJaAtAEepty3/preview" },
        { question: "How to add students to a course", videoUrl: "https://drive.google.com/file/d/1YdZnvgvQStpcrxFM76kdI8b7DeyTM7ty/preview" },
        { question: "Adding teacher to a course", videoUrl: "https://drive.google.com/file/d/1NxWeD7A0z4GxBFgMcgSA97idzwZD6gGq/preview" },
        { question: "Managing Topics", videoUrl: "https://drive.google.com/file/d/1yx1xGFimeqt-FATpxvF2xrhA96z06JmS/preview" },
        { question: "How to see enrolled students", videoUrl: "https://drive.google.com/file/d/1mJZ-ucMie36WapY3e3_Kfmj_yt-v2m8n/preview" },
        { question: "How to delete and deactive course", videoUrl: "https://drive.google.com/file/d/16Emuc2YQpBuelOIIwUuEjW4w4xNWo2Bk/preview" },
        { question: "How to collect attendance", videoUrl: "https://drive.google.com/file/d/17wCGzMskeId_2GiPXrtjHmLT9QWu8Yc3/preview" },
        { question: "How to collect attendance MANUALLY", videoUrl: "https://drive.google.com/file/d/1Z5Np1KI4lJk66Iu79FpMMqbL6bRHFdtg/preview" },
        { question: "How to check students participation rate", videoUrl: "https://drive.google.com/file/d/1eyk7CuiCVxMaBc7711CjgF1YAHujztVz/preview" }
        // Nine questions and their corresponding videos
    ];

    const [showVideo, setShowVideo] = useState(Array(9).fill(false));

    const handleShowVideo = (index) => {
        const updatedShowVideo = [...showVideo];
        updatedShowVideo[index] = !updatedShowVideo[index];
        setShowVideo(updatedShowVideo);
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center text-4xl font-bold my-8">Video Instructions</h1>
            {questionsWithVideos.map((item, index) => (
                <div key={index} className="text-center mb-8">
                    <p className="text-lg font-semibold mb-2">{item.question}</p>
                    <button 
                        onClick={() => handleShowVideo(index)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
                        {showVideo[index] ? "Hide Video" : "Show Video"}
                    </button>
                    {showVideo[index] && (
                        <div className="mt-4 flex justify-center">
                            <iframe
                                src={item.videoUrl}
                                width="1280"
                                height="720"
                                allow="autoplay"
                                className="max-w-full"
                            ></iframe>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default InstructionPage;
