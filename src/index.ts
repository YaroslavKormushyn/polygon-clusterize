import {
  Feature,
  Polygon,
  Units,
} from '@turf/helpers';

export function clusterizePolygons(
  polygons: Feature<Polygon>[],
  { distance, units = 'kilometers' }: { distance: number; units: Units },
) {
  // TODO: add polygon clustering by distance from each other
  // TODO: add handling of inner walls in each polygon where wall width <= distance
  // TODO: snap polygon points in each cluster if distance between points <= distance
  // TODO: union on each cluster to flatten geometry
}
