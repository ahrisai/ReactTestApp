import { useMemo } from "react";

export const useSortedPosts=(posts,sort)=>{
    const sortedPosts = useMemo(() => {
      console.log(sort)
        if (sort) {
          return [
            ...posts.sort((a, b) => a[sort].localeCompare(b[sort])),
          ];
        }
        return posts;
      }, [sort, posts]);

      return sortedPosts
}

export const usePosts=(posts,sort,search)=>{
  const sortedPosts=useSortedPosts(posts,sort);
  const finalPosts = useMemo(() => {
    return sortedPosts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, sortedPosts]);
  return finalPosts
}

