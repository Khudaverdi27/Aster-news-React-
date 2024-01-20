import moment from "moment";
import { FiTrash } from "react-icons/fi";

function NewsCommentItem({ commentItem = {} }) {
  return (
    <div>
      <h5 className="text-skyBlue font-medium">
        {commentItem?.user?.name + " " + commentItem?.user?.surname}
      </h5>
      <p className="text-[#667b90] font-light my-2">{commentItem.body}</p>
      <div className="flex justify-between">
        <span className="text-xs text-[#adbcc4] font-light">
          Paylaşıldı{" "}
          {moment(commentItem.created_at).format("MMMM Do YYYY - h:mm a")}
        </span>
        <button className="flex items-center text-xs text-[#ff8cbc] space-x-1">
          <span>
            <FiTrash />
          </span>
          <span>Commenti sil</span>
        </button>
      </div>
    </div>
  );
}

export default NewsCommentItem;
