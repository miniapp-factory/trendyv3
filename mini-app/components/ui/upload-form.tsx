"use client";

import { useState } from "react";
import { Button } from "./button";

export function UploadForm() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;
    // TODO: upload to IPFS or Arweave
    console.log("Uploading", file);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <label className="flex flex-col gap-2">
        <span>Upload Image</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          className="border rounded p-2"
        />
      </label>
      <Button type="submit" disabled={!file}>
        Upload
      </Button>
    </form>
  );
}
