import o3dapi from 'o3-dapi-core';
import o3dapiNeoN3 from 'o3-dapi-neo-n3';

o3dapi.initPlugins([o3dapiNeoN3]);

const {
  utils,
  openO3,
  onReady,
  setReactNativeOverrides,
  setNodeJSOverrides,
} = o3dapi;

export default {
  ...o3dapi.NEO3,
  utils,
  openO3,
  onReady,
  setReactNativeOverrides,
  setNodeJSOverrides,
};
