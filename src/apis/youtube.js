import axios from "axios";
const KEY = "AIzaSyDP_nDJgNUtio_rHERF54eWLZBUEtSHZnE";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
});