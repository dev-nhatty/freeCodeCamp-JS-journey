const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  const result = [];

  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      const track = playlists[i][j];

      result.push({
        ...track,
        source: [i, j]
      });
    }
  }

  return result;
}


function scoreTracks(tracks) {
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    const track = tracks[i];

    result.push({
      ...track,
      score: track.votes * 10 - Math.abs(track.bpm - 120)
    });
  }

  return result;
}


function dedupeTracks(tracks) {
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    let alreadyExists = false;

    for (let j = 0; j < result.length; j++) {
      if (result[j].trackId === tracks[i].trackId) {
        alreadyExists = true;
        break;
      }
    }

    if (!alreadyExists) {
      result.push(tracks[i]);
    }
  }

  return result;
}


function enforceArtistQuota(tracks, maxOccurrences) {
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    let artistCount = 0;

    for (let j = 0; j < result.length; j++) {
      if (result[j].artist === tracks[i].artist) {
        artistCount++;
      }
    }

    if (artistCount < maxOccurrences) {
      result.push(tracks[i]);
    }
  }

  return result;
}


function buildSchedule(tracks) {
  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    result.push({
      slot: i + 1,
      trackId: tracks[i].trackId
    });
  }

  return result;
}


function remixPlaylist(playlists, maxOccurrences) {
  const flattened = flattenPlaylists(playlists);

  const scored = scoreTracks(flattened);

  const deduped = dedupeTracks(scored);

  const quotaEnforced = enforceArtistQuota(
    deduped,
    maxOccurrences
  );

  const schedule = buildSchedule(quotaEnforced);

  return schedule;
}