import Button from "@/atoms/common/Button";

export default {
  component: Button,
};

const publicMediaUrl =
  process.env.NEXT_PUBLIC_MEDIA_STORE_URL || "/static_images";

export const PrimaryButton = {
  args: {
    children: "Add Button Text",
    className:
      "bg-brand py-2 flex items-center justify-center text-base leading-5 text-white text-medium rounded-full font-normal hover:shadow-xl",
  },
};

export const PrimaryButtonWithIcon = {
  args: {
    children: "Add Button Text",
    className:
      "bg-brand py-2 flex items-center justify-center text-base leading-5 text-white text-medium rounded-full font-normal hover:shadow-xl",
    iconUrl: `${publicMediaUrl}/icons/call-white.svg`,
    iconPosition: "Left",
    iconWidth: 22,
    iconHeight: 22,
    iconGroupClassName: "gap-2",
  },
};

export const ExpiredButton = {
  args: {
    children: "Expired Button",
    className: "bg-nero",
  },
};
