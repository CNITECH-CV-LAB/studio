// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/
import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

import { ConfigParams, devServerConfig, mainConfig } from "@foxglove/studio-web/src/webpackConfigs";

import packageJson from "../package.json";

const params: ConfigParams = {
  outputPath: path.resolve(__dirname, ".webpack"),
  contextPath: path.resolve(__dirname, "src"),
  entrypoint: "./entrypoint.tsx",
  prodSourceMap: "source-map",
  version: packageJson.version,
};
const app = express();
app.get("/files/pcd", (_: Request, res: Response) => {
  // 读取文件列表
  const directoryPath = path.join(__dirname, "public/PCD");

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Unable to read files" });
    }
    return res.json(files);
  });
});

app.get("/download_pcd/:filename", (req: Request, res: Response) => {
  // 下载文件
  const filename = req.params.filename;
  if (typeof filename === "string") {
    const filePath = path.join(__dirname, "public/PCD", filename);
    return res.download(filePath);
  } else {
    return res.status(404).json({ error: "File not found" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// foxglove-depcheck-used: webpack-dev-server
export default [devServerConfig(params), mainConfig(params)];
