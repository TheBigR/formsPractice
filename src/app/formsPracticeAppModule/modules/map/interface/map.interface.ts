const zoomDistance = 750000;

export const zoomLevel = {
  z1: new Cesium.DistanceDisplayCondition(zoomDistance),
  z2: new Cesium.DistanceDisplayCondition(0.0, zoomDistance)
};
