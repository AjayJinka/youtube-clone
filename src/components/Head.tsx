import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { type StoreState } from "../utils/store";
import {
  hamburgerIcon,
  profileIcon,
  YOUTUBE_SEARCH_API,
  youtubeLogo,
  YOUTYBE_SUGGESTIONS_API,
} from "../utils/constants";
import { useEffect, useState } from "react";
import { cacheResults, setVideos } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store: StoreState) => store.search.cache);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const fetchVideosForSuggestion = async (query: string) => {
    const data = await fetch(
      `${YOUTUBE_SEARCH_API}&q=${query}&type=video&key=${
        import.meta.env.VITE_GOOGLE_API_KEY
      }`
    );
    const json = await data.json();
    dispatch(setVideos(json.items));
  };
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTYBE_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <div className="grid grid-flow-col shadow px-2 py-1 items-center">
      <div className="col-span-1 flex items-center">
        <img
          className="h-10 cursor-pointer"
          src={hamburgerIcon}
          alt="menu"
          onClick={toggleMenuHandler}
        />
        <img className="h-16" src={youtubeLogo} alt="youtube" />
      </div>
      <div className="col-span-10">
        <div>
          <input
            type="search"
            className="border w-1/2 rounded-l-full p-2"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border rounded-r-full p-2">🔍</button>
        </div>
        {suggestions && suggestions.length > 0 && showSuggestions && (
          <div className="fixed bg-white py-2 w-[36.7rem] rounded-lg border shadow-lg">
            <ul>
              {suggestions.map((s) => (
                <li
                  className="px-5 py-2 hover:bg-gray-200"
                  key={s}
                  onMouseDown={() => {
                    setSearchQuery(s);
                    fetchVideosForSuggestion(s);
                  }}
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end">
        <img className="h-8" src={profileIcon} alt="profile" />
      </div>
    </div>
  );
};

export default Head;
