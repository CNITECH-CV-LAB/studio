// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { LayoutData } from "@foxglove/studio-base/context/CurrentLayoutContext/actions";
// import { defaultPlaybackConfig } from "@foxglove/studio-base/providers/CurrentLayoutProvider/reducers";

/**
 * This is loaded when the user has no layout selected on application launch
 * to avoid presenting the user with a blank layout.
 */
export const defaultLayout: LayoutData = {
  configById: {
    "3D!18i6zy7": {
      layers: {
        "845139cb-26bc-40b3-8161-8ab60af4baf5": {
          visible: false,
          frameLocked: true,
          label: "Grid",
          instanceId: "845139cb-26bc-40b3-8161-8ab60af4baf5",
          layerId: "foxglove.Grid",
          size: 10,
          divisions: 10,
          lineWidth: 1,
          color: "#248eff",
          position: [0, 0, 0],
          rotation: [0, 0, 0],
          order: 1,
        },
      },
      cameraState: {
        perspective: true,
        distance: 45.44146361605684,
        phi: 47.53076308266325,
        thetaOffset: 178.13965866685575,
        targetOffset: [0, 0, 0],
        target: [0, 0, 0],
        targetOrientation: [0, 0, 0, 1],
        fovy: 45,
        near: 0.5,
        far: 5000,
      },
      followMode: "follow-pose",
      followTf: "camera_init",
      scene: {},
      transforms: {
        "frame:camera_init": {
          visible: true,
        },
        "frame:body": {
          visible: true,
        },
      },
      topics: {
        "/cloud_registered": {
          visible: true,
          colorField: "x",
          colorMode: "gradient",
          colorMap: "rainbow",
          explicitAlpha: 0.5,
          pointSize: 1,
          flatColor: "#241ae857",
          stixelsEnabled: false,
          gradient: ["#a2ff007d", "#0d00ff7d"],
          pointShape: "point",
          maxValue: 500,
          minValue: -500,
          decayTime: 10000,
        },
        "/path": {
          visible: true,
          gradient: ["#e1ff00", "#bfff00"],
          lineWidth: 0.32054570952558287,
          type: "line",
        },
        "/initialpose": {
          visible: false,
        },
        "/Laser_map": {
          visible: false,
        },
        "/move_base_simple/goal": {
          visible: false,
        },
        "/cloud_effected": {
          visible: false,
        },
      },
      publish: {
        type: "point",
        poseTopic: "/move_base_simple/goal",
        pointTopic: "/clicked_point",
        poseEstimateTopic: "/initialpose",
        poseEstimateXDeviation: 0.5,
        poseEstimateYDeviation: 0.5,
        poseEstimateThetaDeviation: 0.26179939,
      },
      imageMode: {},
    },
  },
  globalVariables: {},
  userNodes: {},
  playbackConfig: {
    speed: 1,
  },
  layout: "3D!18i6zy7",
};
