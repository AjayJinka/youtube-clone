export const sidebarItemOne = [
  {
    name: "Home",
    iconUrl:
      "https://th.bing.com/th/id/OIP.GcRlpNTMNf06GOD3l3pILgHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Shorts",
    iconUrl:
      "https://th.bing.com/th/id/OIP.3Y1mPKAhN6R5nNVgkQtSRgHaFj?rs=1&pid=ImgDetMain",
  },
  {
    name: "Subscriptions",
    iconUrl:
      "https://th.bing.com/th/id/OIP.zTIi2EjU7o4umbAkGi8oPQHaHa?rs=1&pid=ImgDetMain",
  },
];

export const sidebarItemTwo = [
  {
    name: "History",
    iconUrl:
      "https://th.bing.com/th/id/OIP.MNpKeNd72yFbg8CWVfsEIQHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Playlists",
    iconUrl:
      "https://cdn1.iconfinder.com/data/icons/youtube-23/27/Union-6-512.png",
  },
  {
    name: "Your Videos",
    iconUrl:
      "https://th.bing.com/th/id/R.050934f27c305252759657b0bf7a8870?rik=GwB4ZjD385NjiQ&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2fyoutube-icon-vector-14.png&ehk=aXXNtLTp8kdbB1HYUprgFWTnRy3NlfXWszz6xt8qoUg%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Watch Later",
    iconUrl:
      "https://th.bing.com/th/id/OIP.7NYOjioWPsu7UV5oAm9guwHaHa?rs=1&pid=ImgDetMain",
  },
  {
    name: "Liked Videos",
    iconUrl:
      "https://www.kindpng.com/picc/m/11-114955_transparent-like-icon-png-youtube-like-button-svg.png",
  },
];

export const youtubeLogo =
  "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png";

export const hamburgerIcon =
  "https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg";

export const profileIcon =
  "https://th.bing.com/th/id/OIP.S_BEyoTYNIwRpRXmQWtKJAHaHa?rs=1&pid=ImgDetMain";

export const listOfButtons = [
  "All",
  "Live",
  "News",
  "Podcasts",
  "Music",
  "Gaming",
];

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTYBE_SUGGESTIONS_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20`;

export const OFFSET_LIVE_CHAT = 10;
