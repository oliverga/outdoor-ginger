import ArticleCard from "./ArticleCard";

export default function PopUpContent({ selectedPost }) {
	return <ArticleCard post={selectedPost} key={selectedPost.slug.current} />;
}
