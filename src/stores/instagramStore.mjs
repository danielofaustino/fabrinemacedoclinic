const { VITE_INSTAGRAMTOKENBEAUTY } = import.meta.env;
import { writable } from 'svelte/store';

export const posts = writable([]);

const fetchInstagramPosts = async () => {
	const res = await fetch(
		`https://graph.instagram.com/me/media?access+token=${VITE_INSTAGRAMTOKENBEAUTY}&fields=media_url,media_type,caption,permalink&limit=10`
	);
	const data = await res.json();

	const filteredPosts = data.data.filter((post) => {
		return post.media_type == 'IMAGE';
	});

	posts.set(filteredPosts.slice(0-3));
};

fetchInstagramPosts();
