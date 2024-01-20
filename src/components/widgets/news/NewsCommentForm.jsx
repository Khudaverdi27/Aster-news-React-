import Button from "@/components/ui/button";
function NewsCommetnForm() {
  return (
    <div className="mb-7">
      <h4 className="font-bold text-[17px] text-amberBlack mb-[10px]">
        Comment yaz
      </h4>
      <textarea
        placeholder="commentini buraya əlavə et..."
        className="w-full rounded-theme bg-[#ECF5F8] px-[18px] py-[12px] resize-none outline-none placeholder:text-[#a7b9c4]"
        rows="5"
      ></textarea>
      <div>
        <Button property={"sky-blue"} size={"lg"} rounded={true}>
          Əlavə Et
        </Button>
      </div>
    </div>
  );
}

export default NewsCommetnForm;
