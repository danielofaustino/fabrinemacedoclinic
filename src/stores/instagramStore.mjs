const { VITE_INSTAGRAMTOKENBEAUTY } = import.meta.env;
import { writable } from 'svelte/store';

export const posts = writable([]);

const fetchInstagramPosts = async () => {

	try {
		const res = await fetch(
			`https://graph.instagram.com/me/media?access+token=${VITE_INSTAGRAMTOKENBEAUTY}&fields=media_url,media_type,caption,permalink&limit=10`
		);
		const data = await res.json();
	
		const filteredPosts = data.data.filter((post) => {
			return post.media_type == 'IMAGE';
		});

		const postsModified = filteredPosts.map((post) =>{
			return {
				permalink:post.permalink,
				media_url:post.media_url,
				id:post.id,
				caption: `${post.caption.substr(0,150)} ...`
			}
		})
	
		posts.set(postsModified);
	} catch (error) {

		console.log(error)
	}
	
};

fetchInstagramPosts();
