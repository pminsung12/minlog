import usePostsQuery from "./usePostsQuery"
import { getAllSelectItemsFromPosts } from "src/libs/utils/notion"

interface ItemCount {
  [itemName: string]: number;
}


export const useTagsQuery = (): ItemCount => {
  const posts = usePostsQuery();
  const tags = getAllSelectItemsFromPosts("tags", posts);

  return Object.entries(tags)
    .sort(([a], [b]) => {
      if (a === "방명록") return -1;
      if (b === "방명록") return 1;
      return a.localeCompare(b);
    })
    .reduce((obj, [key, value]) => {
      obj[key] = value;
      return obj;
    }, {} as ItemCount);
};
