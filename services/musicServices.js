const API_URL = "https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?";

const searchTrack = async (title, artist) => {
  try {
    const res = await fetch(`${API_URL}s=${artist}&t=${title}`);
    const data = await res.json();
    console.log(data.track[0].strMusicVid);
    return data.track[0] || [];
  } catch (error) {
    console.error("Error fetching track:", error);
    return [];
  }
};

module.exports = { searchTrack };
