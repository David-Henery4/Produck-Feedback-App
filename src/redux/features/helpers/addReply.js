

const addReply = (id, currentFeedback, replyData) => {
  const currentComments = currentFeedback.comments.find(
    (item) => item.id === id
  );
  return currentFeedback.comments.map((item) => {
    if (item.id === currentComments.id) {
      item = {
        ...currentComments,
        replies: currentComments?.replies
          ? [...currentComments?.replies, replyData]
          : [replyData],
      };
    }
    return item;
  });
}

export default addReply