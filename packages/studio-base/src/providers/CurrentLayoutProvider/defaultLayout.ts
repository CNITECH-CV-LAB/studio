// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { LayoutData } from "@foxglove/studio-base/context/CurrentLayoutContext/actions";
import { defaultPlaybackConfig } from "@foxglove/studio-base/providers/CurrentLayoutProvider/reducers";

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
        distance: 24.554753262683736,
        phi: 36.201161190731675,
        thetaOffset: 48.278047585690395,
        targetOffset: [-3.965138692308386, -1.1256807555962407, 2.237021977018253e-15],
        target: [0, 0, 0],
        targetOrientation: [0, 0, 0, 1],
        fovy: 45,
        near: 0.5,
        far: 5000,
      },
      followMode: "follow-pose",
      scene: {},
      transforms: {},
      topics: {
        "/points": {
          visible: true,
          colorField: "intensity",
          colorMode: "colormap",
          colorMap: "turbo",
          pointSize: 2,
        },
        "/radar/points": {
          visible: false,
        },
        "/cloud_registered": {
          visible: true,
          colorField: "intensity",
          colorMode: "colormap",
          colorMap: "turbo",
          decayTime: 1000,
          flatColor: "#0f0ff25c",
          stixelsEnabled: false,
          explicitAlpha: 0.40000000000000013,
        },
        "/initialpose": {
          visible: false,
        },
        "/move_base_simple/goal": {
          visible: false,
        },
        "/goal": {
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
