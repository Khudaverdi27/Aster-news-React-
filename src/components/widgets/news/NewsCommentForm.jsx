import Button from "@/components/ui/button";
import { getStorage } from "../../../storage/storage";
import { useEffect, useState } from "react";
import { usePostCommentData } from "../../../hooks/useFetch";
function NewsCommetnForm({ id, fetchComments }) {
  const token = getStorage("token");
  const [comment, setComment] = useState("");
  const [data, apiFetch, loading] = usePostCommentData();

  const params = {};

  const onPostComment = () => {
    params.body = comment;
    apiFetch(id, params);
  };
  useEffect(() => {
    fetchComments(id);
  }, [data]);

  return (
    <div className="mb-7">
      <h4 className="font-bold text-[17px] text-amberBlack mb-[10px]">
        Comment yaz
      </h4>
      <div className="mb-1">
        <textarea
          disabled={!token}
          onChange={(e) => {
            setComment(e.target.value.trim());
          }}
          placeholder="commentini buraya əlavə et..."
          className="w-full rounded-theme bg-[#ECF5F8] px-[18px] py-[12px] resize-none outline-none placeholder:text-[#a7b9c4] disabled:opacity-50"
          rows="5"
        ></textarea>

        {!token && (
          <p className="text-red-500 text-sm">
            Comment yazmaq üçün hesabınıza giriş etməlisiniz...
          </p>
        )}
      </div>
      <div>
        <Button
          onClick={onPostComment}
          disabled={!comment && true}
          property={"sky-blue"}
          size={"lg"}
          rounded={true}
        >
          Əlavə Et
        </Button>
      </div>
    </div>
  );
}

export default NewsCommetnForm;
