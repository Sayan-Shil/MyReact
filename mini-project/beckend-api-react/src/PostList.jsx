import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/actions/postAction";

const PostList = () => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-lg font-semibold text-blue-600 animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <p>❌ Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">📌 Posts</h2>
      <ul className="space-y-4">
        {post.map((p) => (
          <li
            key={p.id}
            className="p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-600">{p.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
