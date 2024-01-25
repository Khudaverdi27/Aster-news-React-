import FormText from "../../ui/Form/FormText";
import Button from "@/components/ui/button";
function SubscribeEmail({ flex, p, block }) {
  return (
    <>
      <div
        className={`${
          flex ? "right-section-cards space-y-3 text-[15px] " : "bg-white p-3"
        }`}
      >
        <p className={`${flex ? "font-bold text-[15px]" : ""}`}>
          Xəbərlərimizə abunə ol
        </p>
        <div
          className={`space-y-3 ${flex ? "flex items-center space-x-3 " : ""}`}
        >
          <FormText type={"email"} padding={p} placeholder={"Enter Email"} />
          <Button block={block} rounded={"rounded-theme"} property={"sky-blue"}>
            Abunə ol
          </Button>
        </div>
      </div>
    </>
  );
}

export default SubscribeEmail;