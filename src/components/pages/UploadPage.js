import React, { useState } from "react";

import axios from "axios";

const YouTubeApiEndpoint = "http://192.168.0.106:4000/upload";
// const YouTubeUploadApi =

const UploadPage = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    file: null,
  });

  function handleChange(event) {
    // if (event.target.name === "file") {
    //   console.log(event.target.files);
    // }

    const inputValue =
      event.target.name === "file" ? event.target.files[0] : event.target.value;
    setForm({
      ...form,
      [event.target.name]: inputValue,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log({ form });
    const videoData = new FormData();
    videoData.append("VideoFile", form.file);
    videoData.append("title", form.title);
    videoData.append("description", form.description);

    axios.post(YouTubeApiEndpoint, videoData).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div>
      <h1>Upload Youtube Video</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            onChange={handleChange}
            type="text"
            name="title"
            autoComplete="off"
            placeholder="Title"
          />
        </div>
        <br />
        <div>
          <textarea
            onChange={handleChange}
            type="Description"
            name="description"
            autoComplete="off"
            placeholder="Description"
          />
        </div>
        <br />
        <div>
          <input
            onChange={handleChange}
            accept="video/mp4"
            type="file"
            name="file"
            placeholder="Add Video File"
          />
        </div>
        <br />
        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
};

export default UploadPage;
