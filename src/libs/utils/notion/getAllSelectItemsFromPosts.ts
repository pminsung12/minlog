import { TPosts } from "src/types"

interface ItemCount {
  [itemName: string]: number;
}

export function getAllSelectItemsFromPosts(
  key: "tags" | "category",
  posts: TPosts
): ItemCount {
  const selectedPosts = posts.filter((post) => post?.[key]);
  const items = [...selectedPosts.map((p) => p[key]).flat()];
  const itemObj: ItemCount = {};
  items.forEach((item) => {
    if (!item) return;
    if (item in itemObj) {
      itemObj[item]++;
    } else {
      itemObj[item] = 1;
    }
  });
  return itemObj;
}
