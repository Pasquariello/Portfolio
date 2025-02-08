
import { createComment, createPost, deletePost } from '@/app/lib/data';

export async function createNewPostAction(postData) {
    return await createPost(postData);
}

export async function createNewCommentAction({postId, comment}) {
    const res = await createComment(postId, {
        comment: { body: comment }
    })
    return res;
}

export async function deleteCommentAction(spaceId, postId) {
    const res = await deletePost(spaceId, postId);

    return res;
}
