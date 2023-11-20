
/* eslint-disable */import { useState } from "react";
import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import SearchBar from "../components/SearchBar";

export default function Home({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (searchTerm) => {
    const filtered = posts.filter(
      (post) =>
        post.node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.node.categories.some((category) =>
          category.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        <SearchBar onSearch={handleSearch} />
          {filteredPosts.length === 0 ? (
            <div className="text-center text-gray-600 text-xl">
              No se encontraron publicaciones para tu búsqueda.
            </div>
          ) : (
            filteredPosts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))
          )}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
