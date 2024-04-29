import usePostsQuery from "./usePostsQuery"
import { getAllSelectItemsFromPosts } from "src/libs/utils/notion"

export const useTagsQuery = () => {
  const posts = usePostsQuery()
  const tags = getAllSelectItemsFromPosts("tags", posts)

  // 태그 정렬 로직
  return Object.entries(tags)
    .sort(([a], [b]) => {
      if (a === "[방명록]") return -1
      if (b === "[방명록]") return 1
      return a.localeCompare(b)
    })
    .reduce((obj, [key, value]) => {
      obj[key] = value
      return obj
    }, {})
}
