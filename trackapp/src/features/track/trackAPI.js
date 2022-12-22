import {trackInfo} from './trackData'

export function fetchTrackData() {
    return new Promise((resolve) =>
    resolve({ data: trackInfo })
    );
  }
  